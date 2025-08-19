import React, { useState,useEffect } from "react";
import axios from 'axios'


const DisplayData = () =>{
    const [loading,setLoading] =useState(false);
    const [data,setData]=useState([]);
    const [error,setError]=useState({});


    useEffect(()=>{
async function getUser() {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/users');
    console.log(response);
    setData(data)
  } catch (error) {
    console.error(error);
  }
}
getUser();
    },[data])

return (
    <h1>Data</h1>
);

};
export default DisplayData;