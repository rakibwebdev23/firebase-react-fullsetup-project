
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./Provider/UserProvider";



const Header = () => {

        const {user, userSignOut} = useContext(UserContext);

    const navLink = <>

        <li className="font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="font-bold"><NavLink to="/signin">Sign In</NavLink></li>
        <li className="font-bold"><NavLink to="/signup">Sign Up</NavLink></li>
        <li className="font-bold"><NavLink to="/order">Orders</NavLink></li>
        {
            user &&
            <>
            <li className="font-bold"><NavLink to="/profile">Profile</NavLink></li>
            <li className="font-bold"><NavLink to="/dashboard">Dashboard</NavLink></li>
            </>
        }

    </>

    const handleUserSignOut = () => {
        userSignOut()
        .then(() =>{
            console.log("User SignOut successfully");
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Authentication</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span>{user.email}</span>
                        <Link ><button className="btn btn-sm" onClick={handleUserSignOut}>SignOut</button></Link>
                    </> :
                        <Link to="/signin"><button className="btn btn-sm">SignIn</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;