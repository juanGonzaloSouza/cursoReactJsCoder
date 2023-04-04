import { createContext, useState } from "react"

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])

    const addToCart = ( producto ) => {
        setCartList( [
            ... cartList,
            producto
        ] )
    }

    const vaciarCarrito = () => {
        setCartList([])
    }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            
        }}> 
            {children}
        </CartContext.Provider>
    )
}
