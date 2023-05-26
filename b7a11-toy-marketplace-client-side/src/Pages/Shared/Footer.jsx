import { FaEnvelope, FaGoogle, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="p-10 bg-primary text-white mt-10">
            <div className="footer my-5">
                <div className="">
                    <img src="https://cdn.shopify.com/s/files/1/0604/6518/4923/files/footer_logo.png?v=1660797221&width=150" alt="footer-logo" />
                    <div className='flex gap-2 mt-2'>
                        <FaGoogle className='w-7 h-7 p-2 mr-2 bg-white rounded-full text-black'></FaGoogle>
                        <FaTwitter className='w-7 h-7 p-2 mr-2 bg-white rounded-full text-black'></FaTwitter>
                        <FaInstagram className='w-7 h-7 p-2 mr-2 bg-white rounded-full text-black'></FaInstagram>
                        <FaLinkedin className='w-7 h-7 p-2 mr-2 bg-white rounded-full text-black'></FaLinkedin>
                    </div>
                </div> 
                <div>
                    <h2 className=" text-white font-bold text-2xl">Contact</h2> 
                    <div className="flex gap-2 items-center">
                        <FaLocationArrow className='w-7 h-7 p-2 text-white'></FaLocationArrow>
                        <p>123, Lorem ipsum, dolor sit amet, consectetur adipiscing, City, State, Country - 123 456</p>
                    </div>
                    <p className='flex my-2 items-center'><FaPhone className='w-7 h-7 p-2 text-white mr-2'></FaPhone> <span>(514) 327-9524
    </span></p>
                    <p className='flex items-center'><FaEnvelope className='w-7 h-7 p-2 text-white mr-2'></FaEnvelope> <span>toyondoll@brown.com</span></p>
                </div> 
                <div>
                    <h2 className=" text-white font-bold text-2xl">Information</h2> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Privacy Policy</a> 
                    <a className="link link-hover">Terms & Conditions</a>
                </div> 
                <div>
                    <span className=" text-white font-bold text-2xl">Why Buy From Us</span> 
                    <a className="link link-hover">Shipping & Delivery</a> 
                    <a className="link link-hover">Secure payment</a> 
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Terms of Use</a>
                </div>
            </div>
            <div className="footer md:px-10 py-5 md:py-4 border-t text-white">
                <div className="items-center grid-flow-col">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>Toy Industries Ltd. <br/>Providing reliable tech since 1992</p>
                </div> 
                <div className="md:place-self-center md:justify-self-end">
                <div className="relative">
                    <input type="email" placeholder="username@site.com" className="input input-bordered md:w-[350px] md:pr-16 w-[290px]" /> 
                    <button className="btn bg-secondary border-0 hover:bg-secondary text-black absolute top-0 right-0 rounded-l-none">Subscribe</button>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;