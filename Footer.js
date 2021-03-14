import React from 'react';
import { useHistory } from 'react-router';


export const Footer = () => {
    const { push } = useHistory();


    return (
        <footer className="footer__main">
            <div className="footer__container">
                <p>
                    <span onClick={() => push("/COU")} className="footer__link">Conditions of Use</span> &nbsp;
                    <span onClick={() => push("/PrivacyNotice")} className="footer__link">Privacy Notice</span> &nbsp;
                    <span onClick={() => push("/Help")} className="footer__link">Help</span>
                </p> 
                <p className="footer__space">© 1996-2021, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>
    )
};