import React from 'react'
import { BrowserRouter as Router, NavLink, Redirect, Link, Switch, Route } from 'react-router-dom'

const colors = [
    {
        color: 'red',
        to: {
            pathname: '/modal/red',
            state: { modal: true }
        },
        label: 'Red'
    },
    {
        color: 'orange',
        to: {
            pathname: '/modal/orange',
            state: { modal: true }
        },
        label: 'Orange'
    },
    {
        color: 'skyblue',
        to: {
            pathname: '/modal/skyblue',
            state: { modal: true }
        },
        label: 'Skyblue'
    },
    {
        color: 'slategray',
        to: {
            pathname: '/modal/slategray',
            state: { modal: true }
        },
        label: 'Slategray'
    }
]

const App = () => {
    return(
        <Router>
            <div>
                <h1>Please select a color</h1>
                <ul>
                    {
                        colors.map((color, index) => {
                            return <MyLink key={index} label={color.label} to={color.to} color={color.color} />
                        })
                    }
                </ul>
                <Route path='/' exact render={() => <div><span>Please select a color</span></div> } />
                <Route path='/modal/:color' component={Modal} />
            </div>
        </Router>
    )
}

const MyLink = ({label, to, color, ...rest}) => {
    return(
        <li><Link to={to}>{label}</Link></li>
    )
}

const Overlay = () => (
    <div style={ styles.overlay }></div>
)

const Modal = ({ match, history }) => {
    let { params: { color } } = match

    const back = (e) => {
        history.goBack()
    }

    return(
        <div style={styles.apnaModal} >
            <h2>{color}:</h2>
            <div style={{ ...styles.colorModal, background: color }} ></div>
            <button onClick={back} >Back</button>
        </div>
    )
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "#000",
        opacity: .2,
        zIndex: 1,
        width: "100%",
        height: "100%"
    },
    apnaModal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fbfbfb",
        border: "1px solid #eee",
        padding: "10px",
        borderRadius: "4px",
        zIndex: 3,
        boxShadow: "0px 0px 20px 2px rgba(0,0,0,.1)"
    },
    colorModal: {
        background: "orange",
        height: "400px",
        width: "300px",
        marginBottom: "10px"
    }
}

export default App