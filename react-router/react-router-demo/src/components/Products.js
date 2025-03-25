import React from "react";
import { Link, Outlet } from "react-router-dom";
function Products() {
  return (
    <>
      <div>
        <h1>Products page</h1>
      </div>
      <nav>
        <Link to="featured">Featured</Link>{" "}
        {/* relative paths and /products/featured - absolute paths - primary navigation bar */}
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
