import React from "react"
import Layout from "../components/layout" 
import Laura from "../images/lovelyLaura.jpg";

export default function About() {
  return (
<Layout>
  <div class="row">
    <div class="col-lg-12">
    <h2 class="about-heading">About Us</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 col-sm-12 about-item left">
    <img src={Laura} alt="Laura Lawson" className="laura-image"/>
    </div>
    <div class="col-md-6 col-sm-12 about-item">
      <div class="laura-info">
        <p>Laura Lawson is an experienced Complementary Therapist with over 10 years experience in the health and wellness sector.
      She takes pride in providing the very best quality treatments for all her clients.
      Her extraordinary commitment to outstanding quality has had her recognized by 'Holistic Scotland Magazine' as nominated Therapist of the Year.</p>
      <p>Laura has spent significant time building an extensive list of clients throughout the UK and in America.
      Whether it be a visit at home, in the workplace or on location, Laura has the expertise to provide a first-class service.</p>
      </div>
    </div>
    </div>
    </Layout>
  )
}