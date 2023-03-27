import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import { userRead } from '../feature/ReadSlice'
import { ViewData } from '../feature/ReadSlice'
import { Link } from 'react-router-dom'


const Alldata = () => {
const dispatch = useDispatch();

const {users, loading} = useSelector((state)=> state.read);
useEffect(()=>{
    dispatch(userRead());
}, [])

  return (
    <>
    <Navbar/>
     <h1 className='text-center'>All Posts</h1>
     {loading ? (<h1>Loading</h1>) : (users.map((item)=>{
    return(
        <>
         <div className='container'>
        <div className="card w-100 my-3">
        <div className="card-body">
    <h5 className="card-title">{`Name : ${item.name}`}</h5>
    <h5 className="card-text">{`Email : ${item.email}`}</h5>
    <h6 className="card-text">{`Age : ${item.age}`}</h6>
    <div className='d-fex my-3'>
    <Link to='/DataView'><button className='btn btn-success' onClick={() => dispatch(ViewData(item))} >View</button></Link>
    <button className='btn btn-info mx-2'>Edit</button> 
    <button className='btn btn-danger'>Delete</button> 
    </div>
  </div>
</div>
</div>   
        </>
    )
   }))}
   
    </>
  )
}

export default Alldata
