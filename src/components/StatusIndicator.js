// src/components/StatusIndicator.js
import React from 'react';

const StatusIndicator = ({ loading, error }) => {
  if (loading) {
    return (
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
        <p className="mt-4">Fetching Weather Data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-500/20 rounded-lg">
        <p className="font-bold">Location Not Found</p>
        <p>Please check the spelling and try again.</p>
      </div>
    );
  }

  return null;
};

export default StatusIndicator;
