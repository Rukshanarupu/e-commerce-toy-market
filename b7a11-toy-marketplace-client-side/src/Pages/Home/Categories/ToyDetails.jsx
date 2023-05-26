import { useContext, useState } from "react";
import { FaHeart, FaStar, FaStarHalf } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import toast from 'react-hot-toast';
import { AuthContext } from "../../../Providers/AuthProviders";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const ToyDetails = () => {
    const { loading } = useContext(AuthContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const detailsLoaded = useLoaderData();
    console.log(detailsLoaded)
    const {pictureUrl, name, review, rating, detailDescription, price}=detailsLoaded
    
    const renderStars = () => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        const stars = [];
    
        for (let i = 0; i < fullStars; i++) {
          stars.push(<FaStar/>);
        }
    
        if (hasHalfStar) {
          stars.push(<FaStarHalf/>);
        }
    
        return stars;
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    // favorite btn function
    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast.success('This recipe is now your favorite!');
    };
    return (
        
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-10 mx-auto">
            <div className="lg:w-4/5 mx-auto md:flex flex-wrap">
                <img alt="toy" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={pictureUrl ? pictureUrl :"https://i.ibb.co/S3Vrxz7/product-4.jpg"}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">Toy Name</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                <div className="flex mb-4">
                <span className="flex items-center">
                    {renderStars()}
                    <span className="text-gray-600 ml-3">{review} Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    </a>
                </span>
                </div>
                <p className="leading-relaxed">{detailDescription}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                
                <div className='flex justify-between'>
                    <span className="title-font font-medium text-2xl text-gray-900">{price} taka</span>
                    <button disabled={isFavorite} onClick={handleFavoriteClick} className='my-btn flex items-center hover:text-black'>
                        <FaHeart></FaHeart>
                        <span className='ml-1'>
                            {isFavorite ? 'Favorite' : 'Mark as Favorite'}
                        </span>
                    </button>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};



export default ToyDetails;