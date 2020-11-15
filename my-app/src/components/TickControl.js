import React, { Component } from 'react'
import Tick from './Tick';
export default class TickControl extends Component {
    state = {
        over: false
    };
    handleClick(){
        console.log(this)
    }
    handleOver = () => {
        console.log(this);
        this.setState({
            over: true
        })
    }
    render() {
        let state = "正在计时";
        if(this.state.over){
            state = '计时结束';
        }
        return (
            <>
                <Tick onOver={this.handleOver} onClick={this.handleClick} tick={5}/>
                <p>{state}</p>
            </>
        )
    }
}

