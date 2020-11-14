import React from 'react'

export default class MyClassComp extends React.Component{
    // 这一步react帮你做了
    // constructor(props){
    //     super();//super做的活就是 this.props = props;
    // }
    render(){
        if(this.props.fun){
            return this.props.fun();
        }
        if(this.props.ui){
            return this.props.ui;
        }
        return <h1>类组件: {this.props.age}</h1>
    }
}