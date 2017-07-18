import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><NavLink exact to='/' >Home</NavLink></li>
                        <li><NavLink to='/api/600/takkar/allahabad' >API</NavLink></li>
                    </ul>
                    <Route exact path='/' render={() => <div><span>Home Page</span></div>} />
                    <Route path='/api/:id/:username/:city' component={API} />
                </div>
            </Router>
        )
    }
}

const API = (props) => {
    let { match: { params: { id, username, city } } } = props
    return(
        <div>
            <ul>
                <li><b>ID:</b> {id}</li>
                <li><b>Username:</b> {username}</li>
                <li><b>City:</b> {city}</li>
            </ul>
        </div>
    )
}

export default App