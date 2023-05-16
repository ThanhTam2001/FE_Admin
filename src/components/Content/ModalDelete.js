import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../services/apiServices";

const ModalDelete = (props) => {
  const { show, setShow, showDataDelete } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteUser = async () => {
    let data = await deleteUser(showDataDelete.user_id);
    if (data) {
      handleClose();
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Delete
      </Button> */}

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this user . Email :
          <b>
            {showDataDelete && showDataDelete.email ? showDataDelete.email : ""}
          </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleDeleteUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;
