import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getDimensions } from '../app/appSlice'

const ScreenDimensions = ({ children }) => {

    const {windowDimension} = useSelector(state => state.app.value)

    const dispatch = useDispatch()

    const setDimensions = () => {
        dispatch(getDimensions({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        }))
    }
    
    useEffect(() => {
        window.addEventListener('resize', setDimensions)
        
        return () => {
            window.removeEventListener('resize', setDimensions)
        }
    }, [windowDimension])

    return (
        <div>{children}</div>
    )
}

export default ScreenDimensions