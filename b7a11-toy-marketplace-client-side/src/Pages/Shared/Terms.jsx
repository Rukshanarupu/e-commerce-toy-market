// import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container mx-auto m-10 flex justify-between items-center'>
            <img src='' className='w-2/4' alt="" />
            <div>
                <h2 className='text-center text-3xl text-primary font-bold my-5'>Terms and conditions</h2>
                <p>A Terms and Conditions agreement is where you let the public know the terms, rules and guidelines for using your website or mobile app. They include topics such as acceptable use, restricted behavior and limitations of liability. <br /> <br />

    This article will get you started with creating your own custom Terms and Conditions agreement. We have also put together a Sample Terms and Conditions Template that you can use to help you write your own.</p>
                <p className='my-5 font-bold'>Go back to <Link to="/signup" className='text-primary hover:underline'> Sign Up</Link> </p>
            </div>
        </div>
    );
};

export default Terms;