import { Navbar, MainHeaderWithFigure } from "ui";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "absolute",
          top: "86px",
          minWidth: "100vw",
          zIndex: "-1",
        }}
      >
        <MainHeaderWithFigure />
      </div>
    </>
  );
}
