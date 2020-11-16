import React from 'react'
import PropsType from 'prop-types';

export class CompA{}
export class CompB extends CompA{}
export default function Validation(props) {
    console.log(props.i)
    const C = props.c;
    return (
        <div>
            <p>
                姓名：{props.name}
            </p>
            <p>
                年龄：{props.age}
            </p>
            <p>
                是否已婚：{props.isMarried ? '是' : '否'}
            </p>
            <p>
                爱好：{props.loves.join(',')}
            </p>
            <p>
                <button onClick={props.learn}>学习</button>
            </p>
            <p>
                {props.b}
            </p>
            <C/>
            {/* 或者 */}
            <props.c/>
        </div>
    )
}
Validation.defaultProps = {
}
Validation.propTypes = {
    name: PropsType.string.isRequired,
    age: PropsType.number.isRequired,
    isMarried: PropsType.bool.isRequired,
    learn: PropsType.func.isRequired,
    // loves: PropsType.array.isRequired,
    // 必须是数字，且元素必须是string类型的
    loves: PropsType.arrayOf(PropsType.string),
    // a必须是一个元素或者react元素
    a: PropsType.element.isRequired,
    // b必须是字符串或数字或者元素
    b: PropsType.node.isRequired,
    // c必须是一个元素类型
    c: PropsType.elementType,
    // 必须是对象
    d: PropsType.object,
    // 必须是对象，且属性值必须是number(很少用)
    e: PropsType.objectOf(PropsType.number).isRequired,
    // f必须是对象，且满足下面的格式，不能额外新加属性
    f: PropsType.exact({
        name: PropsType.string.isRequired,
        age: PropsType.number.isRequired
    }),
    // 必须是['1',2]中的一个
    g: PropsType.oneOf(['1',2]).isRequired,
    // h类型必须是number或者string
    h: PropsType.oneOfType([PropsType.number, PropsType.string]).isRequired,
    // 原型链上必须有CompA,不能是组件
    i: PropsType.instanceOf(CompA),
    // 功能和exact类似，但是可以新增属性
    j: PropsType.shape({
        name: PropsType.string.isRequired,
        age: PropsType.number.isRequired
    })
}
