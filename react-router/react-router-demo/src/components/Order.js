import React from "react";
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Order Confirmed</h1>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default Order;
