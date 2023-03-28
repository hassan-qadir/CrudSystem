import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const DataView = () => {
    const {user} = useSelector((state) => state.read);
  const nevigate = useNavigate();
  return (
 <>
 <Navbar/>
 <h1>User Data</h1>
 {user && user.map((element)=>{
    return (
        <>
            <div className='container'>
        <div className="card w-100 my-3">
        <div className="card-body">
    <h5 className="card-title">{`Name : ${element.name}`}</h5>
    <h5 className="card-text">{`Email : ${element.email}`}</h5>
    <h6 className="card-text">{`Age : ${element.age}`}</h6>
  </div>
</div>
</div> 
        </>
    )
  })}
  <button className='btn btn-info' onClick={() =>nevigate('/AllData')}>Go Back</button>  
 </>
  )
}

export default DataView
