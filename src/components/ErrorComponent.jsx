import React from 'react';

const ErrorComponent = ({ message }) => {
    if(!!message)
    return null;
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-red-100 border border-red-400 text-red-700 rounded-md">
        <h2 className="text-xl font-semibold mb-2">Error</h2>
        <p>{message}</p>
        </div>
    );
};

export default ErrorComponent;
