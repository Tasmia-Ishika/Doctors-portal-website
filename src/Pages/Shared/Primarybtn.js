import React from 'react';

const Primarybtn = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default Primarybtn;