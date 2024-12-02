import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="BlackFriday">Black Friday Sportif: 4 Weeks + Free Membership Fees</div>
            <div className="navbarmain">
                <div className="left">
                    <div className="title">CASAFIT</div>
                    <ul>
                        <li>
                            <Link className="link" to="CONCEPT">CONCEPT</Link>
                        </li>
                        <li>
                            <Link className="link" to="SUBSCRIPTIONS">SUBSCRIPTIONS</Link>
                        </li>
                        <li>
                            <Link className="link" to="CLUBS">CLUBS</Link>
                        </li>
                        <li>
                            <Link className="link" to="ACTIVITIES">ACTIVITIES</Link>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <div><Link className="blog" to="BLOG">BLOG</Link></div>
                    <div><Link className="login" to="LOGIN">LOGIN</Link></div>
                    <button><Link className="sing" to="SIGN UP">SIGN UP</Link></button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
