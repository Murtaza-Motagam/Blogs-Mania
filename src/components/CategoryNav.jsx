import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CategoryNav = () => {

    const location = useLocation();
    return (
        <div className="container my-6 font-fam-roboto">
            <div className="tabs is-centered ">
                <ul>
                    <li>
                        <Link  to='/general' className={`hover-category-links ${location.pathname === '/general' ? 'active-link2' : ''}`}>
                            <span className="icon is-small"></span>
                            <span className="is-size-5">All</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`hover-category-links ${location.pathname === '/science' ? 'active-link2' : ''}`} to="/science">
                            <span className="icon is-small"><i className="fas fa-sharp fa-solid fa-flask"></i></span>
                            <span className="is-size-5">Science</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`hover-category-links ${location.pathname === '/social' ? 'active-link2' : ''}`} to="/social">
                            <span className="icon is-small"><i className="fas fa-solid fa-people-arrows"></i></span>
                            <span className="is-size-5">Social</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`hover-category-links ${location.pathname === '/technology' ? 'active-link2' : ''}`} to="/technology">
                            <span className="icon is-small"><i className="fa-solid fa-microchip fa-lg"></i></span>
                            <span className="is-size-5">Technology</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`hover-category-links ${location.pathname === '/political' ? 'active-link2' : ''}`} to="/political">
                            <span className="icon is-small"><i className="fas fa-sharp fa-solid fa-landmark"></i></span>
                            <span className="is-size-5">Political</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`hover-category-links ${location.pathname === '/food' ? 'active-link2' : ''}`} to="/food">
                            <span className="icon is-small"><i className="fas fa-sharp fa-solid fa-landmark"></i></span>
                            <span className="is-size-5" >Food and Drinks</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`hover-category-links ${location.pathname === '/entertainment' ? 'active-link2' : ''}`} to="/entertainment">
                            <span className="icon is-small"><i className="fas fa-sharp fa-solid fa-landmark"></i></span>
                            <span className="is-size-5">Entertainment</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`hover-category-links ${location.pathname === '/cultural' ? 'active-link2' : ''}`} to="/cultural">
                            <span className="icon is-small"><i className="fas fa-solid fa-cross"></i></span>
                            <span className="is-size-5">Cultural</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`hover-category-links ${location.pathname === '/education' ? 'active-link2' : ''}`} to="/education">
                            <span className="icon is-small"><i className="fas fa-regular fa-school"></i></span>
                            <span className="is-size-5">Education</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default CategoryNav
