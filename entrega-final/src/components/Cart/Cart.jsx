import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./Cart.css"
import { Link } from "react-router-dom"

export const Cart= () =>{

    const { cartList, vaciarCarrito } = useContext(CartContext)

    return (
        <>
        {
            cartList.map(prodCart => (
                <div className="cart">
                   
                    <img src={prodCart.product.img} className="cart-img" alt="fotoProducto" />
                    <p>{prodCart.product.name} </p>
                    <p>x{prodCart.cantidad}</p>
                    <p>{prodCart.product.price}</p>
                   
                </div>
            ))
        } 
               
        <center>
        <button onClick={vaciarCarrito} className="btn btn-danger btn-cart" > Vaciar Carrito</button>  
        <Link to='/checkout'>
        <button onClick={vaciarCarrito} className="btn btn-primary btn-cart" > Comprar</button>  
        </Link>   
        </center>
    </>
    )
}