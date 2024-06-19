import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div class=" bg-blue-800">
        <div class="flex justify-between text-white py-3 px-5">
            <h1 class="cursor-pointer"><Link to={'/'}>Auth App</Link></h1>
            <ul class="flex  text-black justify-evenly w-[50%] items-center align-middle">
                <li class="flex w-[100%] hover:text-white cursor-pointer place-content-center"><Link to={'/'}>Home</Link></li>
                <li class="flex w-[100%] hover:text-white cursor-pointer place-content-center"><Link to={'/about'}>About</Link></li>
                <li class="flex w-[100%] hover:text-white cursor-pointer place-content-center"><Link to={'/sign-in'}>Sign In</Link></li>
            </ul>
        </div>


    </div>
  )
}

export default Header