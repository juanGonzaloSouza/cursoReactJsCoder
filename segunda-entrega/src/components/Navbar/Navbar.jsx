import Style from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" aria-current="page">
        <p className={Style.navLogo}>SmartBuy</p>
      </Link>
      <ul className={Style.navList}>
        <Link
          to="/"
          className="links text-black px-3 py-2 rounded-md text-sm font-medium"
          aria-current="page"
        >
          Home
        </Link>
        <Link to="/category/Smartphones" aria-current="page">
          Smartphones
        </Link>
        <Link to="/category/Laptops" aria-current="page">
          Laptops
        </Link>
        <Link to="/category/Tablets" aria-current="page">
          Tablets
        </Link>
        <Link to="/category/Camaras" aria-current="page">
          Cámaras
        </Link>
        <Link to="/category/Accesorios" aria-current="page">
          Accesorios
        </Link>
        <Link to="/category/Audio-y-video" aria-current="page">
          Audio y video
        </Link>
        <Link to="/category/Gaming" aria-current="page">
          Gaming
        </Link>
        <Link to="/category/Smartwatches" aria-current="page">
          Smartwatches
        </Link>
        <Link to="/category/Smart-Home" aria-current="page">
          Smart Home
        </Link>
        <Link to="/category/Deportes" aria-current="page">
          Deportes
        </Link>
      </ul>
      <CartWidget/>
    </nav>
  );
};

export default Navbar;
