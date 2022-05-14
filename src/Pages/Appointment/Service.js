import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
            <div className="card-body m-3 p-6">
                <h2 className="card-title text-secondary font-bold justify-center">{name}</h2>
                <p className='text-center'>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-600'>No slot available for this date. We suggest you to try another date.</span>
                }</p>
                <p className='text-center font-bold'>{slots.length} {slots.length > 1 ? 'Slots' : 'Slot'} Available</p>
                <div className="card-actions justify-center">
                    <label for="booking-modal" disabled={slots.length === 0} onClick={() => setTreatment(service)} className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white font-bold mt-2 btn-sm uppercase">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;