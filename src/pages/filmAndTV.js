import React from "react"
import Layout from "../components/layout" 
import FilmBanner from "../images/filmBanner.png";
import FilmSet from "../images/filmSet.jpg";
import FilmSet2 from "../images/filmSet2.jpg";
import GreenStripe from "../components/greenStripe"

export default function FilmAndTV() {
  return (
    <Layout>
      <div class="corporate-header">
        <img src={FilmBanner} alt="Movie set" className="film-banner-image"/>
        <h2 class="film-heading">Film and Television Production</h2>
      </div>
      <GreenStripe firstLine={"We provide treatments to the film and television industry, helping to relax and rejuvenate both cast and crew."}/>
      <div class="film-container">
        <div class="film-image">
          <img src={FilmSet2} alt="Film set" className="film-image"/>
        </div>
        <div class="film-text">
          <h3 class="film-subheading">From the Set to the Wrap Party</h3>
          <p class="film-info">With minimal equipment and space needed, we can set up at any venue, 
            - on set or on location. We recommend a quiet room or trailer as this often 
            provides a more peaceful experience away from the action. However a massage station can be set up in a 
            quiet corner where the therapist can easily treat cast and crew. </p>
            <p>At post-production celebrations, massage therapy can be an excellent way to reward your team for their 
              effort and hard work after months of filming.</p>
              <p><a href="/contact" className="contact-link">Contact us</a> for more information.</p>
        </div>
        <div class="film-image">
          <img src={FilmSet} alt="Film set" className="film-image"/>
        </div>
      </div>
    </Layout>
  )
}