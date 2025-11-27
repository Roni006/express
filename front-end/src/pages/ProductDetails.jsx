import React from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
    const {id} = useParams();
    return (
        <main>
            <div className="container">
                <h1>product detials page. product is{id}</h1>
            </div>
        </main>
    )
}

export default ProductDetails