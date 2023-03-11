import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



export const Layout = ({ children }) => {
  return (
    <main className="flex flex-col h-screen bg-slate-200">
      <NavbarComponent />
      {children}
      <Footer />
    </main>
  );
};