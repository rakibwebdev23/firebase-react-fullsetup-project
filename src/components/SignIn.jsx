import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./Provider/UserProvider";


const SignIn = () => {

    const { userSignIn, googleSignUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        userSignIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/');

            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignIn = () =>{
        googleSignUser()
        .then(result =>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">SignIn now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
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
                    <div className="text-center" >
                        <p>New User? Please <Link to="/signup"><button className="btn btn-active btn-link">SignUp</button></Link></p>
                    </div>
                    <div>
                        <button onClick={handleGoogleSignIn} className="btn btn-ghost mb-2">Google SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;