# react-page-visibility-render-props

Simple react wrapper for the [pagevisibility.js package](https://github.com/ai/visibilityjs), using [render props](https://reactjs.org/docs/render-props.html) for better composability.

[![NPM](https://img.shields.io/npm/v/react-page-visibility-render-props.svg)](https://www.npmjs.com/package/react-page-visibility-render-props) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> TODO: Complete the readme.

## Install

```bash
npm install --save react-page-visibility-render-props
```

## Usage

Just pass a function as a child of the `<PageVisibility>` component. This function should have a single parameter, which can be `visible | hidden | prerender` (check [here](https://github.com/ai/visibilityjs#states) for full description). 

```jsx
import React, { Component } from 'react'

import PageVisibility from 'react-page-visibility-render-props'

class Example extends Component {
  render () {
    return (
        <PageVisibility>
            {(pageVisibilityState) => {
                return (
                    <div>Page is { pageVisibilityState } so will act accordingly</div>
                )
            }}
        </PageVisibility>
    )
  }
}
```

## License

MIT © [António Capelo](https://github.com/antoniocapelo)
