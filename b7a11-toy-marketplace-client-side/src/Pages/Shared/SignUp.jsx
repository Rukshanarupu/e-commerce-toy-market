import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';


const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const [error, setError]=useState('')
    const [success, setSuccess]=useState('')
    const [accepted, setAccepted] = useState(false);
    const navigate =useNavigate()
    const location = useLocation()

    const from =location.state?.from?.pathname || '/'

    const handleSignUp=event=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const email=form.email.value
        const photo=form.photo.value
        const password=form.password.value
        const confirmPassword=form.confirmPassword.value
        console.log(name, email, password, confirmPassword, photo)

        setSuccess('')
        setError('')    
        // validation
        if(password !== confirmPassword){
            setError('Password does not match')
            return
        }   
        if(password.length < 6){
            setError('Your password should be at least 6 characters or more')
            return
        }
        
        createUser(email, password)
        .then(result=>{
            const createUser = result.user;
            console.log(createUser);
            updateProfile(createUser, {
                displayName: name, photoURL: photo
            })
            .then(() => {})
            .catch((error) => {console.log(error)});
            form.reset()
            setSuccess('You have been created successfully')
            navigate(from, {replace: true})            
            window.location.reload(true)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            setError(errorMessage)
        });
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-red-500">
                <form  onSubmit={handleSignUp} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required=""/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required=""/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required=""/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="bg-gray-50 flex border border-gray-300 rounded-lg">
                            <input type="password" name="password" id="password" placeholder="••••••••" className="input input-bordered block w-full" required=""/>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <div className="bg-gray-50 flex border border-gray-300 rounded-lg">
                            <input type="password" name="confirmPassword" placeholder="••••••••" className="input input-bordered block w-full" required=""/>
                                                
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start" onClick={handleAccepted}>
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500">I accept the <Link class="font-medium text-primary-600 hover:underline" to="./terms" >Terms and Conditions</Link></label>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button disabled={!accepted} type="submit" className="btn my-btn">Create an Account</button>
                    </div>
                    
                    <p className="text-sm font-light text-gray-500">Already have an account? 
                        <Link class="ml-2 font-medium text-primary-600 hover:underline" to="/login">Login</Link>
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

export default SignUp;