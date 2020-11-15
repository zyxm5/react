import React, { Component } from 'react';
import './Pager.css';
import PageItem from './PageItem';

export default class Pager extends Component {
    constructor(props){
        super(props);
        const maxPageNum = this.props.maxPageNum || 7;
        this.state = {
            currentPage: this.props.currentPage,
            maxPageNum,
            totalPage: Math.ceil(this.props.total / this.props.pageSize),
            centerPageNum: maxPageNum - 2
        }
    }
    prev = () =>{
        const { currentPage } = this.state;
        const page = currentPage > 1 ? currentPage - 1 : currentPage;
        this.setCurrentPage(page);
    }
    next = () =>{
        const { currentPage, totalPage} = this.state;
        const page = currentPage < totalPage ? currentPage + 1 : totalPage;
        this.setCurrentPage(page);
    }
    currentPageChange = (e) => {
        const currentPage = +e.target.innerText;
        this.setCurrentPage(currentPage);
    }
    setCurrentPage(currentPage){
        this.setState({
            currentPage
        })
        this.props.currentPageChange(currentPage);
    }
    /**
     * 计算中间部分最小页码
     */
    getMinPage(){
        const {currentPage, centerPageNum, totalPage} = this.state;
        let minPage = currentPage - Math.floor(centerPageNum / 2);
        // 如果总页数减去最小页码小于5，则最小页码等于总页数-5
        if(totalPage - minPage < centerPageNum){
            minPage = totalPage - centerPageNum;
        }
        // 如果最小页码小于2，则最小页码等于2
        if(minPage < 2){
            minPage = 2;
        }
        return minPage;
    }
    /**
     * 计算中间部分最大页码
     */
    getMaxPage(){
        const {centerPageNum, totalPage} = this.state;
        const minPage = this.getMinPage();
        let maxPage = minPage + centerPageNum - 1;
        // 如果总页数-最大页码 < 2，则最大页码等于总页码 - 1
        if(totalPage - maxPage < 2){
            maxPage = totalPage - 1;
        }
        return maxPage;
    }
    render() {
        // 根据总数和页容量计算页数
        const { pageSize } = this.props;
        const { currentPage,totalPage } = this.state;
        const pages = [];
        const minPage = this.getMinPage();
        const maxPage = this.getMaxPage();
        for(let i = 1; i <= totalPage; i ++){
            let pageNum;
            let pageText;
            if(i === 1){
                pageNum = 1;
            }else if(i === totalPage){
                pageNum = totalPage;
            }else if(i === minPage - 1){
                if(i !== 1){
                    pageText = '...';
                    pageNum = currentPage - (currentPage - minPage) - 1;
                }else{
                    continue;
                }
            }else if(i === maxPage + 1){
                if(i !== totalPage){
                    pageText = '...';
                    pageNum = currentPage + (maxPage - currentPage) + 1;
                }else{
                    continue;
                }
            }
            else if(i >= minPage && i <= maxPage){
                pageNum = i;
            }else{
                continue;
            }
            pages.push(<PageItem 
                            key={i}
                            pageText={pageText || pageNum}
                            pageNum={pageNum} 
                            className={i === currentPage ? 'active' : ''}
                            currentPageChange={val => this.setCurrentPage(val)}/>)
        }
        return (
            <>
               共{totalPage}页
               每页{pageSize}条
               <span onClick={this.prev} className={currentPage === 1 ? 'disabled' : ''}>&lt;</span>
               {pages}
               <span onClick={this.next} className={currentPage === totalPage ? 'disabled' : ''}>&gt;</span>
            </>
        )
    }
}
