import React from "react";
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

    return(
        <footer>
            <div className="footer-wrapper">
                <p>Copyright &copy;{new Date().getFullYear()} 30 Days of React</p>
                <p>Join <a href="https://github.com/Asabeneh/30-Days-Of-React" target="_blank" rel="noopener noreferrer">30 Days of React Challenge</a></p>
                <p>Designed and Built by <a href="##">Taiwo Adedeji</a></p>
                <p><a href="#top"><FontAwesomeIcon icon={faArrowAltCircleUp}/></a></p>
            </div>
        </footer>
    )
}

export default Footer;