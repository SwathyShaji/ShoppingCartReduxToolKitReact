import React, { useEffect } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";
import { FaShoppingCart } from "react-icons/fa";


export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand >SHOP.in</MDBNavbarBrand>
        <MDBBtn color="light">
          <Link to="/shoes">Shoes</Link>
        </MDBBtn>
        <MDBBtn color="light">
          <Link to="/mobiles">Mobiles</Link>
        </MDBBtn>
        <MDBBtn color="light">
          <Link to="/">All Products</Link>
        </MDBBtn>
        <MDBBtn color="light">
          <Link to="/contact">Contact</Link>
        </MDBBtn>
        <MDBBtn color="light">
          <Link to="/cart">
            <FaShoppingCart />
            <span className="badge rounded-pill bg-danger">{totalQuantity}</span>
          </Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}

