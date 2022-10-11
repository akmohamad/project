import React, { Component } from 'react';
import styles from './cards.module.css';
import Card from './card';


class Cards extends Component {
    render() {
        return (
            <div className= {styles.container}>
                <Card image="https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?w=740&t=st=1665464905~exp=1665465505~hmac=8ad4040af1a978ca7858e9e1d4160bd087bb025c2d3b0859d1ef26224a257e46" name="آیتم1" cost= "4.2m $" />
                <Card image="https://img.freepik.com/free-vector/mountain-lake-sunset-landscape-realistic-tree-forest-mountain-silhouettes-evening-wood-panorama-illustration-wild-nature-background_1150-39419.jpg?w=740&t=st=1665464941~exp=1665465541~hmac=a5eec58bdd9cad53545d2ca60a11694461bc6c02772524a88e9440d14c12b4c7" name="آیتم2" cost= "3.9m $" />
                <Card image="https://img.freepik.com/free-vector/green-mountains-landscape-background_52683-24000.jpg?w=740&t=st=1665464428~exp=1665465028~hmac=40f93a634760602cf0eab87c15dfae13c6d07c858d792ce4309c3e7488352391" name="آیتم3" cost= "3.5m $" />
                <Card image="https://img.freepik.com/free-vector/mountains-landscape-with-high-peaks_52683-24163.jpg?w=740&t=st=1665464948~exp=1665465548~hmac=d5fe450263c984e559c84a40e26f1249bb0967df6d3b1a9654b57bc13041071d" name="آیتم4" cost= "2.8m $" />
            </div>
        );
    }
}

export default Cards;
