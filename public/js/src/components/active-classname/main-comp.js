import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, hashHistory, Route } from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <div>
                <ul>
                    <li><ActiveClass to='/' label='Home' active={true} /></li>
                    <li><ActiveClass to='/users' label='Users' /></li>
                    <li><ActiveClass to='/about' label='About' /></li>
                </ul>
                <hr/>
                <Route path='/' exact component={Home} />
                <Route path='/users' component={Users} />
                <Route path='/about' component={About} />
            </div>
        </Router>
    )
}

const ActiveClass = ({ to, label, active }) => {
    return(
        <Route path={to} exact={active} children={({match}) => (
            <div className={ match ? 'active' : '' } >
                { match ? '>' : '' }
                <Link to={to} >{label}</Link>
            </div>    
        )} />
    )
}

const Home = () => {
    return(
        <div>
            <span>Home Page</span>
        </div>
    )
}

const Users = () => {
    return(
        <div>
            <span>User Page</span>
        </div>
    )
}

const About = () => {
    return(
        <div>
            <span>About Page</span>
        </div>
    )
}

module.exports = App