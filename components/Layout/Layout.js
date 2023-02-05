import useMediaQuery from "../../hooks/useMediaQueryhooks";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const style = {
    position: "relative",
    width: "100%",
  };
  return (
    <div style={style}>
      <Navbar />
      {!isMobile ? <Sidebar /> : null}
      {children}
    </div>
  );
}
