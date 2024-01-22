import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getCandidates } from '../api/candidate';
import CandidateDetailsItem from '../components/CandidatesComponents/CandidateDetailsItem';
import ErrorComponent from '../components/ErrorComponent';
import LoadingComponent from '../components/LoadingComponent';

function CandidateDetails({  }) {
    const { candidateId } = useParams();
    const [candidateData, setCandidateData] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        const fetchCandidateData = async () => {
          try {
            const resp = await getCandidates(candidateId);
            setCandidateData(resp.details)
          } catch (error) {
            setError(error.message)
          } finally {
            setLoading(false);
          }
        }
        if(candidateId)
            fetchCandidateData();
    
        console.log(candidateId);
      },[candidateId])
      console.log(loading, error)
    return (
        <div className="w-full  mt-8">
            <div className="flex mb-4 items-center justify-between">
                <h2 className="text-2xl font-bold mb-4">Candidate Details</h2>
                <div>

                    <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                        <FontAwesomeIcon icon={faEye} className="mr-2" />
                        All Candidates
                    </Link>
                    <Link to={"/candidate/edit/"+candidateId} className="bg-blue-500 text-white px-4 py-2 rounded">
                        <FontAwesomeIcon icon={faEdit} className="mr-2" />
                        Edit Candidate
                    </Link>
                </div>
            </div>
            {loading && <LoadingComponent />}
            {error && <ErrorComponent message={error} />}
            {!loading && error == "" && <table className="w-full  border-gray-300 divide-y divide-gray-300">
                <tbody>
                    <CandidateDetailsItem label="Name" value={candidateData.name} />
                    <CandidateDetailsItem label="Email" value={candidateData.email} />
                    <CandidateDetailsItem label="Phone" value={candidateData.phone} />
                    <CandidateDetailsItem label="Expected Salary" value={`INR ${candidateData.expectedSalary}`} />
                    <tr>
                        <td className="py-2 px-4 font-semibold text-gray-600">Skills</td>
                        <td className="py-2 px-4">
                        <ul>
                            {candidateData?.candidateSkills?.map((skill, index) => (
                            <li key={index}>{skill.name}</li>
                            ))}
                        </ul>
                        </td>
                    </tr>
                    <CandidateDetailsItem label="React Experience" value={candidateData.reactExperience} />
                    <CandidateDetailsItem label="Node Experience" value={candidateData.nodeExperience} />
                    <CandidateDetailsItem label="Total Score" value={candidateData.candidateScore} />
                
                
                    <tr>
                        <td className="py-2 px-4 font-semibold text-gray-600">Current Status</td>
                        <td className="py-2 px-4 text-green-500">{candidateData.currentStatus}</td>
                    </tr>
                </tbody>
            </table>}
        </div>
    )
}

export default CandidateDetails