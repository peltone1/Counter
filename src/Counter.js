import React from 'react'


class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }
    componentDidMount() {
        const lastState = JSON.parse(localStorage.getItem('counter-homework')) || this.state
        this.setState(lastState)
    }



    incHandler = () => {
        const number = {
            number: this.state.number + 1
        }
        this.setState({
            number: this.state.number + 1
        })
        localStorage.setItem('counter-homework', JSON.stringify(number))

    }
    decHandler = () => {
        const number = {
            number: this.state.number - 1
        }
        this.setState({
            number: this.state.number - 1
        })
        localStorage.setItem('counter-homework', JSON.stringify(number))
    }
    incFiveHandler = () => {
        const number = {
            number: this.state.number + 5
        }
        this.setState({
            number: this.state.number + 5
        })
        localStorage.setItem('counter-homework', JSON.stringify(number))
    }
    decFiveHandler = () => {
        const number = {
            number: this.state.number - 5
        }
        this.setState({
            number: this.state.number - 5
        })
        localStorage.setItem('counter-homework', JSON.stringify(number))
    }
    resetCounter = () => {
        const number = {
            number: this.state.number * 0
        }
        this.setState({
            number: this.number = 0
        })
        localStorage.setItem('counter-homework', JSON.stringify(number))
    }

    render() {

        return ( <
            div >
            <
            div >
            <
            h1 > {
                this.state.number
            } < /h1> <
            button onClick = {
                this.incHandler
            } >
            +1 <
            /button> <
            button onClick = {
                this.decHandler
            } >
            -1 <
            /button> <
            /div> <
            div >
            <
            button onClick = {
                this.incFiveHandler
            } >
            +5 <
            /button> <
            button onClick = {
                this.decFiveHandler
            } >
            -5 <
            /button> <
            /div> <
            div >
            <
            button onClick = {
                this.resetCounter
            } >
            Reset <
            /button> <
            /div> <
            /div>
        )
    }
}


export default Counter