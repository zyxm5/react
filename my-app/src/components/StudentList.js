import React, { Component } from 'react'
import Student from './Student';

export default class StudentList extends Component {
    render() {
        const stus = this.props.stus.map((stu, index) => <Student {...stu} key={index}/>)
        return (
            <ul>
                {stus}  
            </ul>
        )
    }
}
