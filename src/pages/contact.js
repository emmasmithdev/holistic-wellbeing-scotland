import React from "react"
import Layout from "../components/layout" 

export default function Contact() {
  return (
    <Layout>
     <div class="contact-container">
       <h2>Contact Us</h2>
     <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <p><input type="hidden" name="form-name" value="contact" /><br/></p>
      <p><input type="text" name="name" placeholder="Name" /><br/></p>
      <p><input type="email" name="email" placeholder="Email" /></p>
      <textarea name="message" placeholder="Message"></textarea>
      <p><button class="search-button" type="submit">Send</button></p>
    </form>
    </div>
    </Layout>
  )
}