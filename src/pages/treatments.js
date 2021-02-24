import React from "react"
import Layout from "../components/layout" 
import GreenStripe from "../components/greenStripe";
import GreenTowels from "../images/greenerTowels.jpg";
import SwedishMassage from "../images/swedishMassage.jpg";
import Aromatherapy from "../images/massageAromatherapy.jpg";
import Reflexology from "../images/reflexology.jpg";
import Reiki from "../images/reikiSmall.jpg";
import IndianHead from "../images/manMassage.jpg";
import Baby from "../images/massageBaby.jpg";
import Pregnancy from "../images/pregnancy.jpg";
import PregnancyReflexology from "../images/pregnancyReflexology.jpg";
import Labour from "../images/labour.jpg";

export default function Treatments() {
  return (
    <Layout>
      <div class="treatments-header">
        <img src={GreenTowels} alt="Green towels rolled up decoratively" className="green-towels-image"/>
        <h2 class="treatments-heading">Discover Our Treatments...</h2>
      </div>
      <GreenStripe firstLine={"Treat yourself and float away with a relaxing or rejuvenating treatment."}/>
      <div class="menu-container">
        <div class="col-md-12 menu-column-header heal-relax-treatments">
          <div class="row treatment-item" id="swedish-massage">
            <div class="col-lg-8 col-md-7 col-sm-12">
            <h4>Swedish Massage</h4>
            <div class="price">
              <p>1 hour - £45 <span class="price-span">1 hour 30 mins - £65</span></p>
            </div>
            <p>Massage can be traced back over 5,000 years ago to ancient India, with Swedish Massage 
            being developed in the 1850s. Swedish Massage was intended to improve circulation, ease 
            muscle tension, improve flexibility and help the body to get rid of waste products. There 
            are a variety of different strokes involved, however every treatment is tailored to the individual's needs, 
            which makes for a truly unique experience.</p>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-12">
            <img src={SwedishMassage} alt="Swedish massage" className="swedish-image"/>
            </div>
          </div>
          <div class=" row treatment-item" id="aromatherapy">
            <div class="col-lg-2 col-md-3 col-sm-12 image-container no-mobile-image">
              <img src={Aromatherapy} alt="Aromatherapy massage" className="aromatherapy-image"/>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-12">
              <h4>Aromatherapy</h4>
              <div class="price">
              <p>1 hour - £45 <span class="price-span">1 hour 30 mins - £65</span></p>
              </div>
              <p>Aromatherapy massage is a truly indulgent type of massage with slow, soft, blissful strokes.  
              This is the perfect massage for some who enjoys feather-like touch and isn’t keen on working 
              out knots. Not only does the client enjoy blissful strokes, this type of therapy contains 
              specially blended essential oils (highly concentrated plant oils), which are selected for the client 
              to promote positive and beneficial changes in  mind, body and soul.</p>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-12 image-container mobile-image">
              <img src={Aromatherapy} alt="Aromatherapy massage" className="aromatherapy-image"/>
            </div>
          </div>
          <div class="row treatment-item" id="reflexology">
            <div class="col-lg-8 col-md-7 col-sm-12">
              <h4>Reflexology</h4>
              <div class="price">
              <p>1 hour - £45 <span class="price-span">1 hour 30 mins - £65</span></p>
              </div>
              <p>Reflexology is a type of massage where pressure is applied to your feet with the aim of achieving homeostasis. Reflexologists believe 
                that certain areas of the feet are linked to organs and systems in the body. Reflexology consists of having your feet pressed and massaged 
                in a systematic way, stimulating the corresponding areas of the feet to organs in your body. This is a beautiful, relaxing and healing treatment 
                that’s guaranteed to make even the saddest feet happy again!</p>
              </div>
              <div class="col-lg-4 col-md-5 col-sm-12">
                <img src={Reflexology} alt="Reflexology" class="reflexology-image"/>
              </div>
            </div>
            <div class="row treatment-item" id="reiki">
              <div class="col-lg-4 col-md-5 col-sm-12 no-mobile-image">
                <img src={Reiki} alt="Reiki" class="reiki-image"/>
              </div>
              <div class="col-lg-8 col-md-7 col-sm-12">
                <h4>Reiki</h4>
                <div class="price">
                <p>1 hour - £45 <span class="price-span">1 hour 30 mins - £65</span></p>
                </div>
                <p>Reiki is an energy balancing healing developed in Japan during the early part of the 20th Century. 
                  Reiki works by balancing the body’s energy field and energy centres (chakras) with the assistance of  
                  harnessed ‘Universal Energy’. Reiki works to relieve stress and promote deep states of relaxation that 
                  can aid the body’s natural healing processes.</p>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-12">
                <img src={Reiki} alt="Reiki" class="reiki-image mobile-image"/>
              </div>
              </div>
              <div class="row treatment-item" id="indian-head-massage">
              <div class="col-lg-9 col-md-9 col-sm-12">
              <h4>Indian Head Massage</h4>
              <div class="price">
              <p>1 hour - £45 <span class="price-span">1 hour 30 mins - £65</span></p>
              </div>
              <p>Indian Head Massage originates from India and is over 5000 years old. It is believed to not only relieve the person's physical ailments 
                  but promote emotional wellness too. Indian Head is the perfect treatment for those who work at a desk or suffer from tension headaches/migraine as 
                  it is a thorough treatment that solely focuses on the upper back, neck and head. Traditionally this therapy is done in a chair, sitting upright however 
                  we have adapted this treatment for a massage bed, which allows the client to relax fully.</p>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12">
                  <img src={IndianHead} alt="Indian Head Massage" class="indian-head-image"/>
                  </div>
                </div>
        </div>
      <div class="col-md-12 menu-column-header mother-baby-treatments">
    
      <div class="row treatment-item" id="pregnancy-massage">
            <div class="col-lg-8 col-md-7 col-sm-12">
            <h4>Pregnancy Massage</h4>
            <div class="price">
              <p>1 hour - £50 <span class="price-span">1 hour 30 mins - £65</span></p>
            </div>
            <p>There are two types of pregnancy massage: prenatal, which you receive during your pregnancy, and postnatal, 
              which you have within the first few weeks after giving birth. Prenatal massage is a great way to get rid of aches, 
              pains, anxiety and discomfort. Both are incredibly relaxing, relieving the strains of pregnancy. Prenatal massage 
              can help with a multitude of things, from back pain to even morning sickness! It improves circulation, and increases 
              energy levels. Postnatal massage helps your body to get back into shape, ease sore spots, and reduces tension. Plus, 
              it gives you time to yourself. Pregnancy Massage is a treatment no expectant mother should do without!</p>
              </div>
              <div class="col-lg-4 col-md-5 col-sm-12">
              <img src={Pregnancy} alt="Pregnant woman" className="pregnancy-image"/>
              </div>
          </div>
          <div class="row treatment-item" id="maternity-reflexology">
            <div class="col-lg-4 col-md-5 col-sm-12 no-mobile-image">
            <img src={PregnancyReflexology} alt="Maternity reflexology massage" className="maternity-reflexology-image"/>
            </div>
            <div class="col-lg-8 col-md-7 col-sm-12">
            <h4>Maternity Reflexology</h4>
            <div class="price">
              <p>1 hour - £50 <span class="price-span">1 hour 30 mins - £65</span></p>
            </div>
            <p>Maternity Reflexology is aimed specifically at women during pre-conception, pregnancy, labour and the post-natal period.  
              It can also be used to help couples experiencing fertility challenges. During your pregnancy, your body will go through 
              significant changes. These changes will affect the emotional, hormonal and physiological balance of your body. Reflexology 
              can help to alleviate or prevent discomfort arising from this imbalance and restore the body’s equilibrium. Research has shown 
              that regular reflexology treatments during pregnancy can shorten the duration of labour, with many women requiring less pain-relief.</p>
              <div class="col-lg-4 col-md-5 col-sm-12 mobile-image">
            <img src={PregnancyReflexology} alt="Maternity reflexology massage" className="maternity-reflexology-image"/>
            </div>
              </div>
          </div>
          <div class="row treatment-item" id="labour">
            <div class="col-md-9 col-sm-12">
            <h4>Labour</h4>
            <div class="price">
              <p>Contact Laura for pricing.</p>
            </div>
            <p>An experienced Maternity Therapist can be arranged to be with you during the early stages of labour to assist the expectant mother 
              with relaxing and preparing herself for birth.</p><br/>
              <p>Laura has an HNC in Childcare and Education and has worked in private nurseries and as a private nanny for over 18 years.
                She can help establish a routine for your child, give tips on reflux, weaning, sleep training and much more. </p>
                </div>
                <div class="col-md-3 col-sm-12">
                <img src={Labour} alt="Pregnant woman" className="labour-image"/>
                </div>
          </div>
          <div class="row treatment-item" id="baby-massage">
        <div class="col-lg-4 col-md-5 col-sm-12 no-mobile-image">
            <img src={Baby} alt="Baby massage" className="baby-image"/>
            </div>
            <div class="col-lg-8 col-md-7 col-sm-12">
            <h4>Baby Massage</h4>
            <div class="price">
              <p>4 private weekly 1 hour sessions - £100*<br/>(Group sessions are possible, up to 6 mothers and babies at a time.)</p>
            </div>
            <p>If you’ve recently experienced the joy of having a baby, there will undoubtedly be a lot of 
              ideas running through your head as to how to minimise the stress and pain your child experiences 
              in their first few months of life. One of the most effective techniques for improving the health 
              of your child is baby massage. In fact, learning special techniques on your infant can have amazing 
              benefits, such as promoting better sleep, reducing crying, and strengthening the bond between parent 
              and child.<br/> *Sessions only available during the day unless arranged in advance.</p>
              <div class="col-lg-4 col-md-5 col-sm-12 mobile-image">
            <img src={Baby} alt="Baby massage" className="baby-image"/>
            </div>
              </div>
      </div>
      </div>
      </div>
      <p class='menu-contact'><a href="/contact" className="contact-link">Contact us</a> for more information.</p>
    </Layout>
  )
}