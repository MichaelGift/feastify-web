import { FaInstagram, FaPinterest, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom/dist";
import "./footer.css"

export default function Footer(){
    return(
        <footer className="footer py-3">
            <div>
                <h4 className="text-center">Meanwhile Connect with us...</h4>
            </div>
            <div className="d-flex justify-content-center gap-5 mx-4 my-3">
                <Link href="https://pinterest.com/thefeastify/" target="_blank">
                    <FaPinterest size={25} color="red"/>
                </Link>
                <Link href="https://instagram.com/thefeastify/" target="_blank">
                    <FaInstagram size={25} color="black"/> 
                </Link>
                <Link href="https://whatsapp.com/channel/0029VafZshw8kyyJpygtXf25" target="_blank">
                    <FaWhatsapp size={25} color="green"/>
                </Link>
                <Link href="mailto:hi@thefeastify.com" target="_blank">
                    <FaEnvelope size={24} color="black"/>
                </Link>
                {/*<Link href="#">
                    <FaXTwitter size={25} color="black"/>
                </Link>*/}
            </div>
        </footer>
    )
}