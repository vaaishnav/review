import React, { useState } from 'react'
import { Button, ButtonGroup, Form, Modal, ToggleButton } from 'react-bootstrap'
import { uploadReviewAPI } from '../services/allAPI';






function AddReview() {
    const [uploadReview, setUploadReview] = useState({
        Name: "", ProffileImageURL: "", Review: ""

    })
    console.log("1",uploadReview);
    const [show, setShow] = useState(false);
    const [scrolling, setScrolling] = useState(false);

 
    const handleClose = () => {
        setShow(false);
        setUploadReview("")
    };
    const handleShow = () => setShow(true);

    const handleUpload = async () => {
        const { Name, ProffileImageURL, Review } = uploadReview
        if (Name && ProffileImageURL && Review) {
            const reviewData = {
                ...uploadReview,
                Movie: radioValue // Add the selected radio value to the recipe data
            };
            // const result=200
            const result = await uploadReviewAPI(reviewData);
            // const result = await uploadRecipeAPI(uploadRecipe)
            console.log(Name,ProffileImageURL,Review,radioValue);

            if (result.status >= 200 && result.status < 300) {
                alert(`API Call Success.. ${result.data.Name} review uploaded Successfully`)

            } else {
                alert("API Call Failed... Please try after some time!!!")
            }
            alert("Your Review is Successfully updated")

            // await getAllRecipeAPI()
        } else {
            alert("Please fill the form Completely !!!")
        }
        console.log(caption, imageURL, RecipeDetail);
        // store upload video in http://localhost:3000/allRecipe

        handleClose()
    }




    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Premalu', value: 'Premalu' },
        { name: 'Manjummel boys', value: 'Manjummel boys' },
        { name: 'Bramayugam', value: 'Bramayugam' },
    ];

    return (

        <div>



            <Button variant="primary" onClick={handleShow}>
                Add your review
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>

                    <Modal.Title>Add your review</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                    <Form>
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>

                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                             onChange={e => setUploadReview({ ...uploadReview, Name: e.target.value })} t type="text" placeholder="Your name please" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Image</Form.Label>
                            <Form.Control onChange={e => setUploadReview({ ...uploadReview, ProffileImageURL: e.target.value })} type="text" placeholder="Uplode your image" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Post Your Review</Form.Label>
                            <Form.Control  onChange={e => setUploadReview({ ...uploadReview, Review: e.target.value })} as="textarea" rows={8} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default AddReview