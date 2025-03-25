import React, { useEffect } from "react";
import { fetchUser } from "../redux";
import { connect } from "react-redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log("userData", userData);
  return userData.loading ? (
    <div>loading....</div>
  ) : userData.error ? (
    <div>{userData.error}</div>
  ) : (
    <div>
      <h2>User Names</h2>
      {userData &&
        userData.data &&
        userData.data.map((user) => <p>{user.name}</p>)}
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    userData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUser()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(UserContainer);
