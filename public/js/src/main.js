import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, hashHistory } from 'react-router-dom'

// COMMENT ALL THE FILES AND THEN UNCOMMENT THE FILE YOU WANNA RENDER

import App from './components/modal/main-comp'
// import App from './components/active-classname/main-comp'
// import App from './components/animation/main-comp'
// import App from './components/mixed/main-comp'
// import App from './components/no-match/main-comp'
// import App from './components/params/basic-comp'
// import App from './components/practice/main-comp'
// import App from './components/sidebar/main-comp'
// import App from './components/transitions/main-comp'
// import App from './react-practice'

ReactDOM.render(<App/>, document.getElementById('root'))