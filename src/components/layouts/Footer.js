import React from "react";
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer id="footer">
            <div>
                <h4>email</h4>
                <p><Link to="mailto:webstoryboy@naver.com">webstoryboy@naver.com</Link></p>
            </div>
            <div>
                <h4>Kakao</h4>
                <p><Link to="/">@webstupis</Link></p>
            </div>
            <div>
                <h4>social</h4>
                <ul>
                    <li><Link to="/youtube">Youtube</Link></li>
                    <li><Link to="/">Instargram</Link></li>
                    <li><Link to="/">Github</Link></li>
                    <li><Link to="/">Cafe</Link></li>
                    <li><Link to="/">Referecne</Link></li>
                    <li><Link to="/">Tutorials</Link></li>
                    <li><Link to="/">CSS</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;