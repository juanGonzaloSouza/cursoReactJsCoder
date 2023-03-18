import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import Banner from './components/Banner/Banner';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import CartWidget from "./components/CartWidget/CartWidget"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Footer />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:category" element={<ItemListContainer />} />

        <Route path="/cart" element={<CartWidget />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h1> error 404: Not found </h1>} />
      </Routes>

    </BrowserRouter>






  );
}

export default App;


