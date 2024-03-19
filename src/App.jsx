import { Container } from 'react-bootstrap'
import './App.css'
import GetReview from './Components/GetReview'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Container style={{marginTop:"100px", paddingTop:"20px"}}>
      
      <GetReview/>
    </Container>
    <Footer/>
    
    </>
  )
}

export default App
