import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1'>eCART</MDBNavbarBrand>
          <span>
            <Link to = "/" >
            All Products
            </Link>
            </span>
          <MDBBtn  color='secondary'>
            <Link to = "/Cart">
             Cart(0)
            </Link>
          </MDBBtn>     
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
