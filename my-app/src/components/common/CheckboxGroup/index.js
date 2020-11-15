import React from 'react'

/**
 * 复选框组
 * @param {*} props 
 */
export default function CheckboxGroup(props) {
    const checkboxes = props.datas.map(d => <label key={d.value}>
            {d.name}
            <input 
                type="checkbox" 
                checked={props.checkeds.includes(d.value)}
                value={d.value}
                onChange={e => {
                    let checkeds = [];
                    if(e.target.checked){
                        checkeds = [...props.checkeds, e.target.value]
                    }else{
                        checkeds = props.checkeds.filter(c => e.target.value !== c);
                    }
                    props.onChange(checkeds, e, e.target.checked);
                }}/>
        </label>)
    return (
        <>
           {checkboxes} 
        </>
    )
}
