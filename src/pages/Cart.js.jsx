import {createContext, useContext, useState} from "react";
import {AppContext} from "../AppContext.jsx";

/* to share state between multiple component, need to define in parent */
/* to share state, create context */
/* wrap with context provider*/
/* add value attribute with js expression, js-obj,any number of variables */
/* any component, that is child of CartContext can request objects*/
/* create variable data = useContext(CartContext) */
/* then, you can use shared quantity and function*/
/* next, share state, different components, different files eg-> cart to navbar*/
/* need to define state & parent component in target components [App,Navbar,..]*/
const CartContext = createContext();


export function Cart() {
  // const [quantity, setQuantity] = useState(1); /* move to App*/
  // const data = useContext(AppContext);
  const {quantity} = useContext(AppContext);

  return (
    // <CartContext.Provider value={{quantity, setQuantity}}>
    <div className="container my-4 border p-2">
      <h4>Cart: {quantity}</h4>
      <Component1/>
    </div>
    // </CartContext.Provider>
  )
}

export function Component1() {
  return (
    <div className="border p-2">
      <h6>Component 1</h6>
      <Component2/>
    </div>
  )
}

export function Component2() {
  return (
    <div className="border p-2">
      <h6>Component 2</h6>
      <Component3/>
    </div>
  )
}

export function Component3() {
  return (
    <div className="border p-2">
      <h6>Component 3</h6>
      <Counter/>
    </div>
  )
}

export function Counter() {
  // const data = useContext(CartContext);
  const data = useContext(AppContext);
  // const [quantity, setQuantity] = useState(1);

  /* share state between multiple components , define it in parent  */

  function increment() {
    // setQuantity(quantity + 1);
    data.setQuantity(data.quantity + 1);
  }

  function decrement() {
    // if (quantity > 1) {
    if (data.quantity > 1) {
      data.setQuantity(data.quantity - 1);
    }
  }

  return (
    <div className="border p-2">
      <h6>Counter</h6>
      <button
        className="btn btn-outline-secondry btn-sm text-align-center"
        onClick={decrement}> -
      </button>
      <span className="rounded-3 border p-1 m-1">{data.quantity}</span>
      <button
        className="btn btn-outline-secondry btn-sm text-align-center"
        onClick={increment}> +
      </button>
    </div>
  )
}