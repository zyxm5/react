import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const num = 1;
// const obj = {a:1}
const obj = React.createElement('span', {}, 'hello');
const arr = [1,false, undefined, null, NaN, 2,34];
const src = 'https://tse1-mm.cn.bing.net/th/id/OET.137c0b0569bb4609a42d325cbc602506?w=135&h=272&c=7&rs=1&o=5&pid=1.9';
const inp = '<h3>123</h3>';
const cls = 'demo';
const h1 = <>
  <h1 className={cls} style={{fontSize: "50px", color: "#008c8c"}}>{obj}</h1>
  <span>{arr}</span>
  {/* <img src={src} alt=""/> */}
  <h2 dangerouslySetInnerHTML={{
    // __html: inp
  }}></h2>
</>;
console.log(h1);
// 不能修改react元素
// h1.props.children.pop();
ReactDOM.render(h1,
  document.getElementById('root')
);
