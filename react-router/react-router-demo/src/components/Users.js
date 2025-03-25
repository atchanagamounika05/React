import React from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showComp = searchParams.get("filter") === "active";
  return (
    <nav>
      <h1>
        <Link to="user-details">User 1</Link>{" "}
      </h1>
      <h1>
        <Link to="user-details">User 2</Link>{" "}
      </h1>
      <h1>
        <Link to="user-details">User 3</Link>{" "}
      </h1>
      <h1>
        <Link to="admin">Admin</Link>{" "}
      </h1>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>remove filter</button>
      </div>
      {showComp ? <h1>Showing Active user</h1> : <h1>Showing all the users</h1>}
    </nav>
  );
}

export default Users;
