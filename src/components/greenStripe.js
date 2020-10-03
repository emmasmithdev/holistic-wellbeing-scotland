import React from "react"

export default function GreenStripe(props) {
    return (
        <div class="row green-stripe-container">
        <div class="green-stripe">
            <p className="green-stripe-info">{props.firstLine}</p>
            <p className="green-stripe-info">{props.secondLine}</p>
        </div>
        </div>
    )}