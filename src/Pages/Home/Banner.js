import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import Primarybtn from '../Shared/Primarybtn';
const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }}>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Strong Smiles Requires Strong Teeth</h1>
                        <p className="py-6">Regular dental visits are important because they allow your dentist to: Detect cavities (tooth decay) early. Your dentist examines your teeth to find cavities while they're still minor. The earlier you catch them, the less expensive cavities are to treat.</p>
                        <Primarybtn>Get Started</Primarybtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;