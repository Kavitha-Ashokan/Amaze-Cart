import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/shopping.svg";
import { Icon } from "react-icons-kit";
import { cart } from "react-icons-kit/entypo/cart";
// import { useHistory } from "react-router-dom";
import { auth } from "../config/config";
import { CartContext } from "../global/CartContext";
import { isEmpty } from "lodash";

export const Navbar = ({ user, history }) => {
  const { totalQty } = useContext(CartContext);
  console.log("oook", user);

  const logout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };
  return (
    <div className="navbox">
      <Link to="/products" className="nav-header navlink">
        <div className="leftside">
          <img src={logo} alt="" />
        </div>
        <h1 className="navbox-head">Amaze Cart</h1>
      </Link>

      {!isEmpty(user) && (
        <div className="rightside">
          <span>
            <Link to="/products" className="user-name navlink">
              {user}
            </Link>
          </span>
          <span>
            <Link to="cartproducts">
              <Icon icon={cart} className="cart-icon"/>
            </Link>
          </span>
          <div className="relative">
            <span className="no-of-products">{totalQty}</span>
          </div>
          <span>
            <button className="logout-btn" onClick={logout}>
              LOGOUT
            </button>
          </span>
        </div>
      )}
    </div>
  );
};
