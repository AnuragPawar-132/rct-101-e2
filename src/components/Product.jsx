import React, { useState } from "react";
import Pagination from "./Pagination";

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  const [data, setData]= useState([]);

  fetch("http://localhost:8080/products")
  .then((res)=>res.json())
  .then((d)=>{
    setData(d)
    console.log("fetched", data);
  }
  );
  

  return (
    <div>
      {data.map((el)=>{
          return <div data-cy="product">
              <img data-cy="product-image" src={el.imageSrc}/>
              <p data-cy="product-category">{el.category}</p>
              <div>
                <p data-cy="product-gender">{el.gender}</p>
              </div>
              <h3 data-cy="product-title">{el.title}</h3>
              <p data-cy="product-price">{el.price}</p>
          </div>
      })}
      <Pagination data={data}/>
    </div>
  )
};

export default Product;


{/* {data.map((el)=>{
          return <div data-cy="product">
              <img data-cy="product-image" src={el.imageSrc}/>
              <p data-cy="product-category">{el.category}</p>
              <div>
                <p data-cy="product-gender">{el.gender}</p>
              </div>
              <h3 data-cy="product-title">{el.title}</h3>
              <p data-cy="product-price">{el.price}</p>
          </div>
      })} */}


// <stack data-cy="product">
    //   <image data-cy="product-image" />
    //   <text data-cy="product-category"></text>
    //   <tag>
    //     <taglabel data-cy="product-gender"></taglabel>
    //   </tag>
    //   <heading data-cy="product-title"></heading>
    //   <box data-cy="product-price"></box>
    // </stack>