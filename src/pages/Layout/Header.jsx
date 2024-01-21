
import React from 'react'

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container flex items-center justify-between">
      
        <div className="text-white text-xl font-bold">
          Recruiter Tool
        </div>

        
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white">Home</a>
        </nav>
      </div>
    </header>
  )
}

export default Header