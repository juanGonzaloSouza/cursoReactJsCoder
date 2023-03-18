import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { productsAdded } = useContext(CartContext);
const count = Array.isArray(productsAdded) ? productsAdded.length : 0;

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Link to="/cart" className="relative">
        <button
          type="button"
          className="botonCarrito rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <AiOutlineShoppingCart color="black" size={40} />
        </button>
        {count > 0 && (
          <span className="contador absolute w-4 h-4 bottom-0 -right-2 rounded-full flex justify-center items-center bg-white/70">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;