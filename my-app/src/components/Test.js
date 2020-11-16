import React, { Component } from 'react'
import CheckboxGroup from './common/CheckboxGroup';
import Select from './common/Select';
export default class Test extends Component {
    state = {
        checkeds: [],
        selected: ''
    }
    handleChange = (checkeds) => {
        this.setState({
            checkeds
        })
    }
    handleSelectChange = (selected) => {
        this.setState({
            selected
        })
    }
    render() {
        return (
            <>
                <CheckboxGroup checkeds={this.state.checkeds} onChange={this.handleChange}/>
                <Select selected={this.state.selected} onChange={this.handleSelectChange}/>
            </>
        )
    }
}
