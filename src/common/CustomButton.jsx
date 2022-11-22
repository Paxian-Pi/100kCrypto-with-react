import React from 'react'
import Spinner from './Spinner'

const CustomButton = ({ isClicked, spinnarText, isActive, onClickHandler, buttonText }) => {
    return (
        <div>
            {isClicked
                ?
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0 }}
                    className="btn btn-light btn-block form-control text-light"
                    disabled={isActive}
                    style={{ height: '3rem' }}
                >
                    {spinnarText && <Spinner text={spinnarText} textStyle='ml-3 text-dark text-center' />}
                    <Spinner />
                </motion.button>
                :
                <button className="btn btn-color btn-block form-control text-light" onClick={onClickHandler} style={{ height: '3rem', borderRadius: '8px' }}>
                    {buttonText}
                </button>
            }
        </div>
    )
}

export default CustomButton