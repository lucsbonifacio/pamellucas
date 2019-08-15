import React, { Component } from 'react';
import './modal.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.visible = this.props.show;
    }

    render() {
        return (
            <div className={this.props.show ? `modal is--visible` : `modal is--hidden`}>
                <button className="button--close" onClick={this.props.onClose}>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path id="path-1" d="M100 10 90 0 50 40 10 0 0 10 40 50 0 90 10 100 50 60 90 100 100 90 60 50z"></path>
                    </svg>                
                </button>
                <div className="modal__container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}