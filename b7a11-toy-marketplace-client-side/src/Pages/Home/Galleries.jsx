
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Galleries = () => {
    const [galleries, setGalleries] = useState([]);
    const [viewAllPhotos, setViewAllPhotos] = useState(false);
    const { loading } = useContext(AuthContext);


    useEffect(() => {
        const loadAllData = async () => {
          try {
            const jsonData = "https://animal-toy-market.vercel.app/allToys";
            const res = await fetch(jsonData);
            const data = await res.json();
            setGalleries(data);
          } 
          catch (error) {
            console.log(error);
          }
        };
        loadAllData();
    }, []);

    
    if (loading) {
        return <LoadingSpinner />;
    }
    
    const handleAllPhotosBtn = () => {
        setViewAllPhotos(true);
    };
    const allPhotos = viewAllPhotos ? galleries : galleries.slice(0, 12);

  return (
    <div className="mb-10 bg-slate-200 py-5">
        <div className="text-center my-5 md:mx-32">
            <h2 className="my-title">Toys Wonderland</h2>
            <p>Step into our Toy Gallery and immerse yourself in a vibrant world of play and wonder. Browse through a delightful collection of toys that cater to every child has imagination and curiosity. From classic favorites to the latest trends, our gallery offers a wide selection of toys that bring joy, laughter, and endless hours of entertainment.</p>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {allPhotos?.map((gallery, id) => (
                <GalleryTabs 
                    key={id}
                    gallery={gallery}>
                </GalleryTabs>
            ))}
        </div>
        <div className="flex justify-center">
            {!viewAllPhotos && (
            <button
                onClick={handleAllPhotosBtn}
                className="btn my-btn mt-5"
            >
                View All Photos
            </button>
            )}
        </div>
    </div>
        
    );
};

const GalleryTabs=({gallery})=>{
    const {pictureUrl, name, price}= gallery || {};
    return(
        <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className=""
        >
        <div className="overflow-hidden aspect-video bg-red-400 cursor-pointer rounded-xl relative group border-primary border-2">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                    <h2 className="font-bold">{name}</h2>
                    <div className="opacity-60 text-sm ">
                        <p>Price: <span className="font-semibold">{price}</span></p>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-centerm-2 md:m-0 ">
                <img src={pictureUrl? pictureUrl: 'https://media.istockphoto.com/id/1291681199/photo/teddy-bear-with-a-red-heart-isolated-over-white-background-valentines-day-concept.jpg?s=2048x2048&w=is&k=20&c=sfgY_4vgJwukcYUV9wiC4zc9I2vvuPe5nrBFgBb1iRU='} alt="" className="aspect-square group-hover:scale-110 transition duration-300 ease-in-out bg-cover w-full"/>
            </div>
        </div>
        </motion.div>
       
    )
}

export default Galleries;