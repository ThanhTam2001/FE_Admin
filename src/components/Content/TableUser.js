import { useEffect, useState } from "react";
import { getAllUser } from "../../services/apiServices";
import { Button, Space } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

const TableUser = (props) => {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    let res = await getAllUser();

    if (res.EC === 0) {
      setListUser(res.content);
    }
    console.log(">>> log res user:", res);
  };


  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tên Tài Khoản</th>
            <th scope="col">Họ Tên</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`table-status-${index}`}>
                  <td>{item.user_id}</td>
                  <td>{item.account}</td>
                  <td>
                    {item.first_name} {item.last_name}
                  </td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={() => props.handleView(item)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listUser && listUser.length === 0 && (
            <tr>
              <td colSpan={"4"}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
