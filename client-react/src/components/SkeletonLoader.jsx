import React from 'react';

const ShimmerBox = ({ className }) => {
  return (
    <div
      className={`shimmer-effect bg-gray-200 rounded-md ${className}`}
    ></div>
  );
};

const SkeletonLoader = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <ShimmerBox className="h-16 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ShimmerBox className="h-8 mb-4 w-3/4" />
          <ShimmerBox className="h-4 mb-2" />
          <ShimmerBox className="h-4 mb-2 w-5/6" />
          <ShimmerBox className="h-4 w-4/5" />
        </div>
        <div>
          <ShimmerBox className="h-8 mb-4 w-3/4" />
          <ShimmerBox className="h-4 mb-2" />
          <ShimmerBox className="h-4 mb-2 w-5/6" />
          <ShimmerBox className="h-4 w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
