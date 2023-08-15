import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer mt-7">
            <div className="containeR">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><Link to="/">about us</Link></li>
                            <li><Link to="/">our services</Link></li>
                            <li><Link to="/">privacy policy</Link></li>
                            <li><Link to="/">affiliate program</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">Pricing</Link></li>
                            <li><Link to="/">Membership</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Connect to people</h4>
                        <ul>
                            <li><Link to="/">Contact Writers</Link></li>
                            <li><Link to="/">Service provider</Link></li>
                            <li><Link to="/">Team calling</Link></li>
                            <li><Link to="/">Resolving errors</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
