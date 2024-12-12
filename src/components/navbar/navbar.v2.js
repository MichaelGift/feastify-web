import {Link} from "react-router-dom/dist";
import logo from "../../assets/navicon/feastify.svg";

export default function Navbar() {
    return (
        <>
            <nav className={`navbar navbar-expand-lg`}>
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/" style={{height: '88px', overflow: "hidden"}}>
                        <img
                            src={logo}
                            alt="Feastify"
                            style={{objectFit: 'cover'}}/>
                        <span className="text-dark" style={{
                            fontSize: '1.2rem',
                        }}>The Feastify</span>
                    </Link>
                </div>
            </nav>
        </>
    );
}