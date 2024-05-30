import React from "react";
import { Link } from "react-router-dom";
import 'boxicons';

function Footer() {
    return (
        <div>
            <div id="footer-left-side">
                <h2>Let's Connect</h2>
                <p>Need an ambitious young developer who is ready to dive in head first? <Link to="/contact-me">Send me an email</Link> to inquire about my skills.</p>
                <p>Or, connect with me elsewhere &rarr;</p>
            </div>
            <div id="footer-right-side">
                <a href="https://www.linkedin.com/in/grant-r-cummings" rel="noopener" target="_blank"><box-icon type='logo' name='linkedin-square'></box-icon></a>
                <a href="https://medium.com/@grantcummings4429" rel="noopener" target="_blank"><box-icon name='medium' type='logo' ></box-icon></a>
                <a href="https://github.com/gant802" rel="noopener" target="_blank"><box-icon name='github' type='logo' ></box-icon></a>
                <a href="https://www.instagram.com/gant802/" rel="noopener" target="_blank"><box-icon type='logo' name='instagram-alt'></box-icon></a>
            </div>

        </div>
    )
}


export default Footer