import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import styles from './PopupT.module.css'

import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { Col, Container, Row } from 'react-bootstrap';

import Dropdown from 'react-bootstrap/Dropdown';


class PopupT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }
    

    render() {

        return (
            <section>
                <a value="Open" onClick={() => this.openModal()} >تنظیمات</a>
                <Modal visible={this.state.visible} width="530" height="420" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>

                        <br />
                        <Row>
                            <Col className={styles.right}  >
                                <p>تم (تیره یا روشن)</p>
                            </Col>
                            <Col className={styles.left}  >
                                <SwitchComponent />
                            </Col>
                        </Row>

                        <hr />
                        <Row>
                            <Col className={styles.right}  >
                                <p>نوتیفیکیشن</p>
                            </Col>
                            <Col className={styles.left}  >
                                <SwitchComponent />
                            </Col>
                        </Row>

                        <hr />
                        <Row>
                            <Col className={styles.right}  >
                                <p>صدا</p>
                            </Col>
                            <Col className={styles.left}  >
                                <SwitchComponent />
                            </Col>
                        </Row>

                        <hr />
                        <Row>
                            <Col className={styles.right}  >
                                <p>امتیاز</p>
                            </Col>
                            <Col className={styles.left}  >
                                <p>0 امتیاز</p>
                            </Col>
                        </Row>

                        <hr />
                        <Row>
                            <Col className={styles.right}  >
                                <p>زبان</p>
                            </Col>
                            <Col className={styles.left}  >
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic"></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">فارسی</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Turkish</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>

                    </div>
                </Modal>
            </section>
        );
    }
}

export default PopupT;