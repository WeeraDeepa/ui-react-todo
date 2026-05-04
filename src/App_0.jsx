import {Navbar} from "./components/navbar.jsx";
import {Footer} from "./components/footer.jsx";
import {Hero} from "./components/Hero.jsx";
import {Container} from "./components/container.jsx";
import {ProductList} from "./pages/productList.jsx";
import {AddProductForm1} from "./components/forms.jsx";
import {Cart} from "./pages/Cart.js.jsx";
import {AppContext} from "./AppContext.jsx";
import {useState} from "react";

function App() {
  const [quantity, setQuantity] = useState(1); /* moved from Cart*/
  const content = "Welcome React Shop"


  return (
    <>
      <AppContext.Provider value={{quantity, setQuantity}}>
        <Navbar/>
        {/*<Hero/>*/}
        <Container>
          <ProductList/>
          <Cart/>
        </Container>
        <Footer/>
      </AppContext.Provider>
    </>
  )
}

export default App
