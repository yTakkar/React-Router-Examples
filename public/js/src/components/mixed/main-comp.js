import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, NavLink, Switch } from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><NavLink exact to='/' activeClassName='active' >Home</NavLink></li>
                        <li><NavLink to='/about' activeClassName='active' >About</NavLink></li>
                        <li><NavLink to='/topics' activeClassName='active' >Topics</NavLink></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path='/' render={() => <div><h2>Home Page</h2></div> } />
                        <Route path='/about' component={About} />
                        <Route path='/topics' component={Topics} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const About = (props) => {
    return(
        <div>
            <h2>About Page</h2>
        </div>
    )
}

const Topics = (props) => {
    let { match: { url } } = props
    return(
        <div>
            <h2>Topics Page</h2>
            <ul>
                <li><NavLink activeClassName='active-second' to={`${url}/rendering`} >Rendering with React</NavLink></li>
                <li><NavLink activeClassName='active-second' to={`${url}/components`} >Components</NavLink></li>
                <li><NavLink activeClassName='active-second' to={`${url}/prop-vs-state`} >Prop vs. State</NavLink></li>
            </ul>
            <Route path={`${url}/:topicId`} component={Topic} />
            <Route exact path={`${url}`} render={() => <div><span>Select a topic</span></div> } />
        </div>
    )
}

const Topic = (props) => {
    let { match, match: { params: { topicId } } } = props
    return(
        <div>
            <span>{topicId}</span>
        </div>
    )
}

export default App