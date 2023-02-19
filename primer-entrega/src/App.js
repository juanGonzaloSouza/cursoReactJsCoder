import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola como estas"}/>

      <ProductCard title={"Nike Force 1"} price={400} description={"Nike Force 1 con colores rojos y blancos"} img={"link"} stock={true} />
      <ProductCard title={"Adidas Running"} price={800} description={"Adidas Running con colores rojos y blancos"} img={"link"} stock={true} />
      <ProductCard title={"Nike Force 3"} price={200} description={"Nike Force 3 con colores rojos y blancos"} img={"link"} stock={false} />
      <ProductCard title={"Nike Force 3"} price={200} description={"Nike Force 3 con colores rojos y blancos"} img={"link"} stock={true} />

      <Footer />
    </div>
  );
}

export default App;
