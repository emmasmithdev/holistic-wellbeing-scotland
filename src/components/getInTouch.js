import React from "react"
import Phone from "../images/mobilePhone.png"
import Email from "../images/whiteEmail.png"
import Facebook from "../images/facebook.png"
import Button from 'react-bootstrap/Button'

export default function GetInTouch() {
    return (
        <div className="get-in-touch">
            <div class="row">
            <div class="col-md-6 col-sm-12">
            <h3 className="contact-header">Get In Touch!</h3>
            <div className="contact-me">
                <img src={Phone}
                 width="20"
                 height="20"
                 className="contact-icon"
                 alt="Phone icon"></img>
                 <p className="contact-info">+44 7960 516120</p>
            </div>
            <div className="contact-me">
                <img src={Email}
                 width="20"
                 height="20"
                 className="contact-icon"
                 alt="Email icon"></img>
                 <a className="external-link" href = "mailto: angelic.healing111@yahoo.com"><p className="contact-info">angelic.healing111@yahoo.com</p></a>
            </div>
            <div className="contact-me">
                <img src={Facebook}
                 width="20"
                 height="20"
                 className="contact-icon"
                 alt="Facebook icon"></img>
                 <a className="external-link" href="https://www.facebook.com/HolisticWellbeingMobile" target="_blank"><p className="contact-info">HolisticWellbeingMobile</p></a>
            </div>
            </div>
            <div class="col-md-6 col-sm-12">
            <h3 className="contact-header">About Me</h3>
            <p>Laura is an experienced Complementary Therapist with over 10 years experience in the health and wellness sector.
                She takes pride in providing the very best quality treatments for all her clients at incredibly competitive prices...
            </p>
            <Button href="/about" id="about-me-button-link" className="find-out-more">Find out more</Button>
            </div>
            </div>
        </div>
    )}