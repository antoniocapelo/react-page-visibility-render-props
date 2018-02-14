import React, { Component } from 'react'

import PageVisibility from 'react-page-visibility-render-props'

export default class App extends Component {
  render () {
    return (
        <PageVisibility>
            {(pageVisibility) => {
                console.log(`page is ${pageVisibility}`);

                return (
                    <h1>Page is { pageVisibility }</h1>
                )
            }}
        </PageVisibility>
    )
  }
}
