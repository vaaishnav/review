import React, { useEffect, useState } from 'react'
import { Button, Card, CardGroup, Col, Modal, Row } from 'react-bootstrap'
import Footer from './Footer'
import { getAllReviewAPI, removeReviewAPI } from '../services/allAPI';
import { all } from 'axios';

function GetReview() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [allReview, setAllReview] = useState()

  const deleteReview = async (Id) => {
    await removeReviewAPI(Id)
  }

  const getAllReview = async () => {
    const result = await getAllReviewAPI()
    if (result?.status == 200) {
      setAllReview(result.data);
    }
  }
  console.log(allReview, "vjhhjvkj");
  useEffect(() => {
    getAllReview()
  }, [allReview])


  return (
    <>
      <div>
        <CardGroup>
          <Card className='me-2'>
            <Card.Img height={'500px'} variant="top" src="https://cdn.gulte.com/wp-content/uploads/2024/02/premalu-1.jpg" />
            <Card.Body onClick={handleShow2}>
              <Card.Title className='text-center'>Premalu</Card.Title>
              <Card.Text>

              </Card.Text>
            </Card.Body>

          </Card>
          <Card className='me-2'>
            <Card.Img height={'500px'} variant="top" src="https://bl-i.thgim.com/public/news/23o04l/article67913110.ece/alternates/LANDSCAPE_1200/Screenshot%202024-03-04%20172642.png" />
            <Card.Body onClick={handleShow1}>
              <Card.Title className='text-center'>Manjummel Boys</Card.Title>
              <Card.Text>

              </Card.Text>
            </Card.Body>

          </Card>
          <Card className='me-2'>
            <Card.Img height={'500px'} variant="top" src="https://in.bmscdn.com/events/moviecard/ET00367666.jpg" />
            <Card.Body onClick={handleShow}>
              <Card.Title className='text-center'>Bramayugam</Card.Title>
              <Card.Text>

              </Card.Text>
            </Card.Body>

          </Card>
        </CardGroup>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Bramayugam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mt-3'>

            {allReview?.length > 0 ? allReview?.filter(review => review.Movie === "Bramayugam").map((review, index) => (

              <div key={index} className='border pt-2 mb-1 me- rounded'>

                <div className='d-flex '>
                  <p>
                    <img className='me-5' style={{ width: '50px', height: '50px' }} src={review.ProffileImageURL} alt="" />
                    {review.Name}
                  </p>

                </div>

                <div >
                  {review.Review}

                  <div className='d-flex justify-content-end me-5 mb-3'>
                    <button onClick={() => deleteReview(review?.id)} className='mt-3 btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                  </div>


                </div>






              </div>

            )) :
              <div className="text-danger fw-bolder">No Videos are upload yet !!!</div>
            }

          </div>
        </Modal.Body>
     
      </Modal>

      <Modal show={show1} onHide={handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Manjummel Boys</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mt-3'>

            {allReview?.length > 0 ? allReview?.filter(review => review.Movie === "Manjummel boys").map((review, index) => (

              <div key={index} className='border pt-2 mb-1 me- rounded'>

                <div className='d-flex '>
                  <p>
                    <img className='me-5' style={{ width: '50px', height: '50px' }} src={review.ProffileImageURL} alt="" />
                    {review.Name}
                  </p>

                </div>

                <div >
                  {review.Review}

                  <div className='d-flex justify-content-end me-5 mb-3'>
                    <button onClick={() => deleteReview(review?.id)} className='mt-3 btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                  </div>


                </div>






              </div>

            )) :
              <div className="text-danger fw-bolder">No Videos are upload yet !!!</div>
            }

          </div>
        </Modal.Body>
      
      </Modal>

      <Modal show={show2} onHide={handleClose2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Premalu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mt-3'>

            {allReview?.length > 0 ? allReview?.filter(review => review.Movie === "Premalu").map((review, index) => (

              <div key={index} className='border pt-2 mb-1 me- rounded'>

                <div className='d-flex '>
                  <p>
                    <img className='me-5' style={{ width: '50px', height: '50px' }} src={review.ProffileImageURL} alt="" />
                    {review.Name}
                  </p>

                </div>

                <div >
                  {review.Review}

                  <div className='d-flex justify-content-end me-5 mb-3'>
                    <button onClick={() => deleteReview(review?.id)} className='mt-3 btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                  </div>


                </div>






              </div>

            )) :
              <div className="text-danger fw-bolder">No Videos are upload yet !!!</div>
            }

          </div>

        </Modal.Body>
      
      </Modal>


    </>


  )
}

export default GetReview