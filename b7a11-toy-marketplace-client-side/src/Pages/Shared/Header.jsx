import { useContext, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const {user, logOut}=useContext(AuthContext)
    const location = useLocation();

    useEffect(() => {
        const routeName = location.pathname.replace('/', '');
        const formattedRouteName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
        document.title = `Animal Toy | ${formattedRouteName}`;
      }, [location]);
    console.log(user)

    const handleLogout=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div className='container mx-auto navbar bg-base-100'>
            <div className="navbar-start">
                <Link to='./' className="">
                    <img className='w-24 md:w-full' src='https://cdn.shopify.com/s/files/1/0604/6518/4923/files/Sachue_10.png?v=1677762016&width=200' alt="" />
                </Link>
            </div>
            <div className="navbar-center ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn my-btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-30">
                        <li className='mx-1 mb-2'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/">Home</NavLink></li>
                        <li className='mx-1 my-2'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/toys">All Toys</NavLink></li>
                        {
                            user ? 
                            <div className=''>
                                <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/addToy">Add a Toy</NavLink></li>
                                <li className='mx-1 my-2'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/myToy">My Toys</NavLink></li>
                            </div> : 
                            <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/login'>Login</NavLink></li>
                        }
                        <li className='mx-1 my-2'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/blog">Blog</NavLink></li>
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/contact">Contact</NavLink></li>
                        
                    </ul>
                </div>
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal px-1">
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/">Home</NavLink></li>
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/toys">All Toys</NavLink></li>
                        {
                            user ? 
                            <div className='flex items-center'>
                                <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/addToy">Add a Toy</NavLink></li>
                                <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/myToy">My Toys</NavLink></li>
                            </div> : 
                            <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/login'>Login</NavLink></li>
                        }
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/blog">Blog</NavLink></li>
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                {
                    user ? 
                    <div className='flex items-center'>
                        <div className='tooltip tooltip-bottom tooltip-warning ' data-tip={user.displayName}>
                            {
                                user?.photoURL ? <img className='border-1 border-red-400 rounded-full w-10' src={user.photoURL} alt="" />:
                                <p>{user?.displayName}</p>
                            }
                            
                        </div>
                        <a onClick={handleLogout} href='' className="my-btn ml-3">Log Out</a>
                    </div> : 
                    <div className='flex gap-1 items-center'>
                        <FaUserCircle className="mr-3 w-[20px]"></FaUserCircle>
                        <Link className={({ isActive }) => (isActive ? 'active' : 'default')} to="/signup">Sign up</Link>
                    </div>

                }
            </div>

        </div>
    );
};

export default Header;