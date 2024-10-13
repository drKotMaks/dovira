"use client"
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseOver = (index) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (index) => {
        // Implement click functionality if needed
    };

    const getStarClass = (starNumber) => {
        if (starNumber <= Math.floor(rating)) {
            return 'text-yellow-400';
        } else if (starNumber === Math.ceil(rating) && rating % 1 !== 0) {
            return 'text-yellow-400 half-filled w-4 h-4';
        } else {
            return 'text-gray-400';
        }
    };

    return (
        <div onMouseLeave={handleMouseLeave} className='h-4' >
            {[...Array(5)].map((_, index) => {
                const starNumber = index + 1;
                return (
                    <span
                        key={starNumber}
                        className={`cursor-pointer ${getStarClass(starNumber)}`}
                        onMouseOver={() => handleMouseOver(starNumber)}
                        onClick={() => handleClick(starNumber)}
                    >
                        <FontAwesomeIcon icon={faStar} size={24} />
                    </span>
                );
            })}
            
        </div>
    );
};

export default StarRating;
