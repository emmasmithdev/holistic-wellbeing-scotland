import React from "react"
import Logo from '../images/lauraLogoCropped.jpg';
import MassageSide from "../images/massageSide.jpg";
import Reiki2 from "../images/reiki2.jpg";

export default function HomeImages() {
    return (
        <div class="home-images-wrapper">
            <div class="row">
                <div id="reikiImage" class="col-sm-12 col-md-4 home-image">
                    <img src={Reiki2} alt="A woman having a head massage" className="large-massage-image"/>
                </div>
                <div class="col-sm-12 col-md-4 home-image">
                <img src={Logo} alt="Holistic Wellbeing logo large" className="large-logo"/>
                </div>
                <div class="col-sm-12 col-md-4 home-image">
                <img src={MassageSide} alt="A smiling woman lying on a massage table." className="large-massage-image"/>
                </div>
            </div>
        </div>
    )}