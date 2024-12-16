import {Link} from "react-router-dom/dist";
import logo from "../../assets/navicon/feastify-logo.png";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center m-0" to="/" style={{height: '88px', overflow: "hidden"}}>
                        <img
                            src={logo}
                            alt="Feastify"
                            height="200%"
                            style={{objectFit: 'cover'}}/>
                        <span className="text-dark fs-4 fw-bold" >The Feastify</span>
                    </Link>
                </div>
            </nav>
        </>
    );
}