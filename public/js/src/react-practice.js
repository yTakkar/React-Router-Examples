import React from 'react'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const styles = {
    main: {
        margin: 5
    },
    button: {
        display: "block"
    },
    boxes: {
        background: "red",
        width: 100,
        height: 100,
        borderRadius: 3,
        float: "left",
        display: "inline-block",
        marginRight: 5,
        marginTop: 5,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 600,
        color: "#fff"
    }
}

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            boxes: [1,2,3]
        }

    }

    addBox = () => {
        let { boxes } = this.state
        boxes.push(boxes.length+1)
        this.setState({
            boxes
        })
    }

    removeBox = (box) => {
        let { boxes } = this.state
        let remainder = boxes.filter((elem) => {
            return elem !== box
        })
        this.setState({ boxes: remainder })
    }

    render(){
        return(
            <div style={styles.main} >
                <button style={styles.button} onClick={this.addBox} >Add Item</button>
                <div>
                    <CSSTransitionGroup 
                        transitionName="example"
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={300}
                    >
                        {
                            this.state.boxes.map((box) => {
                                return <Box st={styles.boxes} key={box} box={box} dlt={this.removeBox} />
                            })
                        }
                    </CSSTransitionGroup>
                </div>
            </div>
        )
    }

}

App.propTypes = {
    name: PropTypes.string.isRequired
}

class Box extends React.Component{
    render(){
        let { st, box, dlt } = this.props
        return(
            <div key={box} style={st} onClick={() => dlt(box)} >{box}</div>
        )
    }
}

export default App