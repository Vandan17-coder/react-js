import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="flex justify-between py-5 px-7 bg-cyan-900">
            <h2 className="text-l font-ol">Ecommerce</h2>
            <div className="text-l font-bold">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Product</Link>
                <Link to='/courses'>Courses</Link>
            </div>
        </div>
    )
}

export default Navbar