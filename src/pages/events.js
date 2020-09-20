import React from "react"
import Layout from "../components/layout" 
import PamperBanner from "../images/pamperBanner.jpg";
import PamperPolaroid from "../images/pamperPolaroid.jpg";
import PamperPolaroid3 from "../images/pamperPolaroid3.jpg";
import PamperPolaroid2 from "../images/pamperPolaroid2.jpg";
import PamperPolaroid4 from "../images/pamperPolaroid4.jpg";
import Prosecco from "../images/prosecco.jpg";
import OilPestle from "../images/oilPestle.jpg";
import Champagne from "../images/champagne.jpg";


export default function Events() {
  return (
    <Layout>
      <div class="events-header">
        <img src={PamperBanner} alt="Two girls applying face masks" className="pamper-party-banner-image"/>
        <h2 class="events-heading">Pamper Parties</h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-12 polaroid-container" id="left-polaroids">
          <img src={PamperPolaroid} alt = "Two girls on sofa with cucumbers on their eyes" className="pamper-polaroid-portrait left-polaroid"/>
          <img src={Champagne} alt = "Champagne glasses clinking" className="pamper-polaroid-portrait left-polaroid"/>
        </div>
        <div class="col-lg-6 pamper-party-text">
          <p>
          At Holistic Wellbeing we have a range of packages that ensures you experience the ultimate in pampering but without the expensive price tag. 
          And more importantly - we come to you.</p>  
          <img src={PamperPolaroid2} alt = "Two girls taking a selfie pouting" className="pamper-polaroid-landscape"/>
          <p>Whether you want to have a party in the comfort of your own home, at a hotel 
          or rented accommodation, our fully insured and professional Complementary Therapists will create a haven of tranquillity wherever you are, so that 
          you can indulge in your very own sanctuary.</p>
          <img src={OilPestle} alt = "Oil pestle" id="oil-pestle" className="pamper-polaroid-small"/>
          <img src={Prosecco} alt = "Bottle of prosecco" className="pamper-polaroid-small"/>
          <p>Our pamper packages & treatments, range from massages to facials, and we will provide some fizz too!</p>
          <br/>
          <a href="/contact" className="contact-link">Contact Laura for more information</a>
        </div>
        <div class="col-lg-3 col-md-12 polaroid-container">
          <img src={PamperPolaroid3} alt = "Two girls on the sofa drinking wine and using face cream" className="pamper-polaroid-portrait bottom-polaroid"/>
          <img src={PamperPolaroid4} alt = "A girl with a face mask on" className="pamper-polaroid-portrait bottom-polaroid"/>
        </div>
    </div>
    </Layout>
  )
}