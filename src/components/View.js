import React, { useEffect, useState } from 'react'
import Viewcard from './Viewcard'
import { getAllVideos } from '../services/allapis'
import { Col, Row } from 'react-bootstrap'



function View({updatedState}) {
  
  const [allVideos,setAllVideos]=useState([])

  // state to update delete
  const [deleteUpdate,setDeleteUpdate]=useState({})

  const accessAllVideos=async()=>{
    const result=await getAllVideos()
    if(result.status>=200 && result.status<300){
      // console.log(result.data);
      setAllVideos(result.data)
    }
  }

  console.log(allVideos);
  
  useEffect(()=>{
    accessAllVideos()
  },[updatedState,deleteUpdate])



  return (
    <Row>
    {
      allVideos.length>0?(
        allVideos.map(i=>
         <Col lg={6} md={2}> <Viewcard deleteUpdate={setDeleteUpdate} video={i}></Viewcard></Col>
          )
      ): <h1>No Videos in your collection</h1>
    }
    </Row>
  )
}

export default View