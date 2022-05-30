import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (

    <AddProduct />
    
    // <Flex>
    //   <AddProduct />
    //   <Grid>{/* List of Products */}</Grid>
    //   <Pagination/>
    // </Flex>
  );
};

export default Products;
