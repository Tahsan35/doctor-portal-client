import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary uppercase" >{children}</button>
        </div >
    );
};

export default PrimaryButton;