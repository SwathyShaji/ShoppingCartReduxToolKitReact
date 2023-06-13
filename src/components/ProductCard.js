import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ProductCard({ category }) {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(
      category ? items.filter((item) => item.category === category) : items
    );
  }, [category, items]);

  const isAllProductsPage = !category; // Check if it's the "All Products" page

  return (
    <div className="m-2">
      <MDBContainer>
        {isAllProductsPage && (
          <div style={{ backgroundColor: "white", padding: "10px" }}>
            <h4>Special Offer: Get 20% Off on All Products!</h4>
            <p>Use code OFFER20 at checkout</p>
          
          </div>
        )}
        {category && <h4 style={{ color: "black" }}>{category} results</h4>}
        {category === "Mobiles" && (
          <div style={{ backgroundColor: "white", padding: "10px" }}>
            <p>Explore our latest collection of mobile phones.</p>
          </div>
        )}
        {category === "Shoes" && (
          <div style={{ backgroundColor: "white", padding: "10px" }}>
            <p>Discover our wide range of shoes for all occasions.</p>
          </div>
        )}
        <MDBRow className="mb-3">
          {filteredItems.map((item) => (
            <MDBCol key={item.id} size="md">
              <MDBCard>
                <MDBCardImage src={item.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>{item.price}</MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(item))}>
                    Buy now
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
      {isAllProductsPage && (
      <div className="d-flex flex-column align-items-center" style={{ backgroundColor: "white", padding: "10px" }}>
              <h4>Let's Stay in touch</h4>
              <p>Subscribe to our newsletter for the latest offers and updates.</p>
              <MDBInput label="Enter your email" outline />
              <MDBBtn color="primary">Subscribe</MDBBtn>
            </div>)}
    </div>
  );
}
