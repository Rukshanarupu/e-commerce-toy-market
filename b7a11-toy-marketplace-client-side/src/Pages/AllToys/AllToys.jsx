import { useContext, useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa";
import ModalForAllToys from "./ModalForAllToys";
import { AuthContext } from "../../Providers/AuthProviders";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchToys = async () => {
            try {
                const jsonData= 'https://animal-toy-market.vercel.app/allPostToys'
                const response =await fetch (jsonData);
                const data =await response.json();
                setAllToys(data);
            } 
            catch (error) {
                console.log(error);
            }
        };

        fetchToys();
    }, []);

    const handleSearch = () => {
        fetch (`https://animal-toy-market.vercel.app/searchToysByText/${searchQuery}`)
        .then(res=>res.json())
        .then(data=>setAllToys(data))
    };
    

    return (
        <div className="container mx-auto">
            <div className="flex gap-10 my-10">
                <div className=" bg-primary flex items-center justify-center rounded-md w-1/2">
                    <h2 className="text-center text-3xl font-semibold mx-auto text-white">
                        All Toys
                    </h2>
                </div>
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/ZK5gnWs/540x400-0.jpg" alt="" />
                </div>
            </div>
            <div className="flex flex-col overflow-x-auto sm:-mx-6 rounded-lg lg:-mx-8 shadow-md">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <input className="border p-2 ml-8 my-5 mr-0 bg-gray-300" type="text" onChange={e=>setSearchQuery(e.target.value)} placeholder="Search by Toy Name" />
                        <button className="border px-5 py-3 bg-sky-200" onClick={handleSearch}><FaSearch></FaSearch> </button>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light divide-gray-200 border">
                    <thead className="border-b bg-sky-200 font-medium text-center">
                        <tr>
                        <th scope="col" className="px-6 py-4">Picture</th>
                        <th scope="col" className="px-6 py-4">Seller</th>
                        <th scope="col" className="px-6 py-4">Toy Name</th>
                        <th scope="col" className="px-6 py-4">Sub Category</th>
                        <th scope="col" className="px-6 py-4">Price</th>
                        <th scope="col" className="px-6 py-4">Available Quantity</th>
                        <th scope="col" className="px-6 py-4">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allToys?.map((myToy, id) => (
                            <AllToysTable
                                key={id}
                                myToy={myToy}
                            ></AllToysTable>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const AllToysTable=({myToy})=>{
    const { user } = useContext(AuthContext);
    console.log(myToy)
    const {sellerName, name, subCategory, price, quantity, pictureUrl}=myToy
    return (
        <tr className="text-center">
            <td  className="text-center ml-4"><img className="h-[80px] w-[80px] rounded-full" src={pictureUrl} alt="" /></td>
            <td className="bg-gray-50 pl-4">
                {
                    sellerName ? sellerName : "Posted by Toyon kid's shop"
                }
            </td>
            <td  className=" pl-4">{name}</td>
            <td  className="bg-gray-50 pl-4">{subCategory}</td>
            <td  className=" pl-4">{price} taka</td>
            <td  className="bg-gray-50 pl-4">{quantity}</td>
            <td>
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn my-btn">See details</label>

                {/* Put this part before </body> tag */}
                {
                    user?
                    <div>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <label htmlFor="my-modal-3" className="btn bg-secondary btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <ModalForAllToys myToy={myToy}></ModalForAllToys>
                            </div>
                        </div>
                    </div> :

                    <div>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <label htmlFor="my-modal-3" className="btn bg-secondary btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <p className="font-bold text-3xl">Please login before see details</p>
                    
                        </div>
                    </div>
                </div>
                }
                
            </td>
        </tr>
    )
}

export default AllToys;