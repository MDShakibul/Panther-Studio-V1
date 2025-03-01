import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/pages/assets/images/Logo.svg";

const Navbar = () => {

    return (
        <>
            <div className="d-flex align-items-stretch" style={{ borderBottom: '2px solid #3E3A44' }}>
    <div className="nav-section-1 py-3 py-lg-4">
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div className="text-white nav-logo">
                    <Link href="#">
                        <Image src={Logo} alt="logo" className="logo-size" />
                    </Link>
                </div>
                <div className="text-white pe-lg-5 d-flex align-items-center">
                    <Link href="#" className="custom-nav-link mb-0 pe-4">Work</Link>
                    <Link href="#" className="custom-nav-link mb-0 pe-4">What We Do</Link>
                    <Link href="#" className="custom-nav-link mb-0">Studio</Link>
                    <button className="navbar-toggler collapsed custom-humberger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                </div>
            </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mt-3">
                                <Link className="nav-link mobile-humberger-menu" aria-current="page" href="#">Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mobile-humberger-menu" aria-current="page" href="#">What We Do</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mobile-humberger-menu" aria-current="page" href="#">Studio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mobile-humberger-menu" aria-current="page" href="#">Work With Us</Link>
                            </li>
                        </ul>
                    </div>
        </div>
    </div>
    <div className="nav-section-2 justify-content-start">
        <Link href="#" className="custom-nav-link custom-nav-link-pc mb-0 ms-5">Work With Us</Link>
    </div>
</div>


            

            
        </>
    );
};

export default Navbar;
