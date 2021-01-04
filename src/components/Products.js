import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../global/ProductContext";
import { CartContext } from "../global/CartContext";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
// import { useHistory } from "react-router-dom";
import { auth } from "../config/config";

export const Products = ({ user, history }) => {
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      }
    });
  }, [history]);

  // const data = useContext(CartContext);
  // console.log(data);
  const { dispatch } = useContext(CartContext);

  return (
    <div className="product-pg">
      {products.length !== 0 && <p className="products">PRODUCTS</p>}
      <div className="products-container">
        {products.length === 0 && (
          <div>slow internet...no products to display</div>
        )}
        {products.map((product) => (
          <div className="product-card" key={product.ProductID}>
            <div className="product-img">
              <img src={product.ProductImg} alt="not found" />
            </div>
            <div className="product-name">{product.ProductName}</div>
            <div className="product-price">Rs {product.ProductPrice}.00</div>
            <Button
            id="addcart"
              className="addcart-btn"
              variant="contained"
              color="primary"
              size="small"
              startIcon={<AddShoppingCartIcon/>}
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  id: product.ProductID,
                  product,
                });
              }}
              alignSelf="flex-end"
            >
              Add to cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
