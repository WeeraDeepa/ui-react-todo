import {useState} from "react";

export function AddProductForm1(props) {
  function handleAddProduct(event) {
    event.preventDefault()

    /*
    let productName = event.target.productName.value
    let brand = event.target.brand.value
    let category = event.target.category.value
    let unitPrice = event.target.unitPrice.value
    let quantity = event.target.quantity.value

    if (!productName || !brand || !category || !unitPrice || !quantity) {
      alert("Please enter required fields")
      return;
    }

    let product = {productName, brand, category, unitPrice, quantity}
    console.log(product)

    */

    const formData = new FormData(event.target);
    let product = Object.fromEntries(formData.entries());
    console.log(product)

    if (!product.productName || !product.brand || !product.category || !product.unitPrice || !product.quantity) {
      alert("Please enter required fields")
      return;
    }

    event.target.reset()  //clear form

    props.addProduct(product)
  }

  return (
    <form className="row mb-5 g-3" onSubmit={() => handleAddProduct(event)}>
      <div className="col-md-4">
        <label className="form-label">Name</label>
        <input className="form-control" type="text" name="productName"/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Brand</label>
        <input className="form-control" type="text" name="brand"/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Category</label>
        <input className="form-control" type="text" name="category"/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Unit Price</label>
        <input className="form-control" type="text" name="unitPrice"/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Quantity</label>
        <input className="form-control" type="text" name="quantity" defaultValue={1}/>
      </div>

      <div className="col-md-12">
        <button className="btn btn-primary my-2" type="submit">Add</button>
      </div>
    </form>
  )
}

export function AddProductForm2(props) {
  /* bind state to every input field */

  const [productName, setProductName] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [quantity, setQuantity] = useState('1')

  function handleSubmit(event) {
    event.preventDefault() /* prevent browser submit form */

    if (!productName || !brand || !category || !unitPrice || !quantity) {
      alert("Please enter all fields")
      return
    }
    let product = {productName, brand, category, unitPrice, quantity}

    setProductName('')
    setBrand('')
    setCategory('')
    setUnitPrice('')
    setQuantity('1')

    props.addProduct(product)
  }

  return (
    <form className="row mb-5 g-3" onSubmit={(event) => handleSubmit(event)}>
      <div className="col-md-4">
        <label className="form-label">Name</label>
        <input className="form-control" type="text" name="productName"
               value={productName}
               onChange={(event) => setProductName(event.target.value)}/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Brand</label>
        <input className="form-control" type="text" name="brand"
               value={brand}
               onChange={(event) => setBrand(event.target.value)}/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Category</label>
        <input className="form-control" type="text" name="category"
               value={category}
               onChange={(event) => setCategory(event.target.value)}/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Unit Price</label>
        <input className="form-control" type="text" name="unitPrice"
               value={unitPrice}
               onChange={(event) => setUnitPrice(event.target.value)}/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Quantity</label>
        <input className="form-control" type="text" name="quantity"
          // defaultValue={1}
               value={quantity}
               onChange={(event) => setQuantity(event.target.value)}/>
      </div>

      <div className="col-md-12">
        <button className="btn btn-primary my-2" type="submit">Add</button>
      </div>
    </form>
  )
}