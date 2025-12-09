import React from 'react'
import Discovery from './Discovery'
import ProductList from '../screen/ProductList'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about", {
            state: {
                name: "anik",
                location: "dhaka"
            }
        })
    }
    return (
        <>
            <button onClick={handleClick} className='bg-red-500 py-2 px-2 text-white cursor-pointer'>Click to Redirect About page</button>
            <Discovery />
            <ProductList />
        </>
    )
}

export default Home