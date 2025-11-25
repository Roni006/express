import { Link } from "react-router"
import logo from "./../assets/logo.png"

const Footer = () => {
    return (

        // < !--! FOOTER SECTION START-- >
        <footer className="footer-section bg-black pt-[60px] pb-[115px]">
            <div className="container max-w-[1135px] mx-auto px-4 border border-t-white">
                <div
                    className="footer-content pt-5 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">

                    {/* <!-- Left --> */}
                    <div className="footer-left text-center lg:text-left">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="footer logo" />
                            </Link>
                        </div>
                        <p className="text-white leading-[22px] pt-2.5">
                            Your natural candle made for <br /> your home and for your wellness.
                        </p>
                    </div>

                    {/* <!-- Right --> */}
                    <div className="footer-right w-full lg:w-auto">
                        <div
                            className="footer-content flex flex-col sm:flex-row gap-8 sm:gap-10 justify-center text-center sm:text-left">

                            {/* <!-- Item 1 --> */}
                            <div className="footer-item">
                                <h4 className="text-[#56b280] text-[18px] font-medium mb-5">Discovery</h4>
                                <div className="menus">
                                    <nav>
                                        <ul>
                                            <li className="pb-2.5"><Link to={null}
                                                className="text-[#E1E1E1] text-[16px] font-medium">New Season</Link></li>
                                            <li className="pb-2.5"><Link to={null}
                                                className="text-[#E1E1E1] text-[16px] font-medium">Most Searched</Link></li>
                                            <li className="pb-2.5"><Link to={null}
                                                className="text-[#E1E1E1] text-[16px] font-medium">Most Selled</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            {/* <!-- Item 2 --> */}
                            <div className="footer-item">
                                <h4 className="text-[#56b280] text-[18px] font-medium mb-5">About</h4>
                                <div className="menus">
                                    <nav>
                                        <ul>
                                            <li className="pb-2.5"><Link to={null}
                                                className="text-[#E1E1E1] text-[16px] font-medium">Help</Link></li>
                                            <li className="pb-2.5"><Link to={null}
                                                className="text-[#E1E1E1] text-[16px] font-medium">Shipping</Link></li>
                                            <li className="pb-2.5"><Link to={null}
                                                className="text-[#E1E1E1] text-[16px] font-medium">Affiliate</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            {/* <!-- Item 3 --> */}
                            <div className="footer-item">
                                <h4 className="text-[#56b280] text-[18px] font-medium mb-5">Info</h4>
                                <div className="menus">
                                    <nav>
                                        <ul>
                                            <li className="pb-2.5"><Link to={null}
                                                className="text-[#E1E1E1] text-[16px] font-medium">Contact us</Link></li>
                                            <li className="pb-2.5"><Link to={null}
                                                className="text-[#E1E1E1] text-[16px] font-medium">Privacy Polocies</Link></li>
                                            <li className="pb-2.5"><Link to={null}
                                                className="text-[#E1E1E1] text-[16px] font-medium">Terms & Condition</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
        // {/* <!--! FOOTER SECTION START-- > */ }
    )
}

export default Footer