import React, { Component } from 'react'
import Validation, {CompB} from './Validation';
import Comp from './Comp';
export default class Test extends Component {
    render() {
        return (
            <>
                <Validation 
                    name="zy" 
                    age={18} 
                    isMarried={true} 
                    learn={() => console.log('learn')}
                    loves={['篮球', '足球']}
                    a={<h1/>}
                    b={<span/>}
                    c={Comp}
                    e={{a:1}}
                    f={{name: 'zy', age: 18}}
                    g={2}
                    h={1}
                    i={new CompB()}
                    j={{name: 'zy', age: 18, sex: '1'}}/>
            </>
        )
    }
}
