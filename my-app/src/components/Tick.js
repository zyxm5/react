import React, { Component } from 'react'

export default class Tick extends Component {
    // 也可以使用这种方式初始化
    state = {
        tick: this.props.tick
    }
    constructor(props){
        super(props);
        // 组件状态必须初始化
        // this.state = {
        //     tick: props.tick
        // }
        this.timer = setInterval(() => {
            this.setState({
                tick: this.state.tick - 1
            });
            if(this.state.tick === 0){
                clearInterval(this.timer);
            }
        },1000)
    }
    render() {
        return (
            <div>
               倒计时：{this.state.tick} 
            </div>
        )
    }
}
