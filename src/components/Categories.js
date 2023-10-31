import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCat, getAllCat, getVideo, updateCategory } from '../services/allapis';
import {  Trash2 } from 'react-feather';



function Categories() {
  // state to hold input,id and video array
  const [catInputs, setCatInputs] = useState({
    id: "",
    name: "",
    videos: []

  })

  const [categories, setCategories] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInputs = (e) => {
    const { value, name } = e.target
    setCatInputs({ ...catInputs, [name]: value })
  }


  const addData = async () => {
    let id = uniqid()
    setCatInputs({ ...catInputs, ["id"]: id })

    const { name } = catInputs
    if (name == "") {
      toast.error("please provide caption", {
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
    else {
      // api call
      const result = await addCategory(catInputs)
      if (result.status > 200 && result.status < 300) {
        setShow(false);
        getAllCategories()
        toast.success(`${result.data.name} added`, {
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
    }

  }
  // console.log(catInputs);

  const getAllCategories = async () => {
    const result = await getAllCat()
    setCategories(result.data);

    if (result.status > 200 && result.status < 300) {
      // setCategories(result.data);
    }

  }
  // console.log(categories);

  const removeCategory=async(id)=>{
   const result=await deleteCat(id)
   if (result.status >= 200 && result.status < 300) {
    // refresh category list
    getAllCategories()
   }
  }

  useEffect(() => {
    getAllCategories()
  }, [])
const dragOver=(e)=>{
  e.preventDefault()
  console.log("dragged over the category...");
}

const dropped=async(e,id)=>{
  console.log("dropped...cat id -"+id);

  // video id access

  const videoId=e.dataTransfer.getData("cardId")
  console.log(videoId);

  // access video from backend
  const {data}=await getVideo(videoId)
  console.log(data);

  // selected dropped category from all category

  const selectedCategory=categories.find(i=>i.id==id)
  console.log(selectedCategory);

  selectedCategory.videos.push(data)
  console.log(selectedCategory);

  // api call to update the changed category in backend

  await updateCategory(id,selectedCategory)
  getAllCategories()
}


  return (
    <div>
      <Button style={{ borderRadius: '20px',width:'100%'}} variant="info" onClick={handleShow}>
        Add Categories
      </Button>
      {
        categories.length > 0 ? (
          categories.map(i => (
            <div droppable
            onDragOver={(e)=>dragOver(e)}
            onDrop={(e)=>dropped(e,i?.id)}
            style={{width:'350px',}} className='border mt-3 p-3 '>
              <p><span className='fs-5'>{i.name}</span> </p>
              <div >
              
              {
                i.videos.map(j=>(
                
                    <img style={{height:'60px',width:'60px',float:'center',padding:'5px'}}
                     src={j.cover_image} 
                     alt="" />
                  
                ))
              }
                              <Trash2 style={{textAlign:"end"}} onClick={()=>{removeCategory(i.id)}} size={70} className='text-danger btn '></Trash2>
                              </div>
            </div>
          ))

        ) : <h3>No caregories added yet</h3>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Catagories</Form.Label>
              <Form.Control onChange={(e) => setInputs(e)} name="name" type="text" />

            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />




    </div>
  )
}

export default Categories


