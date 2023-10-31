import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({update}) {
  
    //  state to hold input datas
    const [inputs,setInputs]=useState({
      id:"",
      caption:"",
      cover_image:"",
      video_url:""
    })

     const setValues=(e)=>{
      let {value,name}=e.target
      // console.log(value,name);
      setInputs({...inputs,[name]:value})
      
    }
    console.log(inputs);

   

    // function to extract video url
    const extracturl =(e)=>{
      let videoUrl=e.target.value
      // console.log(videourl);
      if(videoUrl.includes("v=")){
       
        let subUrl = videoUrl.split("v=")[1]
        let final = `https://www.youtube.com/embed/${subUrl}?autoplay=1`
        setInputs({...inputs,["video_url"]:final})
       
      }
   

    }
    // function to add button click

    const addHandle= async()=>{
      let id = uniqid()
      setInputs({...inputs,["id"]: id })

      const {caption,cover_image,video_url}=inputs

      if(caption=="" || cover_image=="" || video_url==""){
        toast.error("all inputs are required", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      else{
        const result = await addVideo(inputs)
        console.log(result);
        if (result.status >=200 && result.status <300){

          // update state of home
          update(result.data)
        
          toast.success("video added", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          setShow(false)
        }

      }

      

      
      
    }


    console.log(inputs);



    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>,
         <Button variant="info" style={{margintop:'-500px',marginLeft:'30px',color: "#ffffff"}} onClick={handleShow}>
         <i class="fa-solid fa-file-export fa-beat-fade"></i>
              </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>

              <Form.Control name='caption' onChange={(e)=>setValues(e)}
                type="text"
                placeholder="video Title"
                autoFocus
              />
               <Form.Label></Form.Label>
              <Form.Control name="cover_image" onChange={(e)=>setValues(e)}
                type="text"
                placeholder="Cover Image URL"
                autoFocus
              />
               <Form.Label></Form.Label>
              <Form.Control onChange={(e)=>extracturl(e)}
                type="text"
                placeholder="Video URL"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
             
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addHandle}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Add