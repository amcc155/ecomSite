// SkeletonCard.js
import React from "react";

const SkeletonCard = () => {
    return (
        <div className="border-2 border-gray-300 min-h-[200px] mb-3 animate-pulse">
            <div className="bg-gray-300 h-[200px] m-auto"></div>
            <div className="bg-gray-300 h-6 mt-2 mx-auto w-3/4"></div>
         
        </div>
    );
};

export default SkeletonCard;
