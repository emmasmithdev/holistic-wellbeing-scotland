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
                <HomeImageQuote image={AndBreathe} alt="A wall of plants with And Breathe written in neon."/>
                <HomeMassageInfo text="With Holistic Wellbeing, you're in safe hands. Every treatment is tailored specifically to your needs."/>
            </div>
            <div class="col-sm-12 col-md-4">
                <HomeImageQuote image={Reflexology} alt="Feet in a basin of water with flowers."/>
                <HomeMassageInfo text="All of our clients are important to us. Everyone is treated as a VIP and receives high quality service and expert skills."/>
            </div>
            <div class="col-sm-12 col-md-4">
                <HomeImageQuote image={EssentialOils} alt="Bottles of essential oils with flowers."/>
                <HomeMassageInfo text="We provide the finest Egyptian cotton linen and homemade aromatherapy balm. Sit back and let us look after you."/>
            </div>
        </div>
        </div>
        </>
    )}