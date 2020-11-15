import React from 'react'
import './index.css'

export default function ThreeLayout(props) {
    const defaultProps = {
        height: '100vh',
        width: '100vw',
        minWidth: 800,
        left: 200,
        right: 100
    }
    const datas = {...defaultProps, ...props};
    return (
        <div className="container" style={{minWidth: datas.minWidth}}>
            <div className="main">
                {datas.children}
            </div>
            <div className="left" style={{width: datas.left}}>
                {datas.left}
            </div>
            <div className="right" style={{width: datas.right}}>
                {datas.right}
            </div>
        </div>
    )
}
