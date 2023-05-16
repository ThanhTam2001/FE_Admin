import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteStatus } from "../../services/apiServices";

const ModalDeleteStatus = (props) => {
  const { show, setShow, showDataDeleteStatus } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteStatus = async () => {
    let data = await deleteStatus(showDataDeleteStatus.status_id);
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
          <Modal.Title>Delete Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this status . Content :
          <b>
            {showDataDeleteStatus && showDataDeleteStatus.content
              ? showDataDeleteStatus.content
              : " "}
          </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleDeleteStatus()}>
            Delete Status
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteStatus;
