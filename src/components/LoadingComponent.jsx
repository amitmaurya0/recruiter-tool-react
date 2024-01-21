import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-t-blue-500 h-12 w-12"></div>
      <p className="ml-2 text-gray-600">Loading...</p>
    </div>
  );
};

export default LoadingComponent;
