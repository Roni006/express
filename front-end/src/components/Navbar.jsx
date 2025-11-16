import { Link } from 'react-router'
import logo from '../assets/logo.png'
import user from '../assets/user.svg';
import cart from '../assets/cart.svg';
import { CgMenuRight } from "react-icons/cg"; 
const Navbar = () => {
    return (
        <>
            <header>
                <div className="container max-w-[1120px] mx-auto px-[15px]">
                    <div className="flex items-center justify-between py-5">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="header logo" />
                            </Link>
                        </div>
                        <div className="menus hidden md:block sm:block">
                            <nav>
                                <ul className='menu flex items-center gap-[50px] '>
                                    <li><Link to="/">Discovery</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Conatat Us</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right-icons md:block hidden ">
                            <div className="icon flex gap-[15px] cursor-pointer">
                                <img src={user} alt="User icon" />
                                <img src={cart} alt="Cart icon" />
                            </div>
                        </div>
                        <div className="hamburger bg-[#53cd8a] text-[30px] px-2 py-2 text-white cursor-pointer rounded-md md:hidden block">
                            <CgMenuRight />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar