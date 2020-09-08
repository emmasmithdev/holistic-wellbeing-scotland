import React from "react"
import Layout from "../components/layout" 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import HomeImages from "../components/homeImages"
import GreenStripe from "../components/greenStripe"
import HomeContainer from "../containers/homeContainer"
import GetInTouch from "../components/getInTouch"

export default function Home() {
  return (
   <Layout>
     <HomeImages/>
     <GreenStripe/>
     <HomeContainer/>
     <GetInTouch/>
   </Layout>
  
  )
}
