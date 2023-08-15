import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"
import BlogContext from "../context/BlogContext";

const Navbar = () => {

    let Navigate = useNavigate();
    const Location = useLocation();

    // Api calling to fetch user info

    const context = useContext(BlogContext);
    const { data, fetchUserData } = context;

    useEffect(() => {
        fetchUserData()
        //eslint-disable-next-line
    }, [])


    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    // for user to logout 

    const handleLogout = () => {
        localStorage.removeItem('token');
        Navigate('/login');
        window.location.reload(false);
    }

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <nav
            className="navbar  has-background-navbar "
            role="navigation"
            aria-label="main navigation"
        >
            <div className="font-fam-roboto navbar-brand">
                <Link to="/" className="is-size-4 has-text-weight-bold has-text-white navbar-item nav-logo">
                    <i className="fas fa-blog mr-2"></i>
                    Blogs-Mania
                </Link>

                <Link
                    role="button"
                    className={`navbar-burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded={isActive ? "true" : "false"}
                    onClick={toggleActive}
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </Link>
            </div>

            <div
                id="navbarBasicExample"
                className={`navbar-menu ${isActive ? "is-active" : ""} font-fam-roboto`}
            >
                <div className="navbar-start ml-auto">

                    <Link to="/explore" className={` navbar-item is-size-6 ${Location.pathname === "/explore" ? "active-link" : ""}`}>
                        <i className="fa-sharp fa-solid fa-compass fa-lg mr-2"></i>
                        Explore
                    </Link>

                    {!localStorage.getItem('token') ? '' :

                        <Link to="/blogs" className={` navbar-item is-size-6 ${Location.pathname === "/blogs" ? "active-link" : ""}`}>
                            <i className="fa-sharp fa-solid fa-pen-fancy fa-lg mr-2"></i>
                            Blogs
                        </Link>
                    }

                    <Link to="/general" className={` navbar-item is-size-6 ${Location.pathname === "/general" ? "active-link" : ""}`}>
                        <i className="fa-sharp fa-solid fa-newspaper mr-2 fa-lg"></i>
                        Featured Blogs
                    </Link>

                    <Link to="/services" className={` navbar-item is-size-6 ${Location.pathname === "/services" ? "active-link" : ""}`}>
                        <i className="fa-lg mr-2 fa-sharp fa-solid fa-briefcase"></i>
                        Services
                    </Link>

                    <Link to="/contact" className={` navbar-item is-size-6 ${Location.pathname === "/contact" ? "active-link" : ""}`}>
                        <i className="fa-lg mr-2 fa-sharp fa-solid fa-location-dot"></i>
                        Contact
                    </Link>


                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {!localStorage.getItem('token') ?

                                <div >
                                    <Link className="button is-small is-light is-rounded" to="/signup">
                                        <strong>Sign up</strong>
                                    </Link>
                                    <Link className="button is-small is-light has-text-weight-bold is-outlined is-rounded" to="/login">
                                        Log in
                                    </Link>
                                </div>

                                :
                                <div className="dropdown is-hoverable is-right" >
                                    <div className="dropdown-trigger is-flex is-align-items-flex-end is-justify-content-center">
                                        <button style={{ background: "none", border: "none" }} className="profile-button is-flex is-align-items-center is-justify-content-space-between button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                            <i className="fa-xl fa-sharp fa-solid fa-user" style={{ color: "white" }}></i>
                                        </button>
                                    </div>
                                    <div className="dropdown-menu mr-5 showColor" id="dropdown-menu4" role="menu">
                                        {data.map((user) => {
                                            return (
                                                <div className="dropdown-content font-fam-roboto" key={user.userInfo.username}>
                                                    <Link className="is-size-5 showColor has-text-weight-bold font-fam-roboto has-text-link dropdown-item">
                                                        <i className="fa-sm fa-sharp mr-2 fa-solid has-text-link fa-user"></i>
                                                        {capitalize(user.userInfo.username)}
                                                    </Link>
                                                    <hr className="dropdown-divider" style={{
                                                        height: "4px",
                                                        width: "100%",
                                                        background: "#3813f0"
                                                    }} />
                                                    <Link to="/myprofile" className="dropdown-item is-size-6">
                                                        <i className="fa-sharp fa-solid fa-address-card fa-lg mr-2"></i>
                                                        Your Profile
                                                    </Link>
                                                    <Link to="/" className="dropdown-item is-size-6">
                                                        <i className="fa-sharp fa-solid fa-newspaper fa-lg mr-2 mr-2"></i>
                                                        Your Blogs
                                                    </Link>
                                                    <Link to="/" className="dropdown-item is-size-6">
                                                        <i className="fa-solid fa-credit-card fa-lg mr-2"></i>
                                                        Subscription Billing
                                                    </Link>
                                                    <hr className="dropdown-divider" />
                                                    <Link to="/" className="dropdown-item is-size-6">
                                                        <i className="fa-solid fa-gear fa-lg mr-2 "></i>
                                                        User settings
                                                    </Link>
                                                    <Link onClick={handleLogout} className="dropdown-item logout-hover is-size-6">
                                                        <i className="mr-2 fa-solid fa-arrow-up-from-bracket fa-rotate-270 fa-lg"></i>
                                                        Logout
                                                    </Link>
                                                </div>
                                            )
                                        })}

                                    </div>

                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;