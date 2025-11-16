import Header from "../shared/Layouts/Header";
import Footer from "../shared/Layouts/Footer";

function PanelLayout({ children }) {
  return (
    <>
      <Header type="panel" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PanelLayout;
