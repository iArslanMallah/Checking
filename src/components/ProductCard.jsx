import { useSelector, useDispatch } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { addToCart } from '../Redux/Slices';
import { Link } from 'react-router-dom';

export default function ProductCard() {

    const items = useSelector((state) => state.counter.items)

    const dispatch = useDispatch()

  return (
    
    <MDBContainer>
      <MDBRow className='mb-3'>

        { items.map((item) => (
            <MDBCol key = {item.id} size='4'>
        <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={item.img} fluid alt='...' />
        <Link>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </Link>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardText>
          {item.price}
        </MDBCardText>
        <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to Cart</MDBBtn>
      </MDBCardBody>
      </MDBCard>
      </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
    
  );
}