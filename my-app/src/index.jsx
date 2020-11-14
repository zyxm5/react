import React from "react";
import ReactDOM from "react-dom";
import MyFuncComp from "./MyFuncComp";
import MyClassComp from './MyClassComp';

// 函数组件：最终返回一个react元素
	// 关于属性，作为第一个参数传递
// 类组件：继承React.Component, 实现render方法，并返回一个react元素
//  关于属性，作为构造函数的参数进行传递

const container = document.getElementById('root');
ReactDOM.render(<div>
	{/* {MyFuncComp()} */}
	<MyFuncComp name="zy"/>
	<MyClassComp age={10} fun={() => (<h1>这是我使用函数传递过去的ui</h1>)}/>
	<MyClassComp age={10} ui={<h2>这是我使用对象传递过去的ui</h2>}/>
	<MyClassComp age={10}/>
</div>, container);
