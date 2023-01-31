import PropTypes from 'prop-types';
import { Component, ReactNode } from 'react';

/**
 * Validating properties in React helpt to ensure components receive the correct data and that they behave as expected.
 * 
 * This can be done using PropTypes
 */

class Greeting extends Component<{name:string}>{
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render(): ReactNode {
        return <h1>Hello, {this.props.name}</h1>
    }
}

/**
 * The `name` prop is required to be a string. If you pass a non-string value to the `name` prop, you will get a warning from the console.
 * 
 * Validating props in this way can help you catch mistakes early and make your code more robust.
 */
