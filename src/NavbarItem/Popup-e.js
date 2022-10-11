import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import styles from './Popup-e.module.css'

class PopupE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
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
                <a value="Open" onClick={() => this.openModal()} >افزایش اعتبار</a>
                <Modal visible={this.state.visible} width="550" height="350" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <Row>
                            <Col className={styles.col1} xs={12}>
                                <h5>مبلغ: {<span>0ريال</span>}</h5>
                            </Col>
                            <Col className={styles.labels} xs={3}>
                                <label>مبلغ</label>
                                <br />
                                <label>شماره کارت</label>
                                <br />
                                <label>cvv2</label>
                                <br />
                                <label>رمز دوم</label>
                            </Col>
                            <Col xs={9} className={styles.inputa}>
                                <br />
                                <input type='number' name='mablagh' value='مثال: 20/000 تومن' />
                                <br />
                                <br />
                                <input type='number' name='sh-kart' />
                                <br />
                                <br />
                                <input type='number' name='cvv2' />
                                <br />
                                <br />
                                <div className={styles.buttonIn} >
                                    <input type="text" id="enter" />
                                    <button id="clear">رمز پویا</button>
                                </div>
                                <br />
                            </Col>
                            <Col className={styles.col2}>
                                <button className={styles.btnn} onClick='#'  >ثبت</button>
                            </Col>
                            <Col xs={12}>
                                <div className={styles.box1}>
                                    <p> در صورت کسر شدن وجه از حساب شما و عملیات ناموفق ، شماره پیگیری آن را به 200090 ارسال فرمایید</p>
                                    <a className={styles.aaa} href="javascript:void(0);" onClick={() => this.closeModal()}>خروج</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Modal>
            </section>
        );
    }
}

export default PopupE;