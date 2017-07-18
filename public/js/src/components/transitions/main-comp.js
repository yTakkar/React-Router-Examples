import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt,
  Redirect
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Form</Link></li>
        <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
      </ul>
      <Route path="/" exact component={Form}/>
      <Route path="/one" render={() => <h3>One</h3>}/>
      <Route path="/two" component={Two}/>
    </div>
  </Router>
)

const Two = (props) => {
    let { location: { pathname } } = props
    return(
        <div>
            <Redirect
                to={{
                    pathname: '/',
                    search: '?ask=posts&id=190',
                    state: { referrer: pathname }
                }}
            />
            <h3>Two</h3>
        </div>
    )
}

class Form extends React.Component {

  state = {
    isBlocking: false
  }

  forBtn = (e) => {
      e.preventDefault()
      e.target.reset()
      this.setState({ isBlocking: false })
  }

  forText = (e) => {
      this.setState({
          isBlocking: e.target.value.length > 0
      })
  }

  render(){
      let {isBlocking} = this.state
      return(
          <form onSubmit={this.forBtn} >
              <Prompt
                when={isBlocking}
                message={location => `Are you sure you want to go ${location.pathname}`}
              />
            <p>
                isBlocking? { isBlocking ? 'Yes, click a link or the back button' : 'Nope' }
            </p>
            <input 
                size="50"
                placeholder="Type something to block transition.."
                onChange={this.forText}
             />
             <br/>
             <input type="submit" value="Submit to stop blocking" />
          </form>
      )
  }

}

export default App