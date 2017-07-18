import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, NavLink, Switch } from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <Router>
                <Route path='/' component={Main} >
                    <Route path='/home' render={() => <div><h1>Home</h1></div> } />
                    <Route path='/list' render={() => <div><h1>List</h1></div> } />
                </Route>
            </Router>
        )
    }
}

class Main extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><NavLink to='/' exact >Home</NavLink></li>
                    <li><NavLink to='/list' >List</NavLink></li>
                </ul>
                <hr/>
                { this.props.children }
            </div>
        )
    }
}

export default App