import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice.js'
import {useDispatch,useSelector} from 'react-redux'
const SignIn = () => {
  const navigate = useNavigate()
  const {loading,error} = useSelector((state)=>state.user)
  const [formData,setFormData] = useState({})
  const dispatch = useDispatch()
  const handleForm = (e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
    console.log(formData)

  }
  const handleSubmitForm = async (e)=>{
    e.preventDefault()
    try {
      dispatch(signInStart)
       await axios.post('http://localhost:8000/api/auth/signin',formData)
       dispatch(signInSuccess(formData))
       navigate('/')
     
      
      
      
    } catch (error) {
      console.log(error.response.data)
      signInFailure();
      if (error.response.data.success == false){
         dispatch(signInFailure(error.response.data))}
     
    
      
    }
    
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmitForm} >
     
      <div>
        <label forHtml="email" className=" block text-sm font-medium leading-6 text-gray-900">Email Address</label>
        <div className="mt-2">
          <input onChange = {handleForm} id="email" name="email" type="email"  className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label forHtml="password" className=" block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div className="mt-2">
          <input onChange = {handleForm} id="password" name="password" type="password"  className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
        </div>
      </div>

      <div>
        <button type="submit" disabled={loading} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{loading?'Loading...':'Sign In'}</button>
      </div>
      <div>
        <button  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in with Google Account</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Dont have an account?
      <Link to={'/sign-up'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</Link>
    </p>
    <p className='text-red-700 mt-5'>{error && 'Something went wrong.'}</p>
  </div>

</div>
  )
}

export default SignIn