import React, {
    Component
} from 'react'
import '../assets/css/ball.css'

export default class Ball extends Component {

    constructor(props) {
        super(props);
        this.state = {
            left: props.left || 0,
            top: props.top || 0,
            xSpeed: props.xSpeed || 100,
            ySpeed: props.ySpeed || 50,
            maxLeft: document.documentElement.clientWidth - (props.width || 100),
            maxTop: document.documentElement.clientHeight - (props.width || 100),
        }
        this.move();
    }
    move() {
        const duration = 1000 / 60;
        this.timer = setInterval(() => {
            const xDis = this.state.xSpeed / 1000 * duration;
            let left = this.state.left + xDis;
            let xSpeed = this.state.xSpeed;
            if (left >= this.state.maxLeft) {
                left = this.state.maxLeft;
                xSpeed = -this.state.xSpeed;
            }else if(left <= 0){
                left = 0;
                xSpeed = -this.state.xSpeed;
            }
            const yDis = this.state.ySpeed / 1000 * duration;
            let top = this.state.top + yDis;
            let ySpeed = this.state.ySpeed;
            if (top >= this.state.maxTop) {
                top = this.state.maxTop;
                ySpeed = -this.state.ySpeed;
            }else if(top <= 0){
                top = 0;
                ySpeed = -this.state.ySpeed;
            }
            this.setState({
                left,
                top,
                xSpeed,
                ySpeed
            })
        }, duration)
    }
    render() {
        return ( <div id = "ball"
            style = {
                {
                    top: this.state.top || 0,
                    left: this.state.left || 0,
                    width: this.props.width || 100,
                    height: this.props.width || 100,
                    backgroundColor: this.props.backgroundColor || '#f40'
                }
            } >

            </div>
        )
    }
}