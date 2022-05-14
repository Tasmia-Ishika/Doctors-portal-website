import React from 'react';
import appointment from '../../assets/images/appointment.png';
import Primarybtn from '../Shared/Primarybtn';
const Form = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className=' my-28'>
            <div className='p-10'>
                <h1 className='text-primary font-bold text-2xl text-center'>Contact us</h1>
                <h2 className='font-serif text-white  text-4xl text-center mb-5'>Stay connected with us</h2>
                <div className='text-center'>
                    <input type="email" placeholder="Email" className="input input-bordered input-md w-full max-w-xs mb-5" />
                    <br />
                    <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs mb-5" />
                    <br />
                    <textarea className="textarea textarea-accent input-md w-full max-w-xs mb-5" placeholder="Your Message"></textarea>
                    <br />
                    <Primarybtn>Submit</Primarybtn>
                </div>

            </div>
        </section>
    );
};

export default Form;