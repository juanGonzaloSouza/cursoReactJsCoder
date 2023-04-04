import { Item } from "../Item/Item"
import "./ItemList.css"


export const ItemList = ({id, nombre, precio, foto}) => {

    return (

    <div className="carta" key={id} >
        <Item 
          id = {id}
          nombre = {nombre}
          precio = {precio}
          foto = {foto}
        />
    </div>

    )
    }
