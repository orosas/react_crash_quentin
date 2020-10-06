import React, { Component } from 'react'

export default class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>
                    Hello {this.props.name}!
                </h1>
            </div>
        )
    }
}

// Nota: Continuar 21:40 
// https://youtu.be/mACw_G-okPE
