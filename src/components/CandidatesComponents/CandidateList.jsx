import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { getCandidates } from '../../api/candidate';
import { Link } from 'react-router-dom';
import LoadingComponent from '../LoadingComponent';
import ErrorComponent from '../ErrorComponent';

function CandidateList() {
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const resp = await getCandidates();
                console.log(resp);
                setCandidates(resp.candidates);
                
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [])
    if(loading)
        return <LoadingComponent />
    if(error)
        return <ErrorComponent message={error} />

    return (
        <>
            <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-300">
                <thead>
                    <tr>
                    <th className="py-4 px-4 text-left">ID</th>
                    <th className="py-4 px-4 text-left">Name</th>
                    <th className="py-4 px-4 text-left">Email</th>
                    <th className="py-4 px-4 text-left">Phone</th>
                    <th className="py-4 px-4 text-left">Expected Salary</th>
                    <th className="py-4 px-4 text-left">Status</th>
                    <th className="py-4 px-4 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        candidates.length === 0 &&<td className='py-4 px-4 text-center' colSpan={6}>No candidate avaialble</td>
                    }
                    {
                        candidates.map((candidate, index) =><tr key={candidate.id}>
                                <td className="py-4 px-4">{index+1}</td>
                                <td className="py-4 px-4">{candidate.name}</td>
                                <td className="py-4 px-4">{candidate.email}</td>
                                <td className="py-4 px-4">{candidate.phone}</td>
                                <td className="py-4 px-4">INR {candidate.expectedSalary}</td>
                                <td className="py-4 px-4">{candidate.currentStatus}</td>
                                <td className="py-4 px-4">
                                    <Link to={`candidate/edit/${candidate.id}`} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                                        <FontAwesomeIcon icon={faEdit} className="mr-2" />
                                        Edit
                                    </Link>

                                    <Link to={`candidate/${candidate.id}`} className="bg-green-500 text-white px-4 py-2 rounded">
                                        <FontAwesomeIcon icon={faEye} className="mr-2" />
                                        View
                                    </Link>
                                </td>
                            </tr>)
                    }
                </tbody>
                </table>
        </>
    )
}

export default CandidateList