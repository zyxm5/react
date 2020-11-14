import React, { Component } from 'react'

export default class A extends Component {
    state = {
        num: 1
    }
    constructor(){
        super();
        setInterval(() => {
            this.setState({
                num: this.state.num + 1
            })
            // 不要直接修改组件状态
            // this.state.num ++;
            // this.render();
        },1000)
    }
    render() {
        return (
            <B num={this.state.num}/>
        )
    }
}

function B(props){
    return <h2>B组件：{props.num}
    <C num={props.num}/></h2>
}

function C(props){
    return <span>C组件：{props.num}</span>
}
