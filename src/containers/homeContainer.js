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
                <HomeMassageInfo text="Swedish massage is a relaxing treatment designed to increase circulation, soothe muscles and relieve tension. The 
                adjustment of pressure makes this an ideal massage for everyone."/>
            </div>
            <div class="col-sm-12 col-md-4">
                <HomeImageQuote image={Reflexology} alt="Feet in a basin of water with flowers."
                text="'Laura really knows how to work with the body, getting deeply into every muscle. I feel so relaxed, restored and revitalised. Utter bliss.' - Laura P."/>
                <HomeMassageInfo text="Reflexology is a wonderful, relaxing treatment where the therapist applies pressure to areas of the feet. It is believed that these areas relate to the body's organs."/>
            </div>
            <div class="col-sm-12 col-md-4">
                <HomeImageQuote image={EssentialOils} alt="Bottles of essential oils with flowers."
                text="'Just had the most amazing pregnancy massage ever! Laura is so nice and I felt so at ease, the most relaxed I’ve felt in a while.' - Lauren H."/>
                <HomeMassageInfo text="Aromatherapy massage uses fragrant, therapeutic essential oils that are specially blended to assist your body's healing processes."/>
            </div>
        </div>
        <div class="row">
        <div class="col-sm-12 col-md-4">
            <FindOutMoreButton/>
        </div>
        <div class="col-sm-12 col-md-4 hide-on-mobile">
            <FindOutMoreButton/>
        </div>
        <div class="col-sm-12 col-md-4 hide-on-mobile">
            <FindOutMoreButton/>
        </div>
        </div>
        </div>
        </>
    )}