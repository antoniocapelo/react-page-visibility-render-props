/**
 * @class PageVisibility
 */

import { Component } from 'react'
import Visibility from 'visibilityjs'
import PropTypes from 'prop-types'

export default class PageVisibility extends Component {
    static propTypes = {
        children: PropTypes.func.isRequired,
    }

    state = {
        pageVisibility: 'visible',
    }

    componentDidMount() {
        Visibility.change((e, pageVisibility) => this.setState({ pageVisibility }));
    }

    render() {
        return this.props.children(this.state.pageVisibility);
    }
}
