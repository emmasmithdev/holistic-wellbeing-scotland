import React from "react"
import Layout from "../components/layout" 
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeImages from "../components/homeImages"
import GreenStripe from "../components/greenStripe"
import HomeContainer from "../containers/homeContainer"
import GetInTouch from "../components/getInTouch"

export default function Home() {
  return (
   <Layout>
     <HomeImages/>
     <GreenStripe firstLine={"Welcome!"} secondLine={"Our Complementary Therapists are fully insured, highly qualified and committed to providing the very best professional treatments."}/>
     <HomeContainer/>
     <GetInTouch/>
   </Layout>
  
  )
}
