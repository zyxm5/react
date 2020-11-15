import React, { Component } from 'react'

export default class MyComp extends Component {
    state = {
        num: 1
    }
    handleClick = () => {
        // 只有在html元素的事件中,setState才是异步执行的,其他情况都同步执行的
        // 第二参数为一个回调函数,在render结束后调用
        // this.setState({
        //     num: this.state.num + 1
        // }, () => {
        //     console.log(this.state.num)
        // })
        // this.setState({
        //     num: this.state.num + 1
        // }, () => {
        //     console.log(this.state.num)
        // })
        // 在多个setState处理中,只有在最后一个setState处理完成后,才会进行render
        // setState中第一个参数为函数时,该函数的参数为当前state的状态对象,该对象是一个可信任对象,即,之前的
        // setState执行完毕后的最新state
        this.setState((cur) => {
            return{
                num: cur.num + 1
            }
        }, () => {
            console.log(this.state.num)
        })
        this.setState((cur) => {
            return{
                num: cur.num + 1
            }
        })
        // setInterval(() => {
        //     this.setState({
        //         num: this.state.num + 1
        //     })
        //     console.log(this.state.num)
        // },1000)
        
    }
    render() {
        console.log('render')
        return (
            <div>
                <button onClick={this.handleClick}>+</button>
               {this.state.num} 
            </div>
        )
    }
}
