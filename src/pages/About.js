import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import Footer from '../Components/Footer/Footer';

/**
* @author
* @function About
**/

const About = (props) => {
    return (
        <div>
            <div className="container">
                <div className="title text-left">About us</div>
                <div className="title text-left">Matt Oliver – Chief Tour Guide and Owner of Bike Tours Victoria</div>
                <p >I’m a small town boy from rural Ontario who fell in love with the West Coast over 10 years ago, I returned to bike riding which was a childhood passion of mine. That led to introducing international and local visitors to experiences that became much-loved stories shared on facebook.   <br />
            As it turns out, I got pretty good at touring people around by bike because I was nominated for a Vancouver Tourism Award in 2014. <br />
            Today as a unique and boutique bike tour business owner and operator, I collaborate and partner with Victoria’s sweetest people whose work is their art. I create and guide genteel adventures by bike. My favorite thing to do is surprise guests with something a little unexpected that they wouldn’t have found or thought of on their own.   </p>
            </div>
            <div className="contact-us">
                <div className="title text-left">Contact us</div>
                <form action="">
                    <div className="form-group row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <textarea type="text" className="form-control" placeholder="Message" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )

}

export default About