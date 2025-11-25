import heroBg from "../assets/hero-bg.png"
const Banner = () => {
    return (
    //   < !--? HERO - SECTION SECTION START-- >
    <section className="hero-section relative">
        <div className="hero-content relative">
            {/* <!-- Hero Image --> */}
            <img src={heroBg} alt="hero-background" className="w-full h-auto object-cover"/>

            {/* <!-- Content --> */}
            <div className="main-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="container max-w-[1135px] mx-auto px-4">
                    <div
                        className="middle-content text-center w-full md:w-[680px] mx-auto bg-[#ffffffa9] px-6 sm:px-10 md:px-[100px] pt-6 md:pt-[70px] pb-8 md:pb-20 rounded-md relative">
 
                        {/* <!-- Text --> */}
                        <h1 className="text-2xl sm:text-3xl md:text-[40px] text-[#1D252C]">The Nature Candle</h1>
                        <p className="text-sm sm:text-base md:text-[16px] pt-2 pb-[30px]">
                            All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments
                        </p>
                        <a href="#"
                            className="bg-[#56b280] text-base md:text-lg font-medium text-white py-2 px-6 md:px-8 rounded-md border border-[#56b280] hover:bg-transparent hover:text-[#56b280] duration-300">
                            Discover Our Collection
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    // {/* <!--? HERO - SECTION SECTION START-- > */}
  )
}

export default Banner