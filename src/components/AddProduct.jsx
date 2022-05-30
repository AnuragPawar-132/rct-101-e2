import React from "react";
import { useState } from "react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => {<button>sss</button>};
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  const [item, setItem]= useState("")
  const [data, setData]= useState([]);
  

  const handleChange=(e)=>{
    e.preventDefault();
    let {name, value, type, checked}= e.target;

    // if(type="checked"){
    //   setItem({
    //     ...item,
    //     [name]: checked
    //   })
    // }
    // else{
    //   setItem({
    //     ...item,
    //     [name]: value
    //   })
    // }
    setItem({
      ...item,
      [name]: value
    })
  }


  const handleSubmit=(e)=>{
      e.preventDefault();
      if(item){
        data.push(item)
      }
    fetch("http://localhost:8080/products",{
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify({
        id:Date.now(),
        title: item.title,
        category: item.category,
        gender: item.gender,
        price: item.price
      })
    }).then((res)=>res.json())
    .then((data0)=>{
      setItem(data0)
    })
  }

  return (
    <>
      <button my={4} data-cy="add-product-button" >Add Item</button>
      <modal>
        <modalbody pb={6}>
          <h2>Title</h2>
          <input data-cy="add-product-title" 
                placeholder="Title" 
                type="text"
                name="title"
                value= {item.title}
                onChange={handleChange}  />
          <select data-cy="add-product-category" 
                name="category"
                value={item.category}
                onchange={handleChange} >
            <option>Category</option>
            <option data-cy="add-product-category-shirt" value="Shirt" >Shirts</option>
            <option data-cy="add-product-category-pant" value="Pants" >Pants</option>
            <option data-cy="add-product-category-jeans" value="Jeans" >Jeans</option>
          </select>
          <div data-cy="add-product-gender">
            <input data-cy="add-product-gender-male" type="radio" name="Male" value="Male" />
            <p>Male</p>
            <input data-cy="add-product-gender-female" type="radio" name="Female" value="Female" />
            <p>Female</p>
            <input data-cy="add-product-gender-unisex" type="radio" name="Unisex" value="Unisex" />
            <p>Unisex</p>
          </div>
          <input data-cy="add-product-price" placeholder="Price" />
          <button data-cy="add-product-submit-button" onClick={handleSubmit} >Create</button>
        </modalbody>
      </modal>
    </>
  );
};

export default AddProduct;
