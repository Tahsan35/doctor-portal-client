import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModals from './BookingModals';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treathment, setTreathment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-10'>
            <p className='text-xl text-secondary text-center my-12'>Available Appointment on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id}
                        service={service}
                        setTreathment={setTreathment}>
                    </Service>)
                }
            </div>
            {treathment && <BookingModals
                date={date}
                treathment={treathment}>
                setTreathment={setTreathment}
            </BookingModals>}
        </div>
    );
};

export default AvailableAppointment;