import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';

const srcs = [img1, img2, img3];
let index = 0;
let timer;
const container = document.getElementById('root');
function render(){
  ReactDOM.render(<img src={srcs[index]} alt=""/>,
    container
  );
}

function start(){
  stop();
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render();
  }, 2000);
}
start();
function stop(){
  clearInterval(timer);
}

container.onmouseenter = function(){
  stop();
}
container.onmouseleave = function(){
  start();
}