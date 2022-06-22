import Footer from "./Footer";
import Header from "./Header";

export default function Layouts({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
