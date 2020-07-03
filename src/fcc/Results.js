import React, { Component } from 'react'

export default class Results extends Component {

    render() {
        return (
            <h1>
                {
                    this.props.fiftyFifty ? "You win!" : "You lose!"
                    /* change code here */
                }
            </h1>
        )
    };
};
