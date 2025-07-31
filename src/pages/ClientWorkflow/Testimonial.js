import React from 'react';
import './Testimonial.css'; 
import PajecImg from '../../resources/images/Partnership/Pajec.png';


const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h1><b>Our Client Praises the Smooth Project Start with IZSoftwares</b></h1>
      </div>
      <div className="testimonial-content">
          <p>
            IZSoftwares pleasantly surprised us with their collaborative approach right from the start. The initial agreement process was straightforward and clear, allowing us to quickly begin working on our requirements.
          </p>
          <p className="testimonial-author">
            Martin Toko, Vice-president, PAJEC Cameroon
          </p>
        <div className="testimonial-logo">
          <img src={PajecImg} alt="Pajec Cameroon" />
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
