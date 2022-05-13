import React from 'react';
import quote from '../../assets/icons/quote.svg';
import client1 from '../../assets/images/people1.png';
import client2 from '../../assets/images/people2.png';
import client3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Jonathan Lambert',
            review: 'I did cavity filling from them. They provide very good services indeed. My teeths are so perfect now and I no more suffering now,Thanks to them.',
            location: 'California',
            img: client1,

        },
        {
            _id: 2,
            name: 'Gigi Perkinson',
            review: 'My enamels were turned into yellow till I got their teeth whitening. Lasted more than 6 months which is my highest. They got me as their regular client for sure.',
            location: 'Los Angeles',
            img: client2,

        },
        {
            _id: 3,
            name: 'Bella Fernandez William',
            review: 'Did Fluoride treatment from them. I can gladly say all my gum issues and other problems are completely vanished. Cannot thank them enough.Highly Recommended for their service.',
            location: 'California',
            img: client3,

        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients says</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review=> <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;