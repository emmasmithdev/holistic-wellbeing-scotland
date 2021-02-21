import React from "react"
import Layout from "../components/layout" 
import Gallery1 from "../images/gallery1.jpg";
import Gallery2 from "../images/gallery2.jpg";
import Gallery3 from "../images/gallery3.jpg";
import Gallery4 from "../images/gallery4.jpg";
import Gallery5 from "../images/gallery5.jpg";
import Gallery6 from "../images/gallery6.jpg";
import Gallery7 from "../images/gallery7.jpg";

export default function Gallery() {
  return (
    <Layout>
       <div class="col-lg-12">
        <h2 class="about-heading">Gallery</h2>
      </div>
       <div class="flex-container">
         <div class="flex-item">
         <img src={Gallery3} alt="Gallery Image" className="gallery-image"/>
         </div>
         <div class="flex-item">
         <img src={Gallery4} alt="Gallery Image" className="gallery-image"/>
         </div>
         <div class="flex-item">
         <img src={Gallery2} alt="Gallery Image" className="gallery-image"/>
         </div>
         <div class="flex-item">
         <img src={Gallery7} alt="Gallery Image" className="gallery-image"/>
         </div>
         <div class="flex-item">
         <img src={Gallery5} alt="Gallery Image" className="gallery-image"/>
         </div>
         <div class="flex-item">
         <img src={Gallery6} alt="Gallery Image" className="gallery-image"/>
         </div>
         <div class="flex-item">
         <img src={Gallery1} alt="Gallery Image" className="gallery-image"/>
         </div>
    </div>
    </Layout>
  )
}