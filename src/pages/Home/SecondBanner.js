import React from 'react';
import treatment from '../../assets/images/treatment.png'
const SecondBanner = () => {
    return (
        <div className="card lg:card-side shadow-xl py-10" >
            <div className="hero-content flex-col lg:flex-row-reverse" >
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6" > It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsumis that it has a more - or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page</p >
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary uppercase" > Get Started</button >
                </div >
                <figure>
                    <img className="max-w-sm rounded-lg shadow-2xl" src={treatment} alt="Album" />
                </figure>
            </div >
        </div >
    );
};

export default SecondBanner;