import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import _ from "lodash";
const ModalViewStatus = (props) => {
  const { show, setShow ,dataViewStatus} = props;

  const [content ,setcontent] = useState("")
  
  const [update_time ,settimeupdate] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
      console.log('Check da ta', dataViewStatus)
    if (!_.isEmpty(dataViewStatus)) {
        setcontent(dataViewStatus.content)
        settimeupdate(dataViewStatus.update_time)
    }
  }, [props.dataViewStatus]);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>View Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Status</Form.Label>
              <Form.Control value={content}  type="Status" />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Time Update </Form.Label>
              <Form.Control value={update_time} type="Time" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewStatus;
