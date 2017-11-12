import React, { Component } from 'react';
import FilterLink from './FilterLink';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions/actions'

class Footer extends Component {
    render() {
        return (
            <p>
                Show:
                {' '}
                <FilterLink filter={SHOW_ALL}>
                    All
                </FilterLink>
                {', '}
                <FilterLink filter={SHOW_ACTIVE}>
                    Active
                </FilterLink>
                {', '}
                <FilterLink filter={SHOW_COMPLETED}>
                    Completed
                </FilterLink>
            </p>
        )
    }
}

export default Footer;