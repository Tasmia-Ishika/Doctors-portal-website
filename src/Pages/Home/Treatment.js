import React from 'react';
import treatment from '../../assets/images/treatment.png';
import Primarybtn from '../Shared/Primarybtn';
const Treatment = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 m-2">We provide best treatment for our clients.Our services which will improve the condition of our client's teeth are Bridges, Crowns, Fillings, Root canal treatment, Scale and polish, Wisdom tooth removal, Braces, Dental implants, Dentures or false teeth, Broken or knocked out tooth, Dental veneers etc. Definitely treatments of individual will vary upon tests, problems and reports.</p>
                    <Primarybtn>Get Started</Primarybtn>
                </div>
            </div>
        </div>
    );
};

export default Treatment;