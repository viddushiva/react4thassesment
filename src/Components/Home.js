import React from 'react'
import './style.css'
import {Link} from 'react-router-dom' 

const Home = () => {
    return (
        <div className='big'>
            <Link to='/homee' > HOME </Link>
            <Link to='/student' > STUDENTS </Link>
            <Link to='/contact' > CONTACT US </Link>
        </div>
    )
}

export default Home
