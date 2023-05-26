import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import LoadingSpinner from "../Shared/LoadingSpinner";
import Swal from "sweetalert2";
import ModalForMyToy from "./ModalForMyToy";


const MyToys = () => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user.email)
    const [myToys, setMyToys] = useState([]);
    const [acc, setAcc] = useState(true);

    const url='https://animal-toy-market.vercel.app/myToys'
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            setMyToys(data);
          });
    }, []);

    const filterByMail=myToys.filter(toys=>user.email==toys.sellerMail)
    console.log(filterByMail)

    if (loading) {
        return <LoadingSpinner />;
    }

    const handleDelete = (id) => {
        console.log(id)
        const proceed = confirm("Are You Sure you wan to delete");
        if (proceed) {
          fetch(`https://animal-toy-market.vercel.app/myToys/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
    
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your Service has been deleted.", "success");
                const remaining = myToys.filter((myToy) => myToy._id !== id);
                setMyToys(remaining);
              }
            });
        }
    };

    return (
        <div className="container mx-auto">
            <div className="flex gap-10 my-10">
                <div className=" bg-primary flex items-center justify-center rounded-md w-1/2">
                    <h2 className="text-center text-3xl font-semibold mx-auto text-white">
                        My all Toys
                    </h2>
                </div>
                <div>
                    <img className="w-full rounded-lg" src="https://static.wixstatic.com/media/ea26fd_0c1cd42138d14dda895c4cd39825e1a4~mv2_d_3000_1408_s_2.jpg/v1/fill/w_930,h_437,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_0c1cd42138d14dda895c4cd39825e1a4~mv2_d_3000_1408_s_2.jpg" alt="" />
                </div>
            </div>
            <div className="flex flex-col overflow-x-auto shadow-md sm:rounded-lg  min-w-full align-middle">
                <div className="mb-5">
                    <button className="btn my-btn" onClick={()=>setAcc(!acc)}>{acc ? "price high to low": "price low to high"}</button>
                </div>
                <div className="inline-block overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr className="">
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Delete
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Picture
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Price
                                </th>
                                <th scope="col" className="text-center py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">
                                    Available Quantity
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {filterByMail?.map((myToy) => (
                                <MyToysTable
                                    key={myToy._id}
                                    handleDelete={handleDelete}
                                    // handleToyUpdate={handleToyUpdate}
                                    myToy={myToy}
                                ></MyToysTable>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
        </div>
    );
};


const MyToysTable=({myToy, handleDelete, })=>{
    console.log(myToy)
    const {pictureUrl, name, price, quantity, _id}=myToy
    return (
        <tr>
            <th className="text-left">
                <button className="btn bg-secondary text-black hover:bg-primary btn-circle ml-5" onClick={() => handleDelete(_id)} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </button>
            </th>
            <td>
                <div className="mask ">
                    {pictureUrl && <img className="rounded-full w-20 h-20" src={pictureUrl} alt="img" />}
                </div>
            </td>
            <td className="bg-gray-50 pl-4">
                {
                    name
                }
            </td>
            <td>{price} taka</td>
            <td className="text-center">{quantity}</td>
            <td>
                <label htmlFor="my-modal-3" className="btn my-btn">Edit</label>
                <div>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <label htmlFor="my-modal-3" className="btn bg-secondary btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <ModalForMyToy 
                                myToy={myToy}
                                // handleToyUpdate={handleToyUpdate}
                            ></ModalForMyToy>
                        </div>
                    </div>
                </div>
             </td>
            </tr>
    )
}

export default MyToys;