import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userDataFetch } from '../feature/UserSlice';


const Form = () => {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();

   const formSubmited = (e) =>{
    e.preventDefault();
    console.log(users);
    dispatch(userDataFetch(users))
   }

    const getUserData = (e)=>{
        setUsers({...users, [e.target.name]: e.target.value})
    }
  return (
    <>
    <h1 className='text-center'>Fill The Form</h1>
    <form className='container my-4' onSubmit={formSubmited}>
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
  <button type="submit" className="btn btn-primary ">Submit</button>
</form>
    </>
  )
}

export default Form
