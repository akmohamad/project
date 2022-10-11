import React, { Component } from 'react';
import Item2 from './item2';
import styles from "./item1.module.css"
import MultiButton from './MultiButton';

class Item1 extends Component {

    render() {

        return (
            <div>
                <div class="card my-1">
                    <div class="card-body">
                        <h6 class="card-title">خدمات انبارک</h6>
                        <hr />
                        <Item2 />
                        <hr />
                        <MultiButton />

                    </div>
                </div>
            </div>
        );
    }
}

export default Item1;
