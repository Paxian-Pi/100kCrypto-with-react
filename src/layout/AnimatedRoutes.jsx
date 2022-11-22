import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Login from '../auth/Login'
import Signup from '../auth/Signup'

const AnimatedRoutes = () => {

    const location = useLocation()

    return (
        <AnimatePresence location={location} key={location.pathname}>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/sign-up' element={<Signup />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes