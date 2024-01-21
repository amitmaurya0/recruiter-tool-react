import React from 'react'
import CandidateList from '../components/CandidatesComponents/CandidateList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Candidates() {



  return (
    <div className="container mx-auto relative">
      <div className="mx-4 overflow-x-auto">
      <div className="flex mb-4 items-center justify-between">
        <h3 className='text-2xl font-bold mb-4'>All Candidates</h3>
        <Link to="/candidate/add" className="bg-green-500 text-white px-4 py-2 rounded">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Candidate
        </Link>
      </div>
       <CandidateList />
      </div>
    </div>
  )
}

export default Candidates