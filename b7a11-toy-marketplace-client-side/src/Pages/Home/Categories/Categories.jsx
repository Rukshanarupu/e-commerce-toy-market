import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from "../../../Providers/AuthProviders";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { toast } from "react-hot-toast";


const Categories = () => {
    const [activeTab, setActiveTab] = useState("Wild");
    const [categories, setCategories] = useState([]);
    const {loading } = useContext(AuthContext);

    useEffect(() => {
      fetch(`https://animal-toy-market.vercel.app/allToysByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
    }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  
  if (loading) {
    return <LoadingSpinner />;
}
// console.log(allCategory)
    return (

      <div className="container mx-auto flex justify-center my-10">
        <Tabs>
          <TabList className="grid md:grid-cols-4 sm:grid-cols-2 w-[300px] md:w-full">
            <Tab onClick={() => handleTabClick("Wild")}>Wild Animals</Tab>
            <Tab onClick={() => handleTabClick("Reptile")}>Reptiles</Tab>
            <Tab onClick={() => handleTabClick("Domestic")}>Domestic Animals</Tab>
            <Tab onClick={() => handleTabClick("Mythical")}>Mythical Creatures</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-2 gap-7 my-5">
              {categories?.map((category, id) => (
                <Category key={id} category={category}></Category>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 gap-7 my-5">
              {categories?.map((category, id) => (
                <Category key={id} category={category}></Category>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 gap-7 my-5">
              {categories?.map((category, id) => (
                <Category key={id} category={category}></Category>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 gap-7 my-5">
              {categories?.map((category, id) => (
                <Category key={id} category={category}></Category>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
};


const Category =({category})=>{
  const {user } = useContext(AuthContext);
    // console.log(category)
    const {pictureUrl, name, price, rating, _id}=category || {}
    const warning = () => toast.error('You have to log in first to view details');
  return(
    <div className="md:flex-row flex-col card card-side bg-sky-100 shadow-xl">
      <div className="w-full h-64 flex items-center justify-center">
        <figure><img className="w-[300px] h-[200px]" src={pictureUrl} alt="Movie"/></figure>
      </div>
      <div className="card-body">
        <div>
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold">Price: <span className="text-orange-500">{price} taka</span></p>
        </div>
        <h3 className="text-xs">Rating: <span className="text-orange-500">{rating}</span></h3>
        <div className="card-actions justify-end">
          {
            user ?
            <Link to={`/details/${_id}`} className="btn my-btn">View details</Link>:
            <Link onClick={warning} className="btn my-btn">View details</Link>

          }
        </div>
      </div>
    </div>

  )
}
export default Categories;