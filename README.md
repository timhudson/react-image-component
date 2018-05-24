react-image-component
=====================

React component to load images with a little finesse. A placeholder is rendered while the image loads. Once loaded the image fill fade in. See http://pugholdit.herokuapp.com for an example.

## Installation
```console
npm install --save react-image-component
```

## Usage
```js
const Image = require('react-image-component')

React.renderComponent(
  <Image
    src={'http://pugholdit.herokuapp.com/500x400.jpg'}
    transition={'opacity 0.6s ease'}
    aspectRatio={0.8}
  />,
  mountNode
)
```
