export default function Page() {
  return (
    <>
      <style>{`body{overflow:hidden!important;margin:0}`}</style>
      <iframe
        src="/solutions/demos/helly-xray.html"
        title="Helly Hansen — Store X-ray by scandiweb"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          border: "none",
          zIndex: 2147483000,
          background: "#070a1a",
        }}
      />
    </>
  );
}
