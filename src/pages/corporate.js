import React from "react"
import Layout from "../components/layout" 
import CorporateBanner from "../images/corporateBanner.jpg";
import GreenStripe from "../components/greenStripe"
import CorporateOutside from "../images/corporateOutside.jpg";
import CorporateMeeting from "../images/corporateMeeting.jpg";
import CorporateTeam from "../images/corporateTeam.jpg";
import CorporateHand from "../images/corporateHand.jpg";
import CorporateFoot from "../images/corporateFoot.jpg";
import CorporateShoulder from "../images/corporateShoulder.jpg";

export default function Corporate() {
  return (
    <Layout>
       <div class="corporate-header">
        <img src={CorporateBanner} alt="Purple wellness flower" className="corporate-banner-image"/>
        <h2 class="corporate-heading">Workplace Massage</h2>
      </div>
      <GreenStripe firstLine={"Increase productivity, reduce stress and build morale for your staff by scheduling our mobile massage therapists at your workplace."}/>
      <div class="corporate-container">
        <div class="corporate-item">
          <div class="corporate-item-blue">
            <div class="corporate-info corporate-info-large">We can tailor a bespoke range of packages based on your company’s financial budget, time available and treatments required.</div>
          </div>
        </div>
        <div class="corporate-item">
          <div class="corporate-item-green">
          <img src={CorporateShoulder} alt="Shoulder massage" className="corporate-small-image"/>
          </div>
        </div>
        <div class="corporate-item">
        <div class="corporate-item-blue">
          <div class="corporate-info corporate-info-large">Our experienced team provides a number of services including aromatherapy, reflexology, Indian head massage and Reiki.</div>
        </div>
        </div>
        <div class="corporate-item">
        <div class="corporate-item-green">
        <img src={CorporateMeeting} alt="Corporate meeting" className="corporate-small-image"/>
        </div>
        </div>
        <div class="corporate-item hide-on-mobile">
        <div class="corporate-item-green">
        <img src={CorporateTeam} alt="Corporate team meeting" className="corporate-small-image"/>
        </div>
        </div>
        <div class="corporate-item">
        <div class="corporate-item-blue">
          <div class="corporate-info">Massage improves focus and motivation in your employees. It can lead to fewer long term absences and reduces staff turnover. It builds good employer/employee relations and is a great teambuilding activity.</div>
        </div>
        </div>
        <div class="corporate-item mobile-corporate-item">
        <div class="corporate-item-green">
        <img src={CorporateTeam} alt="Corporate team meeting" className="corporate-small-image"/>
        </div>
        </div>
        <div class="corporate-item hide-on-mobile">
        <div class="corporate-item-green">
        <img src={CorporateHand} alt="Hand massage" className="corporate-small-image"/>
        </div>
        </div>
        <div class="corporate-item">
        <div class="corporate-item-blue">
          <div class="corporate-info">Workplace massage leads to lower levels of anxiety and depression and increased job satisfaction. It reduces repetitive strain injuries and can be a great way to recognise and reward your employees.</div>
        </div>
        </div>
        <div class="corporate-item mobile-corporate-item">
        <div class="corporate-item-green">
        <img src={CorporateHand} alt="Hand massage" className="corporate-small-image"/>
        </div>
        </div>
        <div class="corporate-item">
          <div class="corporate-item-blue">
          <div class="corporate-info">Our team regularly provides onsite massage at a range of organisations throughout Scotland.
            Our aim is to keep your workforce motivated and ready to take on challenges of utmost importance to your business.</div>
          </div>
        </div>
        <div class="corporate-item">
          <div class="corporate-item-green">
          <img src={CorporateFoot} alt="Foot massage" className="corporate-small-image"/>
          </div>
        </div>
        <div class="corporate-item">
        <div class="corporate-item-blue">
          <div class="corporate-info corporate-info-large">All treatments will leave your staff feeling rejuvenated and uplifted! <a href="/contact" className="contact-link">Contact Laura</a> for more information.</div>
        </div>
        </div>
        <div class="corporate-item">
        <div class="corporate-item-green">
        <img src={CorporateOutside} alt="Business meeting outside" className="corporate-small-image"/>
        </div>
        </div>
      </div>
    </Layout>
  )
}