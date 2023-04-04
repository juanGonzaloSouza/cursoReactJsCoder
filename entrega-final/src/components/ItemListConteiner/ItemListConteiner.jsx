import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

import { gProducts } from "../../utils/gProducts"
import { ItemList } from '../ItemList/ItemList'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Loading } from '../Loading/Loading'


export const ItemListConteiner = () => {

    const[ productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
   
    const{ idCategoria } = useParams()


        useEffect(()=>{

        if(idCategoria){
            gProducts()
            .then(res => setProductos(res.filter(producto => producto.categoria === idCategoria)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else{
            gProducts()
            .then(res => setProductos(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } 
    },[idCategoria])

    return <Container>
        <Row>
        { loading ? 
                    <Loading />
                :

             productos.map(producto => 
                <ItemList ClassName = "col"
                    id = {producto.id}
                    nombre = {producto.name}
                    precio = {producto.price}
                    foto = {producto.img}
                />
        )}
        </Row>
        </Container>
}
    
    