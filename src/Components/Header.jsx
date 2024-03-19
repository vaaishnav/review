import React from 'react'
import { Navbar,Container, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddReview from './AddReview'

function Header() {
  return (
    <>
      <Navbar style={{zIndex:'100'}}  className='bg-primary position-fixed top-0 w-100'>
        <Container >

          <div class="d-flex justify-content-evenly">
            {/* <Link to={'/'} style={{ textDecoration: "none" }}> */}
              <Navbar.Brand style={{ color: "white", fontSize: "30px" }}>
              <i class="fa-solid fa-pen-nib fa-beat fs-2 me-2" style={{color:'white'}}></i>
              </Navbar.Brand>
            {/* </Link> */}
          </div>
          <div className="d-flex">
              <input type="text" className='form-control me-1' placeholder='Search!!!' />
          </div>

          <div class="d-flex flex-row-reverse bd-info">

              <div class="p-2 ">
                {/* <Link to={'/cart'} style={{ textDecoration: "none" }}> */}
              
                {/* </Link> */}
              </div>
              <div className="p-2 me-5">
                {/* <Link to={'/wishlist'} style={{ textDecoration: "none" }}> */}
                  
                {/* </Link> */}
                <div>
                    <AddReview/>
                </div>
              </div>
            </div>

        </Container>
      </Navbar>
    </>
  )
}

export default Header