import React, { useEffect, useState } from "react";
import { MDBContainer, MDBNavbar, MDBBtn, MDBNavbarNav, MDBNavbarToggler } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";
import { FaShoppingCart, FaBars } from "react-icons/fa";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <MDBNavbar
      light
      bgColor="light"
      style={{ padding: "10px" }}
      expand={isNavbarOpen ? "lg" : "md"}
      expanded={isNavbarOpen}
    >
      <MDBContainer fluid className="d-flex justify-content-between align-items-center">
        <MDBNavbarToggler
          aria-controls="navbarExample01"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <FaBars />
        </MDBNavbarToggler>
        <MDBNavbarNav className={isNavbarOpen ? "show" : ""} left>
          <MDBBtn color="light" className="nav-link me-2 custom-button">
            <Link to="/"style={{color:"black"}} className="nav-link-text" onClick={toggleNavbar}>
              Home
            </Link>
          </MDBBtn>
          <MDBBtn color="light" className="nav-link me-2 custom-button">
            <Link to="/shoes" style={{color:"black"}}className="nav-link-text" onClick={toggleNavbar}>
             Shoes
            </Link>
          </MDBBtn>
          <MDBBtn color="light" className="nav-link me-2 custom-button">
            <Link  to="/backpacks"style={{color:"black"}} className="nav-link-text" onClick={toggleNavbar}>
            Backpacks
            </Link>
          </MDBBtn>
          <MDBBtn color="light" className="nav-link me-2 custom-button">
            <Link to="/contact"style={{color:"black"}} className="nav-link-text" onClick={toggleNavbar}>
              Contact
            </Link>
          </MDBBtn>
        </MDBNavbarNav>
        <MDBBtn color="light" className="nav-link ms-auto">
          <Link to="/cart" className="d-flex align-items-center" onClick={toggleNavbar}>
            <FaShoppingCart />
            <span className="badge rounded-pill bg-danger ms-1">{totalQuantity}</span>
          </Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
