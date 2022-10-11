import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import styles from "./Navbar.module.css"

import { Link, Outlet } from "react-router-dom";

import PopupTJ from '../NavbarItem/Popup-t-j';
import PopupE from '../NavbarItem/Popup-e';
import PopupT from '../NavbarItem/PopupT';
import PopupGH from '../NavbarItem/PopupGH';
import PopupKh from '../NavbarItem/PopupKh';
import PopupP from '../NavbarItem/PopupP';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-warning border-bottom fixed-top">
                <a class="navbar-brand">انبارک</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item active">
                            <button>
                                <PopupP />
                            </button>
                        </li>

                        <li class="nav-item">
                            <button>
                                <PopupE />
                            </button>
                        </li>

                        <li class="nav-item">
                            <button>
                                <PopupTJ />
                            </button>
                        </li>

                        <li class="nav-item">
                            <button>
                                <PopupT />
                            </button>
                        </li>

                        <li class="nav-item">
                            <button>
                                <PopupGH />
                            </button>
                        </li>

                        <li class="nav-item">
                            <button>
                                <PopupKh />
                            </button>
                        </li>

                    </ul>
                </div>
                <Outlet />
            </nav>
        );
    }
}

export default Navbar;
