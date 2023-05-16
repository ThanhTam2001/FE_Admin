import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import _ from "lodash";
const ModalView = (props) => {
  const { show, setShow ,dataView} = props;

  const [email ,setemail] = useState("")
  
  const [account ,setaccount] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
      console.log('Check da ta', dataView)
    if (!_.isEmpty(dataView)) {
      setemail(dataView.email)
      setaccount(dataView.account)
    }
  }, [props.dataView]);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>View</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tên tài khoản</Form.Label>
              <Form.Control value={account}  type="Tên tài khoản" />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control value={email} type="email" />
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

export default ModalView;
