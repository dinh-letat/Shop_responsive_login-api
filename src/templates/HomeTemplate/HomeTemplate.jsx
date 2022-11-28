import React from 'react'
import HeaderHome from '../../Components/HeaderHome/HeaderHome'
import {Outlet} from 'react-router-dom'
export default function HomeTemplate() {
  return (
    <div>
        <HeaderHome />
        <div style={{minHeight:650}}>
          <Outlet></Outlet>

        </div>
        
        <footer className='bg-dark text-white p-5 text-center'>Footer</footer>
    </div>
  )
}
