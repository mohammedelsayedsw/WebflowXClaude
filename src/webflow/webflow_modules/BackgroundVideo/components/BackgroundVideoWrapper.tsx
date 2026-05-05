"use client";
import React from "react";
import { cj, debounce } from "../../utils";
import { BgVideoContext } from "../helpers/bgVideoContext";

type BackgroundVideoWrapperProps = {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
  sources?: string[];
  posterImage?: string;
  autoPlay?: boolean;
  loop?: boolean;
  children?: React.ReactNode;
};

export type { BackgroundVideoWrapperProps };

const BackgroundVideoWrapper = React.forwardRef<
  HTMLVideoElement,
  BackgroundVideoWrapperProps
>(function BackgroundVideoWrapper(
  {
    tag = "div",
    className = "",
    autoPlay = true,
    loop = true,
    sources = [],
    posterImage = "",
    children,
  },
  ref
) {
  const [isPlaying, setIsPlaying] = React.useState(autoPlay);
  const video = React.useRef<HTMLVideoElement | null>(null);

  React.useImperativeHandle(ref, () => video.current as HTMLVideoElement);

  const togglePlay = debounce(() => {
    setIsPlaying(!isPlaying);

    if (!video?.current) return;

    if (video.current.paused) {
      video.current.play();
    } else {
      video.current.pause();
    }
  });

  return (
    <BgVideoContext.Provider value={{ isPlaying, togglePlay }}>
      {React.createElement(
        tag,
        {
          className: cj(
            className,
            "w-background-video",
            "w-background-video-atom"
          ),
        },
        <video
          ref={video}
          autoPlay={autoPlay}
          loop={loop}
          style={
            posterImage
              ? { backgroundImage: `url("${posterImage}")` }
              : undefined
          }
          muted
          playsInline
        >
          {sources.map((url) => (
            <source src={url} key={url} />
          ))}
        </video>
      )}
      {children}
    </BgVideoContext.Provider>
  );
});

export default BackgroundVideoWrapper;
