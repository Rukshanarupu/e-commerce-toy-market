import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';


const Login = () => {
    const [show, setShow]=useState(false)
    const {signInUser, googleSign}=useContext(AuthContext)
    const [error, setError]=useState('')
    const [success, setSuccess] = useState('');
    const navigate =useNavigate()
    const location = useLocation()
    // console.log(location)

    const from =location.state?.from?.pathname || '/'

    const handleLoginWithMail=event=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        console.log(email, password)

        setError('');
        setSuccess('');
        

        signInUser(email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            form.reset();
            setSuccess('User login successful.');
            setError('');
            navigate(from, {replace: true})

        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(error)
        });
    }

    const handleGoogleSignIn=()=>{
    googleSign()
    .then((result) => {
        const loggedUser= result.user;
        console.log(loggedUser)
        navigate(from, {replace: true})
        })
        .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        });
    }


    return (
        <div className="min-h-screen bg-white md:flex justify-around">
            <div className='w-1/2'><img className='' src="https://tailwindcomponents.com/svg/secure-login-animate.svg" alt="" /></div>
            <div className="md:mr-10 hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-red-500">
                <form  onSubmit={handleLoginWithMail} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required=""/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="bg-gray-50 flex border border-gray-300 rounded-lg">
                            <input type={show ? "text" : "password"} name="password" id="password" placeholder="password" className="input input-bordered block w-full" required=""/>
                            <button onClick={()=> setShow(!show)} type="button" className="px-2">
                                {
                                    show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </button>
                        </div>
                        <label className="label">
                            <Link className="text-sm font-medium text-primary-600 hover:underline" to="/login">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn my-btn">Login</button>
                    </div>
                    <div className="flex flex-col">
                       <div className="relative py-2">
                           <div className="absolute inset-0 flex items-center">
                               <div className="w-full border-b border-gray-300">
                               </div>
                           </div>
                          <div className="relative flex justify-center">
                               <span className="bg-white px-4 text-sm text-gray-500">Or login with</span>
                           </div>
                       </div>
                       <div className="flex justify-center mt-2">
                            <button onClick={handleGoogleSignIn} className="flex items-center text-white px-4 bg-secondary py-2.5 t-medium rounded-lg text-sm hover:bg-red-500"><FaGoogle className='mr-1'></FaGoogle> Google</button>
                        </div>      
                    </div>
                    <p className="text-sm font-light text-gray-500">Don’t have an account yet? 
                        <Link className="ml-2 font-medium text-primary-600 hover:underline" to="/signup">Sign up</Link>
                    </p>  
                    <div className="bg-white alert alert-error">
                        <div>
                            <span className="text-red-500">{error}</span>
                            <span><p className='text-green-600'>{success}</p></span>
                        </div>
                    </div>  
                </form>
                </div>
                <div className="text-center lg:text-left">
                    <img src='' alt="" />
                </div>
            </div>
        </div>
    );
};

// https://tailwindcomponents.com/svg/secure-login-animate.svg

export default Login;