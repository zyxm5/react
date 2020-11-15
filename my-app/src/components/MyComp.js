import React, { Component } from 'react'
import SonComp from './SonComp';

export default class MyComp extends Component {
    state = {
        num : 1,
        show: true
    }
    handleClick = () => {
        this.setState((state) => ({
            num: state.num + 1
        }))
    }
    render() {
        const cmp = this.state.show ? <SonComp num={this.state.num}/> : ''
        return (
            <div>
                {cmp}
                <button onClick={this.handleClick}>改变属性</button>
                {this.state.num} 
                <button onClick={() => {this.setState((cur) => ({show: !cur.show}))}}>显示/隐藏</button>
            </div>
        )
    }
}
