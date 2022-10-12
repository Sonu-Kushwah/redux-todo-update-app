import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Add, Remove ,Update_data } from '../Action/action';
function TdodoApp() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const { User_data } = useSelector((state) => state.todoreducer)
  //insert
  const insert = () => {
    dispatch(Add(data));
    setData("");
  }

  //remove
  const remove = (id) => {
    console.log(id);
    dispatch(Remove(id));
  }

  //show record
  const [showEye, setShowEye] = useState(false);
  const [showValue, setShowValue] = useState("");

  //prefiled data in modal
  const [show, setshow] = useState(false);
  const [update, setUpdate] = useState("");
  const [ind, setInd] = useState("");

  const handleClose = () => setshow(false);

  const handleShow = (el) => {
    setshow(true);
    setUpdate(el);
  }
  //update
  const usertask_update = () => {
    dispatch(Update_data(update,ind))
    handleClose();
  }
  return (
    <>
      <div className='container'>
        <div className='todoApp'>
          <h4>Enter Your Task</h4>
          <div className='d-flex'>
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} className='form-control' />
            <button onClick={() => insert()}><i class="fa-solid fa-plus"></i></button>
          </div>
          <div>
            {
              User_data.map((item, index) => {
                return (
                  <>
                    <div className='items-box'>
                      <div className="item">
                        <span>{item}</span>
                      </div>
                      <div className="action">
                        <i class="fa-solid fa-pen-to-square"
                          onClick={() => {
                            handleShow(item)
                            setInd(index)
                          }}
                        ></i>
                        <i class="fa-solid fa-trash"
                          onClick={() => remove(index)}
                        ></i>
                        <i class="fa-solid fa-eye"
                          onClick={() => {
                            setShowEye(true)
                            setShowValue(item)
                          }}
                        ></i>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
        {/*reading modal*/}
        <Modal show={showEye}>
          <Modal.Header>
            <Modal.Title>TodoApp Redux</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>{showValue}</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEye(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/*update modal*/}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='text-center'>Update Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" value={update} onChange={(e) => setUpdate(e.target.value)} className="form-control" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => usertask_update()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default TdodoApp