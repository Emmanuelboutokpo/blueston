import React from 'react'
import Navbar from '../../components/navbars/Navbar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import BackTop from '../../components/backToTop/BackTop';
import Don from '../../components/don/Don';

const About = () => {
 const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
     <>
       <Navbar /> 
      <main id="main">
  <section id="breadcrumbs" className="breadcrumbs">
    <div className="container">
      <ol>
        <li><Link to='/' className="animate__fadeInUpe">Accueil</Link></li>
        <li>A propos</li>
      </ol>
      <h2>A propos</h2>
    </div>
  </section>
  <section id="about" className="about">
    <div className="container">
    <div className="section-title">
    <h2>BLUE'STON, une entreprise de référence </h2>
   </div>
      <div className="row">
        <div className="col-lg-6">
          <img src="assets/Gmail/img-1.jpg" className="img-fluid" alt="img" />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content">
          <p className="fst-italic">
          Notre entreprise est spécialisée dans le domaine de la communication, du développement de l'énergie et de l'éducation. Nous sommes une équipe dynamique et créative, dédiée à repousser 
          les frontières de l'innovation dans trois secteurs clés. 
          Notre mission est d'apporter des solutions novatrices, divertissantes et
           éducatives tout en contribuant activement à un avenir plus durable dans :
          </p>
          <ul>
            <li><i className="bi bi-check-circle" />La santé</li>
            <li><i className="bi bi-check-circle" /> La charité</li>
            <li><i className="bi bi-check-circle" /> L'éducation</li>
          </ul>
          <p>
            Mettre en place un système pour renforcer les soins de santé universels
           et universellement accessible à tous, peu importe la situation financière.<br /> 
           Venir en aide aux personnes en situation d'extrême vulnérabilité. <br />
           Assurer à toute une éducation équitable, de qualité et des possibilités d'apprentissage tout au long de la vie.
           </p>
        </div>
      </div>
    </div>
  </section> 
 <section id="team" className="team">
  <div className="container">
  <div className="section-title">
    <h2> Notre Equipe</h2>
   </div>
    <div className="row">
      <div className="col-lg-3">
        <div className="member">
          <img src="assets/Gmail/stone.png" alt="img" />
          <h4>Stone BOSTON</h4>
          <span>Directeur Générale</span>
          <p>
            Suivez le sur les reseaux sociaux :
          </p>
          <div className="social">
            <span><i className="bi bi-twitter" /></span>
            <span><i className="bi bi-facebook" /></span>
            <span><i className="bi bi-instagram" /></span>
            <span><i className="bi bi-linkedin" /></span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="member">
          <img src="assets/Gmail/jerry.png" alt="img" />
          <h4>Jerry KETONOU</h4>
          <span>Assistant de Direction</span>
          <p>
            Suivez le sur les reseaux sociaux :
          </p>
          <div className="social">
            <span><i className="bi bi-twitter" /></span>
            <span><i className="bi bi-facebook" /></span>
            <span><i className="bi bi-instagram" /></span>
            <span><i className="bi bi-linkedin" /></span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="member">
          <img src="assets/Gmail/black.png" alt="img" />
          <h4>Black WINNER</h4>
          <span>Photographe</span>
          <p>
            Suivez le sur les reseaux sociaux :
          </p>
          <div className="social">
            <span><i className="bi bi-twitter" /></span>
            <span><i className="bi bi-facebook" /></span>
            <span><i className="bi bi-instagram" /></span>
            <span><i className="bi bi-linkedin" /></span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="member">
          <img src="assets/Gmail/jessy.png" alt="img"/>
          <h4>Jessy --</h4>
          <span>Collaboratrice</span>
          <p>
            Suivez le sur les reseaux sociaux :
          </p>
          <div className="social">
            <span><i className="bi bi-twitter" /></span>
            <span><i className="bi bi-facebook" /></span>
            <span><i className="bi bi-instagram" /></span>
            <span><i className="bi bi-linkedin" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="clients" className="clients">
  <div className="container">
    <div className="section-title">
      <h2>Sponsors</h2>
    </div>
    <Carousel 
    responsive={responsive}
    showDots={true}
    draggable={true}
    swipeable={false}
    arrows={false}
    >
  <div>
    <img src="assets/Gmail/logo_itel.jpg" className="testimonia" alt="img" /> 
  </div>
  <div>
  <img src="assets/Gmail/wegalspace.jpg" className="testimonia" alt="img" />
  </div>
  <div>
  <img src="assets/Gmail/download.jpg" className="testimonia" alt="img" />
  </div>
  <div>
  <img src="assets/Gmail/Moov_Africa_logo.png" className="testimonia" alt="img" />
  </div>
</Carousel>
  </div>
</section>
</main>
<Footer /> 
<BackTop/>
     <Don />
     </>
  )
}

export default About