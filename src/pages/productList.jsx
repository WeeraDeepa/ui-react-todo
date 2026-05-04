import {useEffect, useState} from "react";
import {AddProductForm1, AddProductForm2} from "../components/forms.jsx";

let initProducts = [
  {productName: "Samsung Galaxy 100", brand: "Samsung", category: "Phone", unitPrice: 120, quantity: 2},
  {productName: "Nokia X20", brand: "Samsung", category: "Phone", unitPrice: 100, quantity: 4},
  {productName: "Oppo DX1", brand: "Oppo", category: "Phone", unitPrice: 130, quantity: 6},
]

export function ProductList() {

  const [products, setProducts] = useState([]);/**/

  function initializeProductList() {
    let storedProducts = []
    let strStoredProducts = localStorage.getItem("productList");
    if (strStoredProducts) {
      storedProducts = JSON.parse(strStoredProducts);
    }
    console.log(Date());
    setProducts(storedProducts);
  }

  /**/
  useEffect(() => initializeProductList(), []);

  function handleDeleteItem(index) {
    let newItemList = [...products]
    newItemList.splice(index, 1)
    setProducts(newItemList)
    localStorage.setItem("productList", JSON.stringify(newItemList));
  }

  function handleAddProduct(product) {
    let newItemList = [...products, product]
    setProducts(newItemList)
    localStorage.setItem("productList", JSON.stringify(newItemList));

  }

  return (
    <div className="container py-1">
      {/*<AddProductForm1 addProduct={handleAddProduct}/>*/}
      <AddProductForm2 addProduct={handleAddProduct}/>
      {
        products.map((product, idx) => {
          return (
            <ProductItem
              key={idx}
              productName={product.productName}
              category={product.category}
              brand={product.brand}
              unitPrice={product.unitPrice}
              quantity={product.quantity}
              index={idx}
              deleteItem={handleDeleteItem}
            />
          )
        })
      }

      {/*<ProductItem productName="Samsung Galaxy 100" brand="Samsung" category="Phone" unitPrice={120} quantity={2}/>*/}
      {/*<ProductItem productName="Nokia X20" brand="Nokia" category="Phone" unitPrice={100} quantity={4}/>*/}
      {/*<ProductItem productName="Oppo DX1" brand="Oppo" category="Phone" unitPrice={130} quantity={6}/>*/}
    </div>
  )
}

function ProductItem(props) {
  const [quantity, setQuantity] = useState(props.quantity)

  function handleDecrement_0() {
    if (quantity > 1) {
      let storedProducts = JSON.parse(localStorage.getItem("productList"));
      let newQty = quantity - 1
      setQuantity(newQty)
      let newStoredProduct = {...storedProducts[props.index], quantity: newQty};

      // let filteredStoredList = storedProducts.filter(item => item.index !== props.index);
      // let newStoredList = [...filteredStoredList, newStoredProduct]
      console.log(storedProducts)
    }
  }

  function handleDecrement() {
    if (quantity > 1) {
      // 1. Calculate the new quantity
      const newQty = quantity - 1;
      setQuantity(newQty);

      // 2. Get the current list from localStorage
      let storedProducts = JSON.parse(localStorage.getItem("productList")) || [];

      // 3. Update only the item at the specific index
      if (storedProducts[props.index]) {
        storedProducts[props.index].quantity = newQty;

        // 4. Save the entire updated list back to localStorage
        localStorage.setItem("productList", JSON.stringify(storedProducts));
      }

      // console.log("Updated List:", storedProducts);
    }
  }

  function handleIncrement() {
    const newQty = quantity + 1;
    setQuantity(newQty)

    let storedProducts = JSON.parse(localStorage.getItem("productList")) || [];
    if (storedProducts[props.index]) {
      storedProducts[props.index].quantity = newQty;
      localStorage.setItem("productList", JSON.stringify(storedProducts));
    }
    // console.log("Updated List:", storedProducts);
  }

  return (
    <div className="row border-bottom align-items-center">
      <div className="col-4">
        <h4>{props.productName}</h4>
        <p>
          Brand:{props.brand}<br/>
          Category:{props.category}<br/>
          Unit Price:{props.unitPrice}$
        </p>
      </div>
      <div className="col-2">
        {/*<span className="rounded border m-1 p-1">{props.quantity}</span>*/}
        {/*<Counter quantity={props.quantity}/>*/}
        <ControlledCounter
          quantity={quantity}
          increment={handleIncrement} decrement={handleDecrement}
        />
      </div>
      <div className="col-2">
        <span>{props.unitPrice * quantity}</span>
      </div>
      <div className="col-2">
        <button type="button" onClick={props.deleteItem}
                className="btn btn-danger btn-sm">Delete
        </button>
      </div>
    </div>
  )
}

function Counter(props) {
  // let quantity = props.quantity

  const [quantity, setQuantity] = useState(props.quantity)

  function handleDecrement() {
    if (quantity > 1) {
      let value = quantity - 1
      setQuantity(value)
      // console.log(quantity)
    }
  }

  function handleIncrement() {
    let value = quantity + 1
    setQuantity(value)
    // console.log(quantity)
  }

  return (
    <>
      <button onClick={handleDecrement} type="button" className="btn btn-outline-secondry btn-ms w-22">-</button>
      <span className="px-3 text-align-center">{quantity}</span>
      <button onClick={handleIncrement} type="button" className="btn btn-outline-secondry btn-ms w-22">+</button>
    </>
  )
}

function ControlledCounter(props) {
  return (
    <>
      <button type="button" className="btn btn-outline-secondry btn-ms w-22"
              onClick={props.decrement}>-
      </button>
      <span className="px-3 text-align-center">{props.quantity}</span>
      <button type="button" className="btn btn-outline-secondry btn-ms w-22"
              onClick={props.increment}>+
      </button>
    </>
  )


}

// /* local storage */
// localStorage.setItem('key1', 'key1-value')
// localStorage.setItem('key2', 'key2-value')
// localStorage.setItem('key3', 'key3-value')
//
// /* get local storage */
// let getKey1 = localStorage.getItem('key1')
// console.log(getKey1);
//
// /* update local storage */
// localStorage.setItem('key1', 'key1-value-updated')
// getKey1 = localStorage.getItem('key1')
// console.log(getKey1);
//
// /* remove local storage */
// localStorage.removeItem('key1')
//
// /* can store string values */
// let product = {productName: 'iPhone 15', brand: 'Samsung Galaxy 100', unitPrice: 120, quantity: 100};
// localStorage.setItem('product1', JSON.stringify(product));
//
// /* local storage string to js object */
// let productStr = localStorage.getItem('product1')
// let productObj = JSON.parse(productStr)
// console.log(productObj)