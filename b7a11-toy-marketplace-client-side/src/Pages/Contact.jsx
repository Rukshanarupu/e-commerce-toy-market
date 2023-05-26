// import React from 'react';
import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
    return (
        <section className='my-10 mx-10'>
            <div className="title-design ">
                <div className='my-title-border'></div>
                    <h1 className='mt-10 mb-4 text-center my-title '>Address</h1>
                <div className='my-title-border'></div>
            </div>
                <p className='text-center'>you can contact with us by following way.</p>
            <div className='flex justify-around my-4'>
                <div className='border rounded-xl shadow-xl p-5'>
                    <h2 className='text-xl'>Factory</h2>
                    <p>If food is an experience for you, then you will find it at the Food Recipe</p><br />                        
                    <div>
                        <p className='flex'><FaLocationArrow className='w-7 h-7 p-2 mr-2 bg-primary rounded-full text-black'></FaLocationArrow> Social Chef recipe, opp secure garden. Hotel View 364001</p>
                        <p className='flex my-2'><FaPhone className='w-7 h-7 p-2 mr-2 bg-primary rounded-full text-black'></FaPhone> <span>236-456-1226</span></p>
                        <p className='flex'><FaEnvelope className='w-7 h-7 p-2 mr-2 bg-primary rounded-full text-black'></FaEnvelope> <span>info@recipes.com</span></p>
                    </div>
                </div>
                <div className='border rounded-xl shadow-xl p-5'>
                    <h2 className='text-xl'>Head Office</h2>
                    <p>If food is an experience for you, then you will find it at the Food Recipe</p><br /> 
                    <div>
                        <p className='flex'><FaLocationArrow className='w-7 h-7 p-2 mr-2 bg-primary rounded-full text-black'></FaLocationArrow> Social Chef recipe, opp secure garden. Hotel View 364001</p>
                        <p className='flex my-2'><FaPhone className='w-7 h-7 p-2 mr-2 bg-primary rounded-full text-black'></FaPhone> <span>236-456-1226</span></p>
                        <p className='flex'><FaEnvelope className='w-7 h-7 p-2 mr-2 bg-primary rounded-full text-black'></FaEnvelope> <span>info@recipes.com</span></p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Contact;
