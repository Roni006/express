import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const RootLayOuts = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default RootLayOuts