import React from 'react'
import PropTypes from 'prop-types';

Select.defaultProps = {
    datas: [
        {
            name: '篮球',
            value: 'basketball'
        },{
            name: '足球',
            value: 'football'
        },
        {
            name: '排球',
            value: 'volleyball'
        }
    ],
}

Select.propTypes = {
    data: PropTypes.array,
    selected: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
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
