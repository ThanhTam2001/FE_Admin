import { useEffect, useState } from "react";
import { getAllStatus } from "../../services/apiServices";
import "bootstrap/dist/css/bootstrap.min.css";
const Tables = (props) => {
  const [listStatus, setListStatus] = useState([]);
  useEffect(() => {
    fetchListStatus();
  }, []);

  const fetchListStatus = async () => {
    let res = await getAllStatus();

    if (res.EC === 0) {
      setListStatus(res.content);
    }
    console.log("Logg res :", res);
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Tên tài khoản</th>
            <th scope="col">Bài viết</th>
            <th scope="col">Thời gian đăng</th>
          </tr>
        </thead>
        <tbody>
          {listStatus &&
            listStatus.length > 0 &&
            listStatus.map((item, index) => {
              return (
                <tr key={`table-status-${index}`}>
                  <td>{item.user.account}</td>
                  <td>{item.content}</td>
                  <td>{item.update_time}</td>
                  <td>
                    <button className="btn btn-dark" onClick={() => props.handleViewStatus(item)}>View</button>

                    <button className="btn btn-danger" onClick={() => props.handleDeleteStatus(item)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Tables;
