import ProductCard from "../components/common/ProductCard"

const ProductList = () => {
    return (
        <section className="my-10 ">
            <div className="container">
                <h2 className="text-3xl text-black font-medium text-center">Product List</h2>
                <p className="mt-1 text-center text-black font-medium text-base">Order it for you or for Your beloved ones</p>

                <div className="mt-5">
                    <div className="w-full grid grid-cols-2 items-center justify-center sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {Array.from({ length: 8 }).map((product, i) => (
                            <ProductCard id={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductList