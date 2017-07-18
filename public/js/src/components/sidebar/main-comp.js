import React from 'react'
import { BrowserRouter as Router, Route, Link, hashHistory, Redirect, Prompt } from 'react-router-dom'
import uuid from 'uuid/v4'

const routes = [
    { 
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>,
        id: uuid()
    },
    { 
        path: '/bubblegum',
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>,
        id: uuid()
    },
    { 
        path: '/shoelaces',
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>,
        id: uuid()
    }
]

const divStyle = {
    padding: '10px',
    width: '40%',
    background: '#f0f0f0'
}

const sDivStyle = {
    flex: 1,
    padding: '10px'
}

const listStyle = {
    listStyleType: 'none',
    padding: 0
}

class App extends React.Component{
    render(){
        return(
            <Router history={hashHistory} >
                <div style={{ display: 'flex' }} >

                    <div style={divStyle} >
                        <ul style={listStyle}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/bubblegum">Bubblegum</Link></li>
                            <li><Link to="/shoelaces">Shoelaces</Link></li>
                        </ul>
                        {
                            routes.map((route) => {
                                return <Route 
                                    key={route.id} 
                                    path={route.path} 
                                    component={route.sidebar}
                                    exact={route.exact}
                                />
                            })
                        }
                    </div>

                    <div style={sDivStyle} >
                        {
                            routes.map((route) => {
                                return <Route
                                    key={route.id} 
                                    path={route.path} 
                                    component={route.main} 
                                    exact={route.exact}
                                />
                            })
                        }
                    </div>

                </div>
            </Router>
        )
    }
}

export default App