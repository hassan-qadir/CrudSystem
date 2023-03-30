import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { EditFind } from '../feature/ReadSlice';
import Navbar from './Navbar';



const EditForm = () => {

    const {name,email,age} = useSelector((state)=> state.read.editUser[0]);
     const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
     dispatch(EditFind(id));
    }, [])

  return (
 <>
     <Navbar/>
     
    <h1 className='text-center'>Edit The Form</h1>
    <form className='container my-4'>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" name="name"  className="form-control" value={name}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" name="email"  className="form-control" value={email} />
  </div>
  <div className="mb-3">
    <label className="form-label">Age</label>
    <input type="text" name="age" className="form-control" value={age}/>
  </div>
  <button type="submit" className="btn btn-primary ">Submit</button>
</form>
    </>
  )
}

export default EditForm
