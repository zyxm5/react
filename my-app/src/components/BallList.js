import React, { Component } from 'react'
import Ball from './Ball';
import { getRandom } from './utils';
export default class BallList extends Component {
    constructor(props){
        super(props);
        this.state = {
            ballListInfo: []
        }
        this.timer = setInterval(() => {
            const width = getRandom(50,150);
            const left = getRandom(0,document.documentElement.clientWidth - width);
            const top = getRandom(0,document.documentElement.clientHeight - width);
            const xSpeed = getRandom(1,100);
            const ySpeed = getRandom(1,100);
            const backgroundColor = `rgba(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)},${Math.random()})`
            console.log(backgroundColor)
            const ballInfo = {
                width,
                left,
                top,
                xSpeed,
                ySpeed,
                backgroundColor
            }
            this.setState({
                ballListInfo: this.state.ballListInfo.concat(ballInfo)
            })
            if(this.state.ballListInfo.length === 100){
                clearInterval(this.timer);
            }
        }, 1000)
    }
    render() {
        const ballList = this.state.ballListInfo.map((ball, i) => <Ball key={i} {...ball}/>)
        return (
            <>
                {ballList}
            </>
        )
    }
}
