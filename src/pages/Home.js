import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {

  // state for stateling
  const [addUpdate,setAddUpdate]=useState({})

  return (
    <div>
      <Container>
      <Row>
        <Col lg={6} md={12}>
        <h2 style={{marginLeft:'80px',marginTop:'100px',color:'rgb(42, 228, 212)'}} className='home'>
          Upload Video
        </h2>
        <p style={{marginLeft:'80px'}}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minus sapiente praesentium eaque a nostrum nulla architecto assumenda optio officiis possimus, alias iusto qui. Consequatur laborum repellendus numquam saepe assumenda.
        </p>
        <Link to={'/watch-history'} style={{textDecoration:'none'}}>
         <i style={{marginLeft:"80px",marginTop:"30px",color:"#34ebd8"}} class="fa-solid fa-table-list fa-xl  "></i>
         <a  className='' style={{textDecoration:'none',marginLeft:'20px',marginTop:'130px',color:'rgb(52, 235, 216)'}}>Watch History</a>
         </Link>
        </Col>
        
        <Col lg={6} md={12}>
        
        <img  style={{ marginLeft: '150px',marginTop:'0px',width:'50%'}} src="https://i.postimg.cc/hGTHjQ7Q/wired-gradient-62-film.gif" alt="" />
        
        </Col>
        
        </Row>

        <Row>
          <Col lg={2}>
       <Add update={setAddUpdate}></Add>
          </Col>
          <Col lg={6} style={{alignItems:'stretch',display:'flex'}}>
        <View updatedState={addUpdate}></View>
          </Col>
          <Col lg={2}>
         <Categories></Categories>
          </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Home