import React from 'react'

function InputField({ label, type, name,  value, onChange, required=false }) {
  return (
    <div className="mb-4">
       {label && <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">
        {label}
        </label>}
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full p-2 border rounded"
            required={required}
        />
        
    </div>
  )
}

export default InputField