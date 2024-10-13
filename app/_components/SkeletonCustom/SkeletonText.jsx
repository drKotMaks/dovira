import React from 'react';

const SkeletonText = () => {
  return (
    <div className="h-80 w-full  animate-pulse rounded-lg p-3 mt-4 gap-4">
    <div className="h-6 w-full bg-gray-200 animate-pulse rounded-lg p-3 mt-4"></div>
    <div className="h-6 w-3/4 bg-gray-300 animate-pulse rounded-lg p-3 mt-4"></div>
    <div className="h-6 w-full bg-gray-200 animate-pulse rounded-lg p-3 mt-4"></div>
  </div>
  );
};

export default SkeletonText;