import React from "react"
import Layout from "../components/layout" 
import EventsBanner from "../images/eventsBanner.jpg";
import GreenStripe from "../components/greenStripe";
import HeadMassage from "../images/corporateHeadMassage.jpg";
import LadyCheers from "../images/ladyCheers.jpg";

export default function specialEvents() {
    return (
      <Layout>
          <div class="events-header">
        <img src={EventsBanner} alt="Champagne" className="events-banner-image"/>
        <h2 class="events-heading">Special Events</h2>
      </div>
      <GreenStripe firstLine={"Make the right impression at your special event!"}/>
      <div class="events-container">
          <div class="events-item">
              <p>Want to make a big splash? Have all your guests raving about your event? 
          Then you need us to provide that missing ingredient.</p>
          <p>We provide that added luxury and indulgence needed to give your guests that very important good impression.</p> 
          <p>Perfect for charity events, annual conferences, product launches, wrap parties and much more. <a href="/contact" className="contact-link">Contact Laura</a> for more information.</p></div>
          <div class="events-item-pics">
          <img src={HeadMassage} alt="Head massage" className="events-image"/>
          <img src={LadyCheers} alt="Lady dressed up with a drink" className="events-image"/>
          </div>
      </div>
    </Layout>
  )
}