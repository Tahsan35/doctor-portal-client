import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            discription: ' lorem some discripe',
            img: fluoride
        },
        {
            _id: 2,
            name: 'cavity  Filling',
            discription: ' lorem some discripe',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth whitening',
            discription: ' lorem some discripe',
            img: whitening
        },
    ];
    return (
        <div className='my-28' >
            <div className='text-center font-bold uppercase' >
                <h2 className='text-primary text-xl' > Our services</h2 >
                <h1 className='text-2xl' > Services We Provide</h1 >
            </div >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div >
        </div >
    );
};

export default Services;