import React from "react";
import ReactDOM from "react-dom";
import StudentList from "./components/StudentList";
// 函数组件：最终返回一个react元素
	// 关于属性，作为第一个参数传递
// 类组件：继承React.Component, 实现render方法，并返回一个react元素
//  关于属性，作为构造函数的参数进行传递

const container = document.getElementById('root');
const stus = new Array(100);
stus.fill({
	name: 'zt',
	age: 25,
	sex: 1
})
ReactDOM.render(<div>
	<StudentList stus={stus}/>
</div>, container);
