import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-100 bg-base-100 shadow-xl" >
            <div className="card-body" >
                <h2 className="card-title" > {review.descrip}</h2 >
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                            <img src={review.img} />
                        </div>
                    </div >
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Review;