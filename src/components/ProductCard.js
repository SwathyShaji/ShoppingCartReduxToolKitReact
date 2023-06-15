import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

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

  const categories = ["Shoes", "Backpacks"]; 
 
  return (
    <div className="m-2">
      <MDBContainer>
        {isAllProductsPage && (
          <div
            style={{
              backgroundColor: "rgba(255, 204, 188, 1.0)",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Special Offer Section */}
            <div style={{ display: "flex", flexDirection: "column-reverse" }}>
              <div style={{ textAlign: "right" }}>
                <img
                  src="https://m.media-amazon.com/images/I/61J0aqLw8NL._SX466_.jpg"
                  alt="Offer Image"
                  style={{ maxWidth: '600px', height: '300px', padding: "10px" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ textAlign: "left" }}>X-box For Your Living Room</h4>
                <p style={{ textAlign: "left" }}>Use code OFFER20 at checkout</p>
                <h3 style={{ color: "rgba(233, 30, 99, 1.0)", textAlign: "left" }}>$600</h3>
                <MDBBtn
                  style={{ backgroundColor: "rgba(233, 30, 99, 1.0)", textAlign: "right" }}
                  onClick={() => dispatch(addToCart(filteredItems[6]))}
                >
                  Buy now
                </MDBBtn>
              </div>
            </div>
          </div>
        )}

        {/* Categories Section */}
        {isAllProductsPage && (
          <>
            <div
                style={{
                       display: "flex",
                       justifyContent: "space-between",
                      marginBottom: "50px",
                        marginTop: "50px"
  }}
>
  <Link to="/watches" style={{ textDecoration: "none", color: "black" }}>
    <div
      style={{
        backgroundColor: "rgb(255, 193, 7)",
        padding: "5px",
        borderRadius: "8px",
        width: "130px",
        height: "70px",
        color: "white",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1 }}>
        <h5>Watch</h5>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="https://pngimg.com/uploads/watches/watches_PNG9866.png"
          alt="Watch"
          style={{ width: "50px", height: "50px", marginLeft: "10px" }}
        />
      </div>
    </div>
  </Link>
  <Link  to="/backpacks" style={{ textDecoration: "none", color: "white" }}>
    <div
      style={{
        backgroundColor: "rgba(245, 0, 87, 1.0)",
        padding: "5px",
        borderRadius: "8px",
        width: "130px",
        height: "70px",
        textAlign: "left",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1 }}>
        <h5>Bag</h5>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", flex: 1 }}>
        <img
          src="https://pngimg.com/uploads/backpack/backpack_PNG6333.png"
          alt="Bag"
          style={{ width: "50px", height: "50px", marginLeft: "10px" }}
        />
      </div>
    </div>
  </Link>
  <Link to="/shoes"style={{ textDecoration: "none", color: "white" }}>
    <div
      style={{
        backgroundColor: "rgba(1, 129, 232, 1.0)",
        padding: "5px",
        borderRadius: "8px",
        width: "130px",
        height: "70px",
        textAlign: "left",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1 }}>
        <h5>Shoes</h5>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", flex: 1 }}>
        <img
          src="https://th.bing.com/th/id/R.835983e251d097bc25af6fb3b2155be7?rik=M%2fqrSDtR0zalDw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fshoe-transparent-background%2fshoe-transparent-background-12.png&ehk=aBRlr3y8H6C6wFWasX1boX9%2batIB911%2b5HM0eh0kwTo%3d&risl=&pid=ImgRaw&r=0"
          alt="Shoes"
          style={{ width: "50px", height: "50px", marginLeft: "10px" }}
        />
         </div>
       </div>
     </Link>
       </div>


            {/* Products Section */}
            {categories.map((cat) => (
              <React.Fragment key={cat}>
                <h4 style={{ color: "black" }}>{cat}</h4>
                {cat === "Shoes" && (
                  <div style={{ backgroundColor: "white", padding: "10px" }}></div>
                )}
                {cat === "Backpacks" && (
                  <div style={{ backgroundColor: "white", padding: "10px" }}></div>
                )}
                 
                <MDBRow className="mb-3">
                  {filteredItems
                    .filter((item) => item.category === cat)
                    .map((item) => (
                      <MDBCol key={item.id} size="md">
                        <MDBCard>
                          <MDBCardImage src={item.img} position="top" alt="..." />
                          <MDBCardBody>
                            <MDBCardTitle>{item.title}</MDBCardTitle>
                            <MDBCardText className="mb-3">{item.description}</MDBCardText>
                            <MDBCardText>{item.price}</MDBCardText>
                            <MDBBtn color="black" onClick={() => dispatch(addToCart(item))}>
                              Buy now
                            </MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    ))}
                </MDBRow>
              </React.Fragment>
            ))}
          </>
        )}

        {/* Single Category Page */}
        {!isAllProductsPage && (
          <>
            {category && (
              <>
                <h4 style={{ color: "black" }}>{category} </h4>
                {category === "Shoes" && (
                  <div style={{ backgroundColor: "white", padding: "10px" }}></div>
                )}
                {category === "Backpacks" && (
                  <div style={{ backgroundColor: "white", padding: "10px" }}></div>
                )}
               
              </>
            )}

            <MDBRow className="mb-3">
              {filteredItems.map((item) => (
                <MDBCol key={item.id} size="md">
                  <MDBCard>
                    <MDBCardImage src={item.img} position="top" alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>{item.title}</MDBCardTitle>
                      <MDBCardText>{item.price}</MDBCardText>
                      <MDBBtn onClick={() => dispatch(addToCart(item))}>Buy now</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow>
          </>
        )}
        {isAllProductsPage && (
          <div
            className="d-flex flex-column align-items-center"
            style={{
              backgroundColor: "rgba(255, 204, 188, 1.0)",
              padding: "20px",
            }}
          >
            <h4 style={{ color: "black" }}>LET'S STAY IN TOUCH</h4>
            <p>Get updates on sales specials and more</p>
            <div style={{ width: "200px", backgroundColor: "white",marginRight:"10px" }}>
             <MDBInput label="Enter your email" outline />
             </div>
             <MDBBtn style={{ backgroundColor: "rgba(233, 30, 99, 1.0)", color:"rgba(243, 229, 245, 1.0)",marginRight: "130px" }}>
              Send
             </MDBBtn>
            </div>
        )}
      </MDBContainer>
     
    </div>
  );
}