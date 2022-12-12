import React, { useState } from "react";
import { SHOP } from "../constants";

const ProductList = () => {
   const [product, setProduct] = useState(SHOP)

   const [item, setItem] = useState('')
   const [quantity, setQuantity] = useState('')
   const [price, setPrice] = useState('')

   const [selectedProduct, setSelectedProduct] = useState({})
   const [editState, setEditState] = useState(false)

   const deleteProduct = (givenId) => {
    setProduct(product.filter((p) => p.id !== givenId));
   }

   const addProduct = () => {
    setProduct([...product, {id: new Date().getTime(), item, quantity, price}])
    setItem("")
    setQuantity("")
    setPrice("")
   }

   const storeProduct = (product) => {
    setItem(product.item)
    setQuantity(product.quantity)
    setPrice(product.price)
    setSelectedProduct(product)
    setEditState(true)
   }
   
   const updateProduct = () => {
    setProduct(product.map((products) => products.id === selectedProduct.id ? {...products, item, quantity, price} : products))
    setEditState(false)
    setSelectedProduct(null)
    setItem("")
    setQuantity("")
    setPrice("")
   }

    return (
       <div>
        <h1 className="title">Products List</h1>
         <div className="saman">
        <table>
                <tr>
                <th>S.N</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Options</th>
                </tr>

                {product.map((products, j) => {
                return (
                    <tr key={j}>
                    <td>{j + 1}</td>
                    <td>{products.item}</td>
                    <td>{products.quantity}</td>
                    <td>{products.price}</td>
                    <td>{products.quantity * products.price}</td>
                    <td>{<button id="delete" onClick={() => deleteProduct(products.id)}>Delete</button>} 
                     {<button id="update" onClick={() => storeProduct(products)}>Update</button>}</td>
                    </tr>
                    
                )
                })
                }   
      </table>
            </div>
   
        <div>
           <p>Enter Item</p><input onChange={(e) => setItem(e.target.value)} value={item}/> 
        </div>
        <br></br>
        <div>
           <p>Enter Quantity</p> <input type={"number"} onChange={(e) => setQuantity(e.target.value)} value={quantity}/> 
        </div>
        <br></br>
        <div>
            <p>Enter Price</p><input type={"number"} onChange={(e) => setPrice(e.target.value)}  value={price}/> 
        </div>
        <br></br>
        <div>
            <button onClick={() => editState ? updateProduct() : addProduct()}>{editState ? "Update" : "Add"}</button>
        </div>
       </div>
   
    )

}

export default ProductList