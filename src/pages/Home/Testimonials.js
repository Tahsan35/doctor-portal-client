import React from 'react';
import quote from '../../assets/icons/quote.svg'
import person1 from '../../assets/images/people1.png'
import person2 from '../../assets/images/people2.png'
import person3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Allen Shuvo',
            descrip: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person1,
            location: 'california'
        },
        {
            _id: 2,
            name: 'Maria Selina',
            descrip: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person2,
            location: 'sunfansisco'
        },
        {
            _id: 3,
            name: 'Stive Gumeza',
            descrip: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person3,
            location: 'shikago'
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h3 className="text-3xl text-white">What Our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" srcset="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id}
                        review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;