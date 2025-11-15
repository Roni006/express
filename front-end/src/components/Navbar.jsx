import { Link } from 'react-router'
import logo from '../assets/logo.png'
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
                        <div className="menus">
                            <nav>
                                <ul className='menu  lg:flex items-center gap-[50px] hidden sm:block md:block  '>
                                    <li><Link to="/">Discovery</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Conatat Us</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="icons"></div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar