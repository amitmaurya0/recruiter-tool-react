import React from 'react'

import CandidateForm from '../components/CandidatesComponents/CadidateForm'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function AddCandidate() {



  return (
    <div className=" w-full">
      <div className="flex mb-4 items-center justify-between">
      <h2 className="text-2xl font-bold mb-4">Candidate Form</h2>
        <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded">
            <FontAwesomeIcon icon={faEye} className="mr-2" />
            View Candidate
        </Link>
      </div>
     
      <CandidateForm />
    </div>
  )
}

export default AddCandidate