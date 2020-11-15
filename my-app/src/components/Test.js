import React, { Component } from 'react'
import ThreeLayout from './common/ThreeLayout';

export default class Test extends Component {
    render() {
        return (
            <div>
                <ThreeLayout left={'左侧区域内容'} right={'右侧区域内容'}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia harum eveniet doloribus temporibus, eaque, nisi ex debitis quisquam assumenda repudiandae architecto. Magnam sunt, distinctio consectetur cum exercitationem asperiores esse?
                    </p>
                </ThreeLayout>
            </div>
        )
    }
}
