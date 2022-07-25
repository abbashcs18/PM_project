import React from 'react'
import {Link} from 'react-router-dom'
import wvf from '../images/WinVinayaAcademy.jpg'
function NavbarAdmin() {
  return (
    <div>
        <div className="flex justify-between mx-auto p-6 bg-white text-orange-600 ">
            <img className='w-auto h-12' src={wvf} alt="WVF logo" />
            
            <div className='flex-auto text-2xl px-6 font-medium '>
                <Link  to="/users" className='p-1 px-6 w-full hover:bg-orange-100 focus:outline-none '> List Candidate </Link>
                <Link to='/' className='p-1 px-6 w-full hover:bg-orange-100 focus:outline-none '> Create Candidate </Link>
            </div>
        </div>
    </div>
  )
}

export default NavbarAdmin