
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext } from "react";
import LoadingSpinner from "./Shared/LoadingSpinner";

const AddToys = () => {
  const { user , loading} = useContext(AuthContext);

  if (loading) {
    return <LoadingSpinner />;
}
  const handleSellService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const photo = form.photo.value;
    const animalName = form.animalName.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const selling = {
      sellerName: name,
      sellerMail: email,
      photo: photo,
      name: animalName,
      price: price,
      quantity: quantity,
      description: description
    };
    console.log(selling);
    fetch("https://animal-toy-market.vercel.app/allPostToys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(selling),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Sell Service Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="mt-16 container mx-auto">
      <div className="flex gap-10">
        <div className=" bg-primary flex items-center justify-center rounded-md w-1/2">
            <h2 className="text-center text-3xl font-semibold mx-auto text-white">
                Sell Service
            </h2>
        </div>
        <div>
            <img className="w-full" src="https://template268352.motopreview.com/mt-demo/268300/268352/mt-content/uploads/2022/07/mt-2289-category-img4.png" alt="" />
        </div>
      </div>
      <form onSubmit={handleSellService} className="mt-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input type="text" placeholder="name" name="name" defaultValue={user?.displayName} className="input input-bordered"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input type="email" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Animal Name</span>
            </label>
            <input type="text" placeholder="Name of Animal Toy" name="animalName" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input type="text" name="category" placeholder="Category Name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="text" name="photo" placeholder='Photo Url' className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="number" name="price" placeholder="Price in Taka" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" name="rating" placeholder="Rating" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input type="number" name="quantity" placeholder="Available quantity" className="input input-bordered"/>
          </div>
        </div>
        <div className="form-control my-6">
        <label className="label">
            <span className="label-text">Description</span>
        </label>
        <input type="text" name="description" placeholder="Short Description" className="input input-bordered"/>
        </div>

        <div className="form-control">
          <input className="btn bg-secondary hover:bg-primary border-0 text-black" type="submit" value="Confirm"/>
        </div>
      </form>
    </div>
    );
};

export default AddToys;