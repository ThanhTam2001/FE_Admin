import { useState } from "react";

import TableUser from "./TableUser";
import ModalDelete from "./ModalDelete";
import ModalView from "./ModalView";


const Users = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [showDataDelete, setShowDataDelete] = useState({});
  const handleDelete = (user) => {
    setShowDelete(true);
    setShowDataDelete(user);
  };
  const [showModalView, setShowModalView] = useState(false);
  const handleView = (user) => {
    setShowModalView(true);
    setDataView(user);
  };
  const [dataView, setDataView] = useState({});

  
  return (
    <>
      <div>
        <TableUser handleDelete={handleDelete}
        handleView={handleView}
         />
      </div>
      <ModalView show={showModalView} 
      setShow={setShowModalView} 
      dataView={dataView}/>

      <ModalDelete
        show={showDelete}
        setShow={setShowDelete}
        showDataDelete={showDataDelete}
      />

      
    </>
  );
};

export default Users;
