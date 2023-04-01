import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { EditDataSend } from '../feature/ReadSlice';
import Navbar from './Navbar';

const EditForm = () => {
  const {id} = useParams();
  const [updateData, setUpdateData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {users} = useSelector((state) => state.read);

 useEffect(() =>{
 if(id){
  const single = users.filter((ele) => ele.id === id);
  setUpdateData(single[0]);
 }
 },[])

 const newData = (e) =>{
  setUpdateData({...updateData, [e.target.name]: e.target.value});
 }

 const handleSubmit =(e)=>{
 e.preventDefault();
 dispatch(EditDataSend(updateData));
 navigate('/AllData');
 }

return (
  <>
  <Navbar/>
  <h1 className='text-center'>Edit The Form</h1>
  <form className='container my-4 bg-info p-3 bg-light' onSubmit={handleSubmit}>
<div className="mb-3">
  <label  className="form-label">Name</label>
  <input type="text" name="name" value={updateData && updateData.name} className="form-control" onChange={newData}/>
</div>
<div className="mb-3">
  <label className="form-label">Email address</label>
  <input type="email" name="email" value={updateData && updateData.email}  className="form-control" onChange={newData}/>
</div>
<div className="mb-3">
  <label className="form-label">Age</label>
  <input type="text" name="age" value={updateData && updateData.age} className="form-control" onChange={newData}/>
</div>
<button type="submit" className="btn btn-primary ">Submit</button>
</form>
  </>
)
}

export default EditForm
