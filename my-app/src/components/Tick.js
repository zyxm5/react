import React, { Component } from 'react'

export default class Tick extends Component {
    constructor(props){
        super(props);
        this.state = {
            tick: props.tick,
            over: false
        }
        this.timer = setInterval(() => {
            this.setState({
                tick: this.state.tick - 1
            })
            if(this.state.tick === 0){
                clearInterval(this.timer);
                props.onOver && this.props.onOver();
            }
        },1000)
    }
    render() {
        return (
            <div onClick={this.props.onClick}>
                倒计时： {this.state.tick}
            </div>
        )
    }
}
