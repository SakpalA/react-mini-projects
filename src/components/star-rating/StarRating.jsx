import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './starrating.css';

const StarRating = ({ noOfStar = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
    }

    const handleMouseMove = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    }

    const handleMouseLeave = (getCurrentIndex) => {
        setHover(rating);
    }
 
    return (
        <div className='star-rating'>
            {
                // here index start from 0,1,2,3,4 that why we add index = index
                [...Array(noOfStar)].map((_, index) => {
                    index += 1;  // so it will start from 1,2,3,4,5
                    return <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={()=> handleClick(index)}
                        onMouseMove={()=> handleMouseMove(index)}
                        onMouseLeave={()=> handleMouseLeave()}
                        size={40}>
                    </FaStar>
                })
            }
        </div>
    )
}

export default StarRating;