import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

import styles from "./PopupP.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';

class PopupP extends Component {
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
                <a value="Open" onClick={() => this.openModal()}>پروفایل</a>
                <Modal visible={this.state.visible} width="500" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <Row>
                            <Col xs={4} className={styles.radif1} >
                                <label>نام و نام خانوادگی</label>
                                <br />
                                <label>نام کاربری</label>
                                <br />
                                <label>ایمیل</label>
                                <br />
                                <label>کد تایید</label>
                            </Col>

                            <Col className={styles.inputs} xs={8} >
                                <br />
                                <input type="text" name='name' />
                                <br />
                                <br />
                                <input type="text" name='user-name'/>
                                <br />
                                <br />
                                <input type="email" name="e-mail" />
                                <br />
                                <br />
                                <input type="number" name='taeed' />
                                
                            </Col>
                            <Col className={styles.vorod} xs={6}>
                                <button className={styles.trapezoid}>
                                    <span>Login</span>
                                </button>
                            </Col>
                            <Col className={styles.vorod}  xs={6}>
                                <button className={styles.trapezoidd}>
                                    <span>Signup</span>
                                </button>
                            </Col>
                            <Col xs={12}>
                                <a className={styles.aaa} href="javascript:void(0);" onClick={() => this.closeModal()}>خروج</a>
                            </Col>
                        </Row>
                    </div>
                </Modal>
            </section>
        );
    }
}

export default PopupP;