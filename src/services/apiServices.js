import axios from "../utils/axiosCustomsize"




const getAllStatus  = () =>{
  
  return axios.get(`/api/status/v1/statusshow`)
}


const getAllUser  = () =>{
  
  return axios.get(`/api/status/v1/User`)
}

const deleteUser = (userId) =>{
  return axios.delete(`/api/status/v1/UserDelete`,{data : {user_id : userId}})
}

const deleteStatus = (statusID) => {
  return axios.delete(`/api/status/v1/statusdelete`,{data : {status_id : statusID}})
}

  export {
    getAllStatus,
    getAllUser,
    deleteUser,
    deleteStatus
  } 