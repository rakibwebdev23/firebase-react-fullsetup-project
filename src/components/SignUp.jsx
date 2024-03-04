import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./Provider/UserProvider";


const SignUp = () => {

    const { userSignUp, googleSignUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignUp = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);

        userSignUp(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            navigate('/signin');
        })
        .catch(error =>{
            console.error(error);
        })
    }

    const handleGoogleSignUp = () =>{
        googleSignUser()
        .then(result =>{
            console.log(result.user);
            navigate('/signin');
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" name="password" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        <p className="text-center">Do you have an account? please <Link to="/signin"><button className="btn btn-active btn-link ml-0">SignIn</button></Link></p>
                    </div>
                    <div>
                        <button onClick={handleGoogleSignUp} className="btn btn-ghost mb-2">Google SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;