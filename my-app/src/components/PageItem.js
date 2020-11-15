import React from 'react'

export default function PageItem(props) {
    return (
        <>
            <span 
                onClick={() => props.currentPageChange(props.pageNum)}
                className={props.className}>{props.pageText}
            </span>
        </>
    )
}
