import React, { Component } from 'react'
import CheckboxGroup from './common/CheckboxGroup';
import Select from './common/Select';

export default class Test extends Component {
    state = {
        datas: [
            {
                name: '篮球',
                value: 'basketball'
            },{
                name: '足球',
                value: 'football'
            },
            {
                name: '排球',
                value: 'volleyball'
            }
        ],
        checkeds: ['basketball'],
        selected: 'basketball'
    }
    handleCheckChange = (checkeds, e, val) => {
        this.setState({
            checkeds
        })
    }
    render() {
        return (
            <>
                <CheckboxGroup 
                    datas={this.state.datas}
                    checkeds={this.state.checkeds}
                    onChange={this.handleCheckChange}/>
                <Select 
                    datas={this.state.datas}
                    selected={this.state.selected}
                    onChange={(selected,e) => this.setState({selected})}/>
                <button onClick={() => console.log(this.state.checkeds)}>输出</button>
            </>
        )
    }
}
