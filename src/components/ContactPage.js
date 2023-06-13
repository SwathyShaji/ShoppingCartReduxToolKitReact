import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function ContactPage() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <h4 className="mb-4">Contact Us!</h4>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Email:</h5>
              <p className="card-text">swathyshaji7@gmail.com</p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Phone:</h5>
              <p className="card-text">123-456-7890</p>
            </div>
          </div>
    
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
