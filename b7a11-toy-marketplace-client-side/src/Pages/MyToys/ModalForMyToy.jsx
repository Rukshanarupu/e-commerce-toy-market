
const ModalForMyToy = (myToy, ) => {
    console.log(myToy)
    const {name, description, photo, price, quantity, sellerMail, sellerName, _id}=myToy

    const handleToyUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const toyName = form.toy.value;
        const email = form.email.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const update = { name, quantity, photo, price, email, toyName }

        console.log(update);

        // send data to the server
        fetch(`https://animal-toy-market.vercel.app/myToys/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(update)
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                  title: 'Success!',
                  text: 'Coffee Updated Successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
              })
            }
          });
    }
    
    return (
      <div className="mt-5 container mx-auto">
        <h2 className="text-center text-3xl font-bold ">Please update your Information</h2>
        <form onSubmit={handleToyUpdate} className="mt-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input type="text" placeholder="name" name="name" defaultValue={sellerName} className="input input-bordered"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input type="email" placeholder="email" name="email" defaultValue={sellerMail} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Animal Name</span>
              </label>
              <input type="text" placeholder="Name of Animal Toy" name='toy' defaultValue={name} className="input input-bordered"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="text" name="photo" placeholder={photo} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="number" name="price" placeholder={price} className="input input-bordered"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input type="number" name="quantity" placeholder={quantity} className="input input-bordered"/>
            </div>
          </div>
          <div className="form-control my-6">
          <label className="label">
              <span className="label-text">Description</span>
          </label>
          <input type="text" name="description" placeholder={description} className="input input-bordered"/>
          </div>
  
          <div className="form-control">
            <input className="btn bg-secondary hover:bg-primary border-0 text-black" type="submit" value="Confirm"/>
          </div>
        </form>
      </div>
      );
};

export default ModalForMyToy;