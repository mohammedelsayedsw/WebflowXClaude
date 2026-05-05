"use client";
import * as React from "react";
import { cj, debounce } from "../../utils";
import { SliderContext, SliderConfig } from "../helpers/sliderContext";

function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  config,
}: {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  config?: {
    disableSwipe?: boolean;
  };
}) {
  const SWIPE_DELTA = 150;
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    setTouchStart(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    setTouchEnd(touch.clientX);
  };

  const handleTouchEnd = () => {
    if (config?.disableSwipe) return;
    if (touchStart - touchEnd > SWIPE_DELTA) {
      onSwipeLeft();
    }
    if (touchStart - touchEnd < -SWIPE_DELTA) {
      onSwipeRight();
    }
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
}

type SliderWrapperProps = SliderConfig & {
  className?: string;
  children?: React.ReactNode;
};

export type { SliderWrapperProps };

const SliderWrapper = React.forwardRef<HTMLDivElement, SliderWrapperProps>(
  function SlideWrapper({ className = "", ...props }, ref) {
    const [slideAmount, setSlideAmount] = React.useState(0);
    const [selectedSlide, setSelectedSlide] = React.useState(0);
    const [prevSelectedSlide, setPrevSelectedSlide] = React.useState(0);
    const [isAutoplayPaused, setAutoplayPause] = React.useState(false);

    const setCurrentSlide = debounce((value: number) => {
      setSelectedSlide((prev) => {
        setPrevSelectedSlide(prev);
        return value;
      });
    });

    const goToNextSlide = debounce(() => {
      if (selectedSlide === slideAmount - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(selectedSlide + 1);
      }
    });

    const goToPreviousSlide = debounce(() => {
      if (selectedSlide === 0) {
        setCurrentSlide(slideAmount - 1);
      } else {
        setCurrentSlide(selectedSlide - 1);
      }
    });

    const swipeHandlers = useSwipe({
      onSwipeLeft: goToNextSlide,
      onSwipeRight: goToPreviousSlide,
    });

    return (
      <SliderContext.Provider
        value={{
          ...props,
          slideAmount,
          setSlideAmount,
          slide: { current: selectedSlide, previous: prevSelectedSlide },
          setCurrentSlide,
          goToNextSlide,
          goToPreviousSlide,
          isAutoplayPaused,
          setAutoplayPause,
        }}
      >
        <div
          {...swipeHandlers}
          className={cj(className, "w-slider")}
          role="region"
          aria-label="carousel"
          ref={ref}
        >
          {props.children}
        </div>
      </SliderContext.Provider>
    );
  }
);

export default SliderWrapper;
