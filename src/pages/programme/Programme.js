import React from 'react'
import Carousel from "react-multi-carousel";
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbars/Navbar'
import { Link } from 'react-router-dom'
import BackTop from '../../components/backToTop/BackTop';
import Don from '../../components/don/Don';

const Programme = () => {
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
     <section id="breadcrumbs" className="breadcrumbs">
    <div className="container">
      <ol>
        <li><Link to='/' className="animate__fadeInUpe">Accueil</Link></li>
        <li>Programme</li>
      </ol>
      <h2>Programme</h2>
    </div>
  </section>
     <section id="featured" className="featured">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="icon-box">
            <i className="bi bi-heart" />
            <h3>Santé</h3>
            <p>Mettre en place un système pour renforcer les soins de santé universels et universellement accessible à tous, peu importe la situation financière. </p>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="icon-box">
            <i className="bi bi-bag" />
            <h3>Charité</h3>
            <p>Venir en aide aux personnes en situation d'extrême vulnérabilité. Mobiliser des ressources afin d'aider les personnes dans le besoin et d'encourager la générosité.</p>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="icon-box">
            <i className="bi bi-book" />
            <h3>Éducation</h3>
            <p>Assurer à toute une éducation équitable, de qualité et des possibilités d'apprentissage tout au long de la vie. Contribuer à l'amélioration de l'environnement scolaire tout en stimulant l'excellence.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

<section id="testimonials" className="testimonials">
  <div className="container">
    <div className="section-title">
      <h2>Temoignage</h2>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="testimonial-item">
          <img src="assets/img/team/team-1.jpg" className="testimonial-img" alt="img" />
          <h3>Saul Goodman</h3>
          <h4>Ceo &amp; Founder</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left" />
            Collaborer avec Blue'ston a été un tournant majeur pour notre entreprise. Leur équipe exceptionnelle a pris nos idées et les a transformées en une réalité impressionnante. Chaque défi a été relevé avec expertise, et le résultat final a dépassé toutes nos attentes. Blue'ston n'est pas seulement un partenaire, mais un catalyseur de réussite
            <i className="bx bxs-quote-alt-right quote-icon-right" />
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="testimonial-item mt-4 mt-lg-0">
          <img src="assets/img/team/team-2.jpg" className="testimonial-img" alt="img" />
          <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left" />
            "Notre partenariat avec Blue'ston va bien au-delà des contrats. Ils ont démontré un engagement inébranlable envers notre succès, chaque étape du chemin. Leur équipe dédiée et leur expertise ont été les fondements de notre croissance continue. Avec Blue'ston, nous avons trouvé un partenaire pour l'avenir
            <i className="bx bxs-quote-alt-right quote-icon-right" />
          </p>
        </div>
      </div>
      
      <div className="col-lg-4">
        <div className="testimonial-item mt-4 mt-lg-0">
          <img src="assets/img/team/team-3.jpg" className="testimonial-img" alt="img" />
          <h3>Matt Brandon</h3>
          <h4>Freelancer</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left" />
            Blue'ston représente l'excellence opérationnelle. Leur approche méthodique, associée à une compréhension approfondie de nos besoins, a donné naissance à des résultats exceptionnels. Chaque défi a été relevé avec une précision remarquable, et nous sommes reconnaissants d'avoir Blue'ston comme partenaire stratégique.
            <i className="bx bxs-quote-alt-right quote-icon-right" />
          </p>
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
<Footer />
<BackTop/>
     <Don />
     </>
  )
}

export default Programme
