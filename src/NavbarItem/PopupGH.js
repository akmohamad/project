import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Col, Row } from 'react-bootstrap';
import styles from "./PopupGH.module.css"

class PopupGH extends Component {
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
                <a value="Open" onClick={() => this.openModal()} >قوانین و شرایط</a>
                <Modal visible={this.state.visible} width="560" height="400" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <p className={styles.p1}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                        <br />
                        <Row>
                            <Col className={styles.rightt} >
                                <input type='checkbox' />
                                <p className={styles.pp}>قوانین را می پذیرم</p>
                            </Col>
                                <hr />
                        </Row>

                        <p className={styles.p1}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        <br />
                        <Row>
                            <Col className={styles.rightt} >
                                <input type='checkbox' />
                                <p className={styles.pp}>قوانین را می پذیرم</p>
                            </Col>
                        </Row>
                            <button className={styles.btnn} href="javascript:void(0);" onClick={() => this.closeModal()}>ثبت</button>
                    </div>
                </Modal>
            </section>
        );
    }
}

export default PopupGH;