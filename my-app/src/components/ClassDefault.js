import React, { Component } from 'react'

export default class ClassDefault extends Component {
    static defaultProps = {
        a: 1,
        b: 2
    }
    // 先混入默认属性，然后才进行初始化
    constructor(props){
        console.log(props)
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.a}
                {this.props.b}
            </div>
        )
    }
}
