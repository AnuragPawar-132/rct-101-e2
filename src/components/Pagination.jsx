import React from "react";
import { useState } from "react";

const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
const [page, setPage]= useState("");
const [limit, setLimit]= useState("");
  
  let url= `http://localhost:8080/products?_page=${page}&_limit=${limit}`

  return (
    <div>
      <button data-cy="pagination-first-button">First</button>
      <button data-cy="pagination-previous-button">Previous</button>
      <select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </select>
      <button data-cy="pagination-next-button">Next</button>
      <button data-cy="pagination-last-button">Last</button>
    </div>
  );
};

export default Pagination;
