import React from "react";
import Layout from "../components/layout";
import GreenStripe from "../components/greenStripe";
import PamperBanner from "../images/pamper5.jpg";
import PamperPolaroid from "../images/pamper4.jpg";
import PamperPolaroid3 from "../images/pamper2.jpg";
import PamperPolaroid2 from "../images/pamper1.jpg";
import PamperPolaroid4 from "../images/pamper6.jpg";
import Prosecco from "../images/pamper7.jpg";
import Champagne from "../images/pamper3.jpg";


export default function Events() {
  return (
    <Layout>
      <div class="events-header">
        <img src={PamperBanner} alt="Balloons" className="pamper-party-banner-image"/>
        <h2 class="events-heading">Pamper Parties</h2>
      </div>
      <GreenStripe firstLine={"Experience the ultimate in pampering without the expensive price tag."}/>
      <div class="row">
        <div class="col-lg-3 col-md-12 polaroid-container" id="left-polaroids">
          <img src={PamperPolaroid} alt = "Back massage" className="pamper-polaroid-portrait left-polaroid"/>
          <img src={Champagne} alt = "Champagne glasses on a tray" className="pamper-polaroid-portrait left-polaroid small-mobile-hide"/>
        </div>
        <div class="col-lg-6 pamper-party-text">
          <img src={PamperPolaroid2} alt = "A group of girlfriends walking" className="pamper-polaroid-landscape" id="girls-walking"/>
          <p>At Holistic Wellbeing we have a range of luxury pamper packages. Whether you want to have a party in the comfort of your own home, at a hotel 
          or rented accommodation, our fully insured and professional Complementary Therapists will create a haven of tranquillity wherever you are, so that 
          you can indulge in your very own sanctuary.</p>
          <img src={Prosecco} alt = "Hen party with balloons" className="pamper-polaroid-small"/>
          <p>Our pamper packages & treatments, range from massages to facials, and we will provide some fizz too!</p>
          <br/>
          <p><a href="/contact" className="contact-link">Contact Laura</a> for more information.</p>
        </div>
        <div class="col-lg-3 col-md-12 polaroid-container">
          <img src={PamperPolaroid3} alt = "Women doing cheers with drinks" className="pamper-polaroid-portrait bottom-polaroid"/>
          <img src={PamperPolaroid4} alt = "Donut and party noise-makers" className="pamper-polaroid-portrait bottom-polaroid small-mobile-hide"/>
        </div>
    </div>
    </Layout>
  )
}