import { Link } from 'react-router-dom'
import "./Item.css"

export const Item = ({id, nombre, precio, foto}) => {

    return (
    <div>
            <img src={foto} alt="imagen" className="foto-carta" />
            <p className="texto-carta">
            <span className="titulo-carta"> {nombre}</span>
            <span className='precio-carta'>${precio}</span>
            </p>
            <Link to={`/detalle/${id}`}><button className='boton-carta'>Detalle</button></Link> 
    </div>
     
             
        

    )
    }