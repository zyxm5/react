import React, { Component } from 'react'
import Modal from './common/Modal';

export default class Test extends Component {
    state = {
        showModal: true
    }
    closeModal = () => {
        this.setState({
            showModal: false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.showModal ? <Modal onClick={this.closeModal} bgColor={'rgba(255,0,0,.3)'}>
                        <div style={{backgroundColor:'#fff', width: 500, height: 200}}>
                            asdfasfasdfasf
                            <button onClick={ this.closeModal }>关闭</button>
                        </div>
                    </Modal> : null
                }
                
            </div>
        )
    }
}
