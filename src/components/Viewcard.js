import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Viewcard.css'
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import { format } from 'date-fns';


function Viewcard({video,deleteUpdate}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
      setShow(true);
    // body

    // id
     var id=uniqid()
    // title
    var video_title=video.caption
    // url 
    var url=video.video_url
    // date 
    var date=format(new Date(),'yyyy-MM-dd h:mm')
    // console.log(date);
    const body={id,video_title,url,date}
    if(body){
    // api call
        const result=await addHistory(body)
        // console.log(result);
    }
    
    
    }

    const handleDelete=async(id)=>{
      const result=await deleteVideo(id)
      if (result.status>=200 && result.status<=300){

      // console.log(result);
    deleteUpdate(result.data)
    }
  }
  const dragStart=(e,id)=>{
    console.log("drag started ... source card id-"+id);
    // store dragged data
    e.dataTransfer.setData("cardId",id)
  }
  
  return (
    <div>
        <Card draggable onDragStart={(e)=>dragStart(e,video.id)} style={{ marginLeft:'0px',width: '18rem' ,margin:'10px',zIndex:0}}>
      <Card.Img style={{height:'230px'}} onClick={handleShow} variant="top" src={ video.cover_image }/>
      <Card.Body>
        <Card.Title className='cards' style={{textAlign:'center',fontStyle:'',color:'black'}}>{video.caption}</Card.Title>
        <Trash2 onClick={()=>handleDelete(video.id)} size={70} className='btn'></Trash2>
        {/* <i style={{color:'black',marginLeft:'220px'}} class="fa-solid fa-trash fa-xl " ></i> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="303" src={video.video_url} 
        title=""
         frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Viewcard