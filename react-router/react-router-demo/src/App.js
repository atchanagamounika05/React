import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
/* import About from "./components/About"; */
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Order from "./components/Order";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import Featured from "./components/FeaturedProd";
import New from "./components/NewProd";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import AdminUser from "./components/AdminUser";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/Auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const AboutLazy = React.lazy(() => import("./components/About"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* <Navbar /> */}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="...Loading">
                <AboutLazy />
              </React.Suspense>
            }
          />
          <Route path="order" element={<Order />} />
          <Route path="products" element={<Products />}>
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="users" element={<Users />}>
            {/*      <Route path="user-details" element={<UserDetails />}> */}
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<AdminUser />} />
          </Route>
          {/* <Route path="users/1" element={<UserDetails />} />
        <Route path="users/2" element={<UserDetails />} />
        <Route path="users/3" element={<UserDetails />} /> */}
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
