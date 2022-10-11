import React, { Component } from 'react';
import styles from './App.css';
import Navbar from './components/Navbar';
import Item1 from './items/item1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PopupP from './NavbarItem/PopupP';
import PopupE from './NavbarItem/Popup-e';
import PopupTJ from './NavbarItem/Popup-t-j';
import PopupT from './NavbarItem/PopupT';
import PopupGH from './NavbarItem/PopupGH';
import PopupKh from './NavbarItem/PopupKh';

import Cards from './items/cards'

class App extends Component {
    render() {
        return (
            <Container fluid className={styles.container}>

                <Row>
                    <Col xs={12}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Navbar />}>
                                    <Route path="profile" element={<PopupP />} />
                                    <Route path="etebar" element={<PopupE />}>
                                        <Route path="takhfif" element={<PopupTJ />} />
                                        <Route path="tanzimat" element={<PopupT />} />
                                        <Route path="ghavanin" element={<PopupGH />} />
                                        <Route path="darbare" element={<PopupKh />} />
                                    </Route>
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </Col>
                        
                </Row>
                
                <Row>
                    <Col>
                        <Item1 />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <Cards />
                    </Col>
                </Row>

            </Container>
        );
    }
}
export default App;
