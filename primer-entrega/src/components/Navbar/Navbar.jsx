import Style from "./Navbar.module.css";
import CartWidget from "./CartWidget/CartWidget.jsx";

const Navbar = () => {
  return (
    <nav>
      <p className={Style.navLogo}>SmartBuy</p>
      <ul className={Style.navList}>
        <li>Google</li>
        <li>Facebook</li>
        <li>Github</li>
      </ul>
      <CartWidget numero={1} />
    </nav>
  );
};

export default Navbar;
