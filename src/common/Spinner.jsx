import React from 'react'


const Spinner = ({ text, textStyle, useSpinnarLarge }) => {
    return (

        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '25px',
                width: '100%'
            }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '25px',
                width: '100%'
            }}>
                <div className={useSpinnarLarge ? 'loader1' : 'loader'}>
                    <div className="spin" />
                </div>
                <small className={textStyle}>{text}</small>

            </div>
        </div>

    )
}

export default Spinner