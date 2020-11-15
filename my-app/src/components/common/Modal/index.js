import React from 'react'
import './index.css';

export default function Modal(props) {
    const defaultProps = {
        ...props,
        bgColor: props.bgColor || 'rgba(0,0,0,.3)'
    }
    return (
        <div className="modal" 
            style={{backgroundColor: defaultProps.bgColor}}
            onClick={(e) => {
                if(e.target.className !== 'modal'){
                    return
                }
                defaultProps.onClick();
            }}>
            <div className="content">
                {defaultProps.children}
            </div>
        </div>
    )
}
