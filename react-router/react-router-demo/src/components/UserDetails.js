import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  /* const params = useParams();
  const userId = params.userId; */
  const { userId } = useParams();
  return (
    <div>
      <h1>User Details {userId} </h1>
    </div>
  );
}

export default UserDetails;
