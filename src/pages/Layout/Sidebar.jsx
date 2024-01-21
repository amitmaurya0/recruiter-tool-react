import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-96">
      <div className="p-4 w-full">
        <ul>
            <li>
                <Link className='w-full' to="/"> 
                    <div className='w-full'>
                        <FontAwesomeIcon icon={faUser} className="mr-2" />Candidates 
                    </div>
                </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
