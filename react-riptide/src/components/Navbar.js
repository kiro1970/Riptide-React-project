import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-brand btn btn-link text-warning" ><img width={70} src={process.env.PUBLIC_URL +"/RipTide_logo2.png"} alt="Rip Tide Martial Arts" /></button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link active btn btn-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/classes" className="nav-link active btn btn-link">Classes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ranks" className="nav-link active btn btn-link">Ranks</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to="/members" className="nav-link active btn btn-link">Members</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                        <button className="btn btn-outline-light" type="submit">Log In</button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;