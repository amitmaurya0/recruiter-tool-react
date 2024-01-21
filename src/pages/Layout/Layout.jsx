import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Sidebar from './Sidebar.jsx';

function index() {
  return (
    <>
        <Header />
        <main className="container ">
          <div className="flex">
            <Sidebar />
            <div className='p-4 ml-4 w-full '>
              <Outlet />
            </div>
          </div>
        </main>
        <Footer />
    </>
  )
}

export default index