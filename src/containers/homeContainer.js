import React from "react"
import HomeImageQuote from "../components/homeImageQuote.js"
import HomeMassageInfo from "../components/homeMassageInfo.js"
import Reflexology from "../images/reflexology.jpg"
import AndBreathe from "../images/andBreathe.jpg"
import EssentialOils from "../images/essentialOils.jpg"
import FindOutMoreButton from "../components/findOutMoreButton.js"

export default function HomeContainer() {
    return (
        <>
        <div class="home-container">
        <div class="row">
            <div class="col-sm-12 col-md-4">
                <HomeImageQuote image={AndBreathe} alt="A wall of plants with And Breathe written in neon."
                text="'Laura listened to my concerns carefully and really worked to ease off the stiffness and tension I had been experiencing.' - Charlotte H."/>
                <HomeMassageInfo text="With Holistic Wellbeing, you're in safe hands. Every treatment is tailored specifically to your needs."/>
            </div>
            <div class="col-sm-12 col-md-4">
                <HomeImageQuote image={Reflexology} alt="Feet in a basin of water with flowers."
                text="'Laura really knows how to work with the body, getting deeply into every muscle. I feel so relaxed, restored and revitalised. Utter bliss.' - Laura P."/>
                <HomeMassageInfo text="All of our clients are important to us. Everyone is treated as a VIP and receives a high quality treatment."/>
            </div>
            <div class="col-sm-12 col-md-4">
                <HomeImageQuote image={EssentialOils} alt="Bottles of essential oils with flowers."
                text="'Just had the most amazing pregnancy massage ever! Laura is so nice and I felt so at ease, the most relaxed I’ve felt in a while.' - Lauren H."/>
                <HomeMassageInfo text="We provide everything for the perfect treatment. Sit back and let us look after you."/>
            </div>
        </div>
        <div class="row">
        <div class="col-sm-12 col-md-4">
            <FindOutMoreButton href="/treatments"/>
        </div>
        <div class="col-sm-12 col-md-4 hide-on-mobile">
            <FindOutMoreButton href="/treatments"/>
        </div>
        <div class="col-sm-12 col-md-4 hide-on-mobile">
            <FindOutMoreButton href="/treatments"/>
        </div>
        </div>
        </div>
        </>
    )}