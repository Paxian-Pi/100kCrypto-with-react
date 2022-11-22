import React from 'react'

const CheckBox = ({ id, value, label, onChangeHandler, checked }) => {
    return (        
        <div className='custom-control custom-checkbox'>
            <input
                type="checkbox"
                className='custom-control-input'
                name={id}
                value={value}
                onChange={onChangeHandler}
                id={id}
                checked={checked}
            />
            <span> <label className="custom-control-label" htmlFor={id}>{label}</label></span>
        </div>
    )
}

export default CheckBox