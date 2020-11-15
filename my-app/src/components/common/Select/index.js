import React from 'react'

export default function Select(props) {
    const options = props.datas.map(e => 
        <option 
            key={e.value} 
            value={e.value}>
                {e.name}
        </option>
    )
    return (
        <select 
            value={props.selected} 
            onChange={e => {
                let selected;
                selected = e.target.value;
                props.onChange(selected, e);
            }}>
            {options}
        </select>
    )
}
