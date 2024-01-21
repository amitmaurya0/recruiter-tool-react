import React from 'react'

function CandidateDetailsItem({ label, value }) {
  return (
    <tr>
        <td className="py-2 px-4 font-semibold text-gray-600">{label}</td>
        <td className="py-2 px-4">{value}</td>
    </tr>
  )
}

export default CandidateDetailsItem