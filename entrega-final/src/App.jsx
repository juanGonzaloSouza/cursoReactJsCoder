// ------ Context ------
import { CartContextProvider } from './context/CartContext';

// ------ Componentes ------
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar/NavBar';

import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner';
import { ItemDetailConteiner } from './components/ItemDetailConteiner/ItemDetailConteiner';
import {CartContainer} from './components/CartContainter/CartContainer'
import { Checkout } from './components/Checkout/Checkout';

// ----- Aplicacion -----
function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Container> 
          <header>
            <h1>Pre-Entrega 2</h1>
            <NavBar />
          </header>
          <main>
            <section>
              <Routes>
                <Route path='/' element={ <ItemListConteiner />} />
                <Route path='/categoria/:idCategoria' element={ <ItemListConteiner />} />
                <Route path='/detalle/:idProducto' element={ <ItemDetailConteiner />} />
                <Route path='/cart' element={ <CartContainer />} />
                <Route path='/checkout' element={ <Checkout />} />
                <Route path='*' element={ <Navigate to='/' />} />
              </Routes>
            </section>
          </main>
        </Container>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App