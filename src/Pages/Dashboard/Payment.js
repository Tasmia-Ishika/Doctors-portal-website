import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1pyzLgFdLsD88grqFJXeCe5OeFWkSBRP7JSPB0otOqx6myGVwt7rdbxuCOp0kwFIugntRF0QlVlfP5LWcBaMdh00gdHAke1h');



const Payment = () => {
    const { id } = useParams();
    const url = `https://fathomless-ridge-41049.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    console.log(appointment)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (


        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-purple-700 font-bold text-lg'>{appointment.date}</span> at <span className='font-bold'>{appointment.slot}</span></p>
                    <p className='text-xl'>Please Pay: <span className='text-2xl font-bold text-success'>${appointment.price}</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>


    );
};

export default Payment;