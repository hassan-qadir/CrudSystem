import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userDataFetch } from '../feature/UserSlice';
import Navbar from './Navbar';


const Form = () => {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

   const formSubmited = (e) =>{
    e.preventDefault();
    dispatch(userDataFetch(users))
    navigate('/AllData');
   }
  
    const getUserData = (e)=>{
        setUsers({...users, [e.target.name]: e.target.value})
    }
  return (
    <>
    <Navbar/>
    <h1 className='text-center'>Fill The Form</h1>
    <form className='container my-4 bg-light p-3' onSubmit={formSubmited}>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" name="name"  className="form-control" onChange={getUserData}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" name="email"  className="form-control"onChange={getUserData} />
  </div>
  <div className="mb-3">
    <label className="form-label">Age</label>
    <input type="text" name="age" className="form-control" onChange={getUserData}/>
  </div>
  <button type="submit" className="btn btn-primary p-2 ">Submit</button>
</form>
    </>
  )
}

export default Form
