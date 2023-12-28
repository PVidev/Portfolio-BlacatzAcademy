import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow py-3 mb-3">
            <Link className="navbar-brand" to="/">|SPA - Евент|</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-dark" to="/">Начало</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/events">Евенти</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export function Footer () {
    return (
        <footer>
            <div className="container p-3 mt-5 border-top">
                <small className="d-block text-muted text-center">&copy; 2023 - Peyo Videv</small>
            </div>
        </footer>
    );
}