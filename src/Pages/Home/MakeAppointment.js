import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import Primarybtn from '../Shared/Primarybtn';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center my-28'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 m-3 p-5 '>
                <h3 className='text-xl text-primary text-xl font-bold'>Appointment</h3>
                <h2 className='font-serif text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white mt-2 '>If you're facing mouth issues regarding your teeth then why wait for?
                 Book your appointment as soon as possible with your Dentist. Fix your smile before it's too late. We are Always here for you.</p>
                <br />
                <Primarybtn>Book Appointment</Primarybtn>
            </div>
        </section>
    );
};

export default MakeAppointment;