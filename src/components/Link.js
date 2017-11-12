import React, { Component } from 'react';

class Link extends Component {
    render() {
        const props = this.props;

        if (props.active) {
            return <span>{props.children}</span>
        }

        return (
            <a
                href='#'
                onClick={e => {
                    e.preventDefault();
                    props.onClick();
                }}
            >
                {props.children}
            </a>
        );
    }
}

export default Link;