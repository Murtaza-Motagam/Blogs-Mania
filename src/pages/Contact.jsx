import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <section className="hero is-fullheight font-fam-roboto">
                <div className="hero-body ">
                    <div className="container has-text-centered">
                        <div className="columns is-8 is-variable ">
                            <div className="column is-two-thirds has-text-left">
                                <h1 className="title is-1">Contact Us</h1>
                                <p className="is-size-4 my-2">Write down your queries and send it to our team to have look into it..</p>
                                <div className="social-media">
                                    <Link to="https://facebook.com" target="_blank" className="button is-light is-large"><i className="fa fa-facebook-square" aria-hidden="true"></i></Link>
                                    <Link to="https://instagram.com" target="_blank" className="button is-light is-large"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                                    <Link to="https://twitter.com" target="_blank" className="button is-light is-large"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            <div className="column is-one-third has-text-left bs-1 border-r-1 p-6">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input className="input is-medium" placeholder='Enter your Name' type="text"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input is-medium" placeholder='Enter your email' type="text"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Message</label>
                                    <div className="control">
                                        <textarea className="textarea is-medium" placeholder='Type your message'></textarea>
                                    </div>
                                </div>
                                <div className="control">
                                    <button type="submit" className="font-fam-roboto button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
