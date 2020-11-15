import React, { Component } from 'react'

export default class SonComp extends Component {
    state = {
        num: 1
    }
    constructor(){
        super();
        console.log('constructor', '组件诞生');
    }
    handleClick = () => {
        this.setState((cur) => ({
            num: cur.num + 1
        }))
    }
    componentWillMount(){
        console.log('componentWillMount', '组件即将被挂载');
        // 可以使用setState,但是尽量不要用
        // this.setState({
        //     num: this.state.num+2
        // })
    }
    componentDidMount() {
        console.log('componentDidMount', '组件挂载完成');
        // 一般在这里进行ajax请求
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', '组件接收属性改变', this.props, nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', '组件是否应该被更新', nextProps, nextState);
        // 可以在这里进行性能优化,
        // return true则更新,false则不更新,返回值将被转为布尔值,不能返回undefined
        if(nextProps.num === this.props.num && nextState.num === this.state.num){
            return false;
        }
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', '组件即将被更新');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', '组件更新完毕');
        // 可以在这里做一些dom操作
    }
    componentWillUnmount() {
        // 只有在组件在虚拟dom中被移除的时候才会触发
        console.log('componentWillUnmount', '组件即将被销毁');
        // 可以在这里做一些清除定时器的操作
    }
    render() {
        console.log('render')
        // render中禁止使用setState(),会导致无限递归
        return (
            <div>
                <button onClick={this.handleClick}>+</button>
               {this.state.num} 
            </div>
        )
    }
}
