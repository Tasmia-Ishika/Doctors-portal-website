import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
      {
          _id: 1,
          name: 'Fluoride Treatment',
          description: 'Adults are benefitted from fluoride because as they age, their teeth weaken as well making them more susceptible to decay.More Benefits are Protects Your Enamel,   Puts Minerals Back In Your Teeth, Helps Prevent Cavities and Tooth Decay, Saves You Money Down the Road, Provides A Natural Preventative.',
          img: fluoride
      },
      {
          _id: 2,
          name: 'Cavity Filling',
          description: 'Composite fillings fill the cavity and bond directly to the patients teeth. Because of this, the tooth and filling work together. This means that composite fillings do not make your teeth weaker, but they may make your teeth stronger. ',
          img: cavity
      },
      {
          _id: 3,
          name: 'Teeth Whitening',
          description: 'Professional teeth whitening removes persistent stains and brightens your smile, leaving you with more self-confidence and less cause for embarrassment about your teeth. More benefits are Thorough Whitening. The great thing about professional teeth whitening is that you can count on it.Reliable Treatments.Quicker Results.Enhanced Appearance. ',
          img: whitening
      },
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
            <h1 className='text-primary text-2xl font-bold uppercase'>Our Services</h1>
            <h2 className='text-4xl font-serif  mt-2'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;