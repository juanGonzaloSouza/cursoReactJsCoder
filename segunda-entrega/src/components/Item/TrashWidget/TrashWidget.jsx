import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  console.log({ itemId });
  return (
    <button class="botonBasura"
      onClick={() => removeItem(itemId)}
      className="absolute flex justify-center items-center -top-2 -right-2 w-8 h-8 bg-red-200 rounded-full"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
      </svg>
    </button>
  );
};