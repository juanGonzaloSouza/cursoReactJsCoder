
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gProducts } from "../../utils/gProducts"

import { Detail } from "../Detail/Detail"
import { Loading } from '../Loading/Loading'


export const ItemDetailConteiner = () => {

        const [producto, setProducto] = useState({})
        const { idProducto } = useParams()
        const[loading, setLoading] = useState(true)
        
        useEffect(() => {
            gProducts(idProducto)
            .then(resp => setProducto(resp))
            .finally(() => setLoading(false))
        }, [])

    
    return (
    <> 
      { loading ? 
                    <Loading />
                :

                <Detail product={producto}/>
                
        }
     
    </>
    )
    }

