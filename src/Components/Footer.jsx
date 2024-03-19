import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <div style={{ height: "300px" }} className="p-5 bg-dark mt-5 w-100">
            <div className="footer-content d-flex justify-content-between">
                <div style={{ width: "400px" }} className="media">
                    <h5 className='d-flex'><i class="fa-solid fa-pen-nib fa-beat fs-2 me-2" style={{color:'white'}}></i><strong  className='text-light'>Review</strong></h5>
                    <p style={{ textAlign: "justify",color: 'white' }}>Designed and built with all the love in the world by the Bootstrap</p>
                    <span style={{color:'white'}}>Code licensed MLT,docs </span>
                    <span style={{color:'white'}}>Currently v5.3.2</span>
                </div>
                <div className="links d-flex flex-column  ">
                    <h5 className='text-light'>Links</h5>

                    <a style={{ textDecoration: "none", color: "white" }} >Home</a>
                    <a style={{ textDecoration: "none", color: "white" }} >login</a>
                    <a style={{ textDecoration: "none", color: "white" }} >Review</a>

                </div>
                <div className="guides d-flex flex-column">
                    <h5  className='text-light'>Guides</h5>

                    <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>React js</a>
                    <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>React Router</a>
                    <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>React Bootstrap</a>
                </div>
                <div className="contact d-flex flex-column">
                    <h5  className='text-light'>Contact</h5>
                    <div className="d-flex">
                        <input type="text" className='form-control me-2' placeholder='Email Id Please' />
                        <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
                    </div>
                    <div className="icons d-flex justify-content-between mt-3">
                            <a href="" target='-blank' style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-envelope fa-1x"></i></a>
                            <a href="" target='-blank' style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-twitter fa-1x"></i></a>
                            <a href="" target='-blank' style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-linkedin fa-1x"></i></a>
                            <a href="" target='-blank' style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-instagram fa-1x"></i></a>
                            <a href="" target='-blank' style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-github fa-1x"></i></a>
                            <a href="" target='-blank' style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-facebook fa-1x"></i></a>

                        </div>

                </div>
            </div>
            <p className='text-center mt-5 test-light'>Copyright &copy; 2024 Ecart.Built with React.</p>

        </div>
    
    </>
  )
}

export default Footer