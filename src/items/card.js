import React, { Component } from 'react';
import styles from './card.module.css'


class Card extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }

    downHandler = () => {
        if (this.state.counter >= 1) {
            this.setState(prevState => ({
                counter: prevState.counter - 1,
            }))
        }
    }
    upHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
    }

    render() {
        const {image, name, cost} = this.props;
        const {counter} = this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="photos" />
                <h3>{name}</h3>
                <p>{cost}</p>

                <div className={styles.counter}>
                    <img className={this.state.counter ? "" : styles.deActive} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTJcFlsBfqUCoIgpxNP0CGdNKZL6tDd-maA&usqp=CAU"
                        alt='arrow' onClick={this.downHandler} />
                    <span>{counter}</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTJcFlsBfqUCoIgpxNP0CGdNKZL6tDd-maA&usqp=CAU" alt='arrow' className={styles.img30} onClick={this.upHandler} />

                </div>
            </div>
        );
    }
}

export default Card;
