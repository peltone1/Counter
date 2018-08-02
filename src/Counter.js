import React from 'react'
 class Counter extends React.Component {
    state = {
            number: 0,
        
        }
        incHandler = () => {
            this.setState({
                number: this.state.number + 1
            })
        }
        decHandler = () => {
            this.setState({
                number: this.state.number - 1
            })
        }
        incFiveHandler = () => {
            this.setState({
                number: this.state.number + 5
            })
        }
        decFiveHandler = () => {
            this.setState({
                number: this.state.number - 5
            })
        }
        resetCounter = () => {
            this.setState({
              number: this.state.startCounter = 0
            })
          }
    
    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.number}</h1>
                    <button onClick={this.incHandler}>
                    +1
                    </button>
                    <button onClick={this.decHandler}>
                    -1
                    </button>
                </div>
                <div>
                    <button onClick={this.incFiveHandler}>
                    +5
                    </button>
                    <button onClick={this.decFiveHandler}>
                    -5
                    </button>
                </div>
                <div>
                    <button onClick={this.resetCounter }>
                    Reset
                    
                    </button>
                
                </div>
              
            </div>
        )
    }
}

export default Counter