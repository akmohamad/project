import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import styles from './Popup-t-j.module.css'

import { CopyToClipboard } from 'react-copy-to-clipboard';

class PopupTJ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    state = {
        value: '',
        copied: false,
    };

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
            <section >
                <a value="Open" onClick={() => this.openModal()} >تخفیف و جایزه</a>
                <Modal visible={this.state.visible} width="500" height="330" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className={styles.container} >
                        
                        <div className={styles.copyI}>

                            <p>اولین کد تخفیف</p>
                            <input value='FIRST' />
                            <CopyToClipboard text="FIRST"
                                onCopy={() => this.setState({ copied: true })}>
                                <button>Copy</button>
                            </CopyToClipboard>
                            <hr />

                            <p>دومین کد تخفیف</p>
                            <input value="SECOND" />
                            <CopyToClipboard text="SECOND"
                                onCopy={() => this.setState({ copied: true })}>
                                <button>Copy</button>
                            </CopyToClipboard>
                            <hr />
                            
                            <p>سومین کد تخفیف</p>
                            <input value="THIRD" />
                            <CopyToClipboard text="THIRD"
                                onCopy={() => this.setState({ copied: true })}>
                                <button>Copy</button>
                            </CopyToClipboard>
                            <hr />

                            {this.state.copied ? <span style={{ color: 'green' }}>Copied.</span> : null}
                        </div>

                    </div>
                </Modal>
            </section>
        );
    }
}

export default PopupTJ;