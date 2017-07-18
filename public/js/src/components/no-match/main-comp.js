import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Prompt, Redirect, hashHistory, Switch } from 'react-router-dom'

class App extends Component{
    render(){
        return(
            <Router history={hashHistory} >
                <div>
                    <ul>
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/old-match' >Old match</Link></li>
                        <li><Link to='/new-match' >New match</Link></li>
                        <li><Link to='/also/not-match' >Also will not match</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path='/' render={() => <h1>Home page</h1>} />
                        <Redirect from='/old-match' to='/new-match' />
                        <Route path='/new-match' render={() => <h1>Now matched!</h1>} />
                        {/*ANY ROUTE'S PATH NOT MATCHING URL WILL RENDER BELOW LINE*/}
                        <Route render={() => <h1>No match found!</h1>} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App