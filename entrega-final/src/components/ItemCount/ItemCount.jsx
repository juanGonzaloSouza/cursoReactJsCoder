import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Stack from 'react-bootstrap/Stack';


export const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    
    const [cantidad, setCantidad] = useState(initial);

    const addProd = (num) => {
        setCantidad(cantidad + num)
    }

    return (
        <div className='card mt5 w-100 todo-contador'>
            <div className='card-body row contador-body'>
    
                <div className='col'>
                    <center>
                        <label className='contador'>{cantidad}</label>
                    </center>
                </div>
                <div className='col'>
                    <Stack>
                        <button className='btn btn-primary w-100 btn-top' onClick={() => addProd(+1)} disabled={cantidad === stock}> + </button>
                        <button className='btn btn-outline-primary w-100 btn-down' onClick={() => addProd(-1)} disabled={cantidad === initial}> - </button>
                    </Stack>
                </div>

                <button className='btn btn-primary count-cart-btn margen-btn' onClick={() => onAdd(cantidad)}> Añadir al carrito </button>
                 
            </div>
            
        </div>
    )
}
