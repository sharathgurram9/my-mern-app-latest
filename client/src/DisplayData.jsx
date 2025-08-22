import React, { useState,useEffect } from "react";
import axios from 'axios'


const DisplayData = () =>{
    const [loading,setLoading] =useState(false);
    const [data,setData]=useState([]);
    const [error,setError]=useState({});
console.log("data",data)

    useEffect(()=>{
async function getUser() {
  try {
    setLoading(true)
    const response = await axios.get('http://127.0.0.1:5000/api/users');
    console.log(response);
    setData(response?.data)
    setLoading(false)
  } catch (error) {
    console.error(error);
    setError(error)
    setLoading(false)
  }
}
getUser();
    },[])

return (
  <>
  {loading &&(
    <div>Loading...</div>
  )}
  {error&&(
    <div>{error.message}</div>
  )}
 <div>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
    </>
);

};
export default DisplayData;