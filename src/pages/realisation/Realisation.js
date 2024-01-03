import React from 'react'
import Carousel from "react-multi-carousel";
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbars/Navbar'
import { FaCalendar, FaLocationArrow } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BackTop from '../../components/backToTop/BackTop';
import Don from '../../components/don/Don';

const Realisation = () => {
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
        <li>réalisation</li>
      </ol>
      <h2>réalisation</h2>
    </div>
  </section>
    <section id="counts" className="counts">
  <div className="container">
    <div className="row no-gutters">
      <div className="col-lg-3 col-md-6 mb-4 d-md-flex align-items-md-stretch">
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
      <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
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
     <Don/>
   </>
  )
}

export default Realisation
 