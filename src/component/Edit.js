import { Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { EditTask } from '../redux/todoSlice/todoSlice';

 
const Edit = ({id}) => {
    const [show, setShow] = useState(false);
const dispatch=useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited,setEdited] = useState({
    title:"",
    description:"",
  })

  return (
    <div> <Button variant="primary" onClick={handleShow}>
      Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body  ><input type="text"  placeholder='enter task title' onChange={(e)=>setEdited({...edited, title:e.target.value})} />
        <input type="text"   placeholder='enter task title' onChange={(e)=>{setEdited({...edited,description:e.target.value})}} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
         
          dispatch(EditTask({id:id, edited}))
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Edit