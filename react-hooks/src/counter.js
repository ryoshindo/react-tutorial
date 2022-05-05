import React from "react";
import "./styles.css";

const initialState = Math.floor(Math.random() * 10) + 1

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: initialState,
            open: true,
        }
    }

    toggle = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <>
                <button onClick={this.toggle}>
                    {this.state.open ? "close" : "open"}
                </button>
                <div className={this.state.open ? "isOpen" : "isClose"}>
                    <p>現在の数字は {this.state.count} です</p>
                    <button
                        onClick={() => this.setState({ count: this.state.count + 1 })}
                    >
                        +1
                    </button>
                    <button
                        onClick={() => this.setState({ count: this.state.count - 1 })}
                    >
                        -1
                    </button>
                    <button onClick={() => this.setState({ count: 0 })}>0</button>
                    <button onClick={() => this.setState({ count: initialState })}>
                        最初の数値に戻す
                    </button>
                </div>
            </>
        )
    }
}

export default Counter
