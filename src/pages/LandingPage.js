import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './LandingPage.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



function LandingPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className='fontt' style={{ marginTop: '150px', marginLeft:'px', color: '#03fcd7' }}>Video Uploader</h1>
            <p className='fontt' style={{ color: 'white' }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, incidunt dolore ullam delectus totam, deleniti possimus sit accusamus debitis odit est, dignissimos maiores quas harum. Omnis placeat nemo provident eius.
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam illo repudiandae id voluptate animi mollitia voluptates magnam libero, quo non totam maiores nostrum dolores, corporis beatae perspiciatis provident quaerat?</p>
            <Link to={'./home'}>
              <MDBBtn rounded className='b1' color='info'>
                Get Started
              </MDBBtn>
            </Link>

          </Col>

          <Col className='img'>
            <img style={{ marginLeft:'90px',marginTop:'80px' }} src="https://i.postimg.cc/hGTHjQ7Q/wired-gradient-62-film.gif" alt="" />
          </Col>

        </Row>

        <Row >
          <h1 className='fontt' style={{ marginTop: '250px', color: '#03fcd7' }}>Features</h1>
          <Col className='cards mt-5'>
            <Card style={{ width: '18rem', backgroundColor: 'black', borderRadius: '30px' }}>
              <Card.Img variant="top" style={{ borderRadius: '20px' }} src="https://i.postimg.cc/mrvFPsjz/80ca2e0db5fc7ab5f69cbde355bd4570-w200.webp" />
              <Card.Body>
                <Card.Title className='text-center'>Card Title</Card.Title>

                <Button className='button' variant="info">Click here</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className='cards mt-5'>
            <Card style={{ width: '18rem', backgroundColor: 'black', borderRadius: '30px' }}>
              <Card.Img variant="top" style={{ borderRadius: '20px' }} src="https://i.postimg.cc/dVW2tpgr/4fdf2dcf0225256e9047a4b853139cbb-w200.webp" />
              <Card.Body>
                <Card.Title className='text-center'>Card Title</Card.Title>

                <Button className='button' variant="info">Click here</Button>
              </Card.Body>
            </Card>
          </Col>


          <Col className='cards mt-5'>
            <Card style={{ width: '18rem', backgroundColor: 'black', borderRadius: '30px' }}>
              <Card.Img variant="top" style={{ borderRadius: '20px' }} src="https://i.postimg.cc/sgV20264/3f902c487567cbb8201d619bbc6b5af2-w200.webp" />
              <Card.Body>
                <Card.Title className='text-center'>Card Title</Card.Title>

                <Button className='button' variant="info">Click here</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>


      </Container>
    </div>
  )
}

export default LandingPage