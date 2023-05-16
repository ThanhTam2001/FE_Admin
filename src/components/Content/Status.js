import { useState } from "react";
import Tables from "./Tables";
import ModalViewStatus from "./ModalViewStatus";

import ModalDeleteStatus from "./ModalDeleteStatus";

const Status = () => {
  const [showModalDeleteStatus, setShowModalDeleteStatus] = useState(false);
  const [showDataDeleteStatus, setDataDeleteStatus] = useState({});
  const handleDeleteStatus = (user) => {
    setShowModalDeleteStatus(true);
    setDataDeleteStatus(user);
  };

  const [showModalStatus, setShowModalStatus] = useState(false);
  const handleViewStatus = (user) => {
    setShowModalStatus(true);
    setDataViewStatus(user);
  };
  const [dataViewStatus, setDataViewStatus] = useState({});

  return (
    <>
      <div>
        <Tables
          handleDeleteStatus={handleDeleteStatus}
          handleViewStatus={handleViewStatus}
        />
      </div>

      <ModalDeleteStatus
        show={showModalDeleteStatus}
        setShow={setShowModalDeleteStatus}
        showDataDeleteStatus={showDataDeleteStatus}
      />
      <ModalViewStatus
        show={showModalStatus}
        setShow={setShowModalStatus}
        dataViewStatus={dataViewStatus}
      />
    </>
  );
};

export default Status;
