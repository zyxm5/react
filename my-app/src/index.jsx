import React from "react";
import ReactDOM from "react-dom";
import Pager from './components/Pager';

let pageConfig = {
	currentPage:5,
	pageSize: 1,
	total: 10,
	maxPageNum:5
}
function handleCurrentPageChange(val){
	console.log(val);
	pageConfig.currentPage = val;
}
ReactDOM.render(<Pager {...pageConfig} currentPageChange={handleCurrentPageChange}/>, document.getElementById('root'));
