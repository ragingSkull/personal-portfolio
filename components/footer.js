import Link from "next/link"
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Footer = () => {
    return (
        <div className="footer">
            <p className="createdFrom">Created with ♥ from <Popup trigger={<Link href=''>Kuala Lumpur, Malaysia</Link>} position="top">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8149837.481632142!2d105.12235203708244!3d4.138917011901259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2smy!4v1666930562422!5m2!1sen!2smy" frameBorder="0"></iframe></Popup>
            </p>
        </div>
    );
}

export default Footer