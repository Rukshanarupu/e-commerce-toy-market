// import React from 'react';
import { FaGift, FaPhone, FaPlaneDeparture } from 'react-icons/fa';
import Banner from './Banner';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Galleries from './Galleries';
import Categories from './Categories/Categories';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Home = () => {
    useEffect(() => {
        // Initialize AOS with desired options
        AOS.init({ duration: 1000 }); 
    }, []);
    
    return (
        <div className=''>
            {/* Banner start here */}
            <Banner></Banner> 

            {/*feature section here  */}
            <section className='md:flex justify-around  container mx-auto my-10'>
                    <motion.div 
                    variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-2 ml-20"
                    >
                    <div className='flex gap-5 items-center my-3'>
                    <div><FaPlaneDeparture className='text-primary text-7xl'></FaPlaneDeparture> </div>
                    <div>
                        <h1 className='text-3xl font-bold'data-aos="fade-up">Free Shipping</h1>
                        <p>on orders over $35</p>
                    </div>
                </div>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("bottom", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-2 ml-20"
                    >
                    <div className='flex gap-5 items-center'>
                    <div><FaPhone className='text-primary text-7xl'></FaPhone> </div>
                    <div>
                        <h1 className='text-3xl font-bold' data-aos="zoom-in">Premium Support</h1>
                        <p>24/7 including holiday</p>
                    </div>
                </div>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="mt-2 ml-20"
                    >
                    <div className='flex gap-5 items-center'>
                    <div><FaGift className='text-primary text-7xl'></FaGift> </div>
                    <div>
                        <h1 className='text-3xl font-bold' data-aos="fade-left">Member Discount</h1>
                        <p>up to 30% off</p>
                    </div>
                </div>
                </motion.div>

            </section>

            {/* Gallery section start here */}
            <Galleries></Galleries>

            {/* about section */}
            <section className='container mx-auto grid md:grid-cols-2 gap-10 items-center'>
                <div className='relative mb-10'>
                    <div>
                    <img src="https://slidesigma.com/themes/html/toystore/assets/img/about-us/570x420.jpg" alt="" />
                    </div>
                   <div className='absolute -bottom-12'>
                   <img src="https://slidesigma.com/themes/html/toystore/assets/img/about-us/275x200.jpg" alt="" />
                   </div>
                </div>
                <div>
                    <div>
                        <h4 className='my-title' data-aos="fade-up">About us</h4>
                        <h2 className='text-6xl font-bold' data-aos="fade-left">Best Toys From <span className='text-primary'>Best Shop</span></h2>
                        <h2 className='text-3xl font-semibold my-5' data-aos="zoom-in">Customers’ favorite products this week.</h2>
                        <p data-aos="fade-up">The golden age of toy development was at the turn of the toys Real wages were rising steadily in the Western world, allowing even working-class families to afford toys for their children, and industrial techniques.</p>
                    </div>
                    <Link to="/contact" className='btn my-btn mt-5'>CONTACT US</Link>
                </div>
            </section>
            
            {/* Category section start here */}
            <Categories></Categories>

            
        </div>
    );
};

export default Home;