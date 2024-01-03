import React from 'react'
import Navbar from '../../components/navbars/Navbar'
import Footer from '../../components/footer/Footer'
import BackTop from '../../components/backToTop/BackTop'
import Banner from '../../banner/banners/Banner'
import './home.css'
import { FaCalendar, FaLocationArrow } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import Don from '../../components/don/Don'

const Home = () => {
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
     <Navbar/> 
       <Banner />
  <main id="main">
  
  <section id="featured" className="featured">
    <div className="container">
      <div className="row">
      <div className="section-title">
    <h2>Notre plan d'action </h2>
   </div>
    
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
  <section id="counts" className="counts">
  <div className="container">
  <div className="section-title">
    <h2> Nos réalisations </h2>
   </div>
    <div className="row no-gutters">
      <div className="col-lg-3 col-md-6  mb-4 d-md-flex align-items-md-stretch">
        <div className="counts-box">
         <div className="viser">
           <img src="assets/Gmail/ouidah.jpg" className="img-fluid" alt="img"/>      
         </div>
         <div className="vise">
         <div className="viset">
           <div className="viset">
             <FaLocationArrow />
             <span>Ouidah </span> 
           </div>
           <div className="viset">
             <FaCalendar />
             <span>15 Septembre 2023</span> 
           </div>
         </div>
         <span className="purecounter" />
         <h6>L'ORPHELINAT ESPOIR D'ENFANT DE OUIDAH</h6>
          <p>Don physique aux enfants de l’orphelinat Espoir d’enfant de Ouidah avec l'appui d'ITEL et distribution de kit à quelques habitant valeureux de la ville</p>
          <Link to='/about' className="animate__fadeInUpe">Consulter la page »</Link>
                
         </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 d-md-flex align-items-md-stretch">
      <div className="counts-box">
         <div className="viser">
           <img src="assets/Gmail/s_cotonou.jpg" className="img-fluid" alt="img" />      
         </div>
         <div className="vise">
         <div className="viset">
           <div className="viset">
             <FaLocationArrow />
             <span>TOKPA</span> 
           </div>
           <div className="viset">
             <FaCalendar />
             <span>28 Octobre 2023</span> 
           </div>
         </div>
         <span className="purecounter" />
         <h6>MAMAN DU MARCHÉ TOKPA</h6>
          <p>Sensibilisation sur le cancer de sein au marché Tokpa par l’entreprise BLUE’STON avec l'appui du Groupe Ruve, Rose art, Class Men Look et Ninos Gloss & Glasse.</p>
          <Link to='/about' className="animate__fadeInUpe">Consulter la page »</Link>       
         </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 d-md-flex align-items-md-stretch">
      <div className="counts-box">
         <div className="viser">
           <img src="assets/Gmail/img3_3.jpg" className="img-fluid" alt="img" />      
         </div>
         <div className="vise">
         <div className="viset">
           <div className="viset">
             <FaLocationArrow />
             <span>OJAP</span> 
           </div>
           <div className="viset">
             <FaCalendar />
             <span>24 novembre 2023</span> 
           </div>
         </div>
         <span className="purecounter" />
          <h6>L’ORPHELINAT JEUNESSE AMBITION</h6>
          <p>Don physique aux enfants de l’orphelinat Jeunesse Ambition de Porto-novo avec l'appui du centre d’affaire Wegal Space</p>
          <Link to='/about' className="animate__fadeInUpe">Consulter la page »</Link>      
         </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 d-md-flex align-items-md-stretch">
      <div className="counts-box">
         <div className="viser">
           <img src="assets/Gmail/ze.jpg" className="img-fluid" alt="img" />      
         </div>
         <div className="vise">
         <div className="viset">
           <div className="viset">
             <FaLocationArrow />
             <span>Zè</span> 
           </div>
           <div className="viset">
             <FaCalendar />
             <span>17 Août 2023</span> 
           </div>
         </div>
         <span className="purecounter" />
         <h6>L'ORPHELINAT DEMEURE D'AMOUR DE Zè</h6>
          <p>Don matériel aux enfants de l'orphelinat demeure d'amour de Zé par l’entreprise BLUESTON. Cette intervention sociale s'articule autour de quatre points.</p>
          <Link to='/about' className="animate__fadeInUpe">Consulter la page »</Link>      
         </div>
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

</main>

      <Footer />
     <BackTop/>
     <Don />

    </>
  )
}

export default Home
