import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Trash2 } from 'react-feather'
import { deleteHistory, getAllHistory } from '../services/allapis'
import "./History.css"
import { Link } from 'react-router-dom'



function History() {
  const [histories, setHistories] = useState([])

  const getHistories = async () => {
    const { data } = await getAllHistory()
    setHistories(data);

  }
  useEffect(() => {
    getHistories()
  }, [])


  // console.log(histories);
  const removeItem = async (id) => {
    await deleteHistory(id)
    getHistories()

  }


  return (
    <div>
      <h1 style={{ color: '#34ebd8' }} className='text-center p-4'>Watch History</h1>

      <div className='text-end pe-5 pb-3'> 

       <Link to={'/home'}>
       <Button className='btn btn-info rounded'>Go Back</Button>
       </Link>
        
      </div>


      {
      histories.length > 0 ? (
        <Table className='w-75 container pb-4 mb-5' style={{ color: '#104f73' }} bordered variant="">
          <thead className='text-center'>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Title</th>
              <th>Video Url</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              histories?.map((i, index) =>


                <tr>
                  <td>{index + 1}</td>
                  <td>{i.date}</td>
                  <td>{i.video_title}</td>
                  <td>{i.url}</td>
                  <td className='text-center'>
                    <Trash2 onClick={() => removeItem(i?.id)} size={65} className='btn text-white'></Trash2>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>) :
        <h1 className='text-center p-4'>No Watch Histories</h1>
      }
    </div>
  )
}

export default History