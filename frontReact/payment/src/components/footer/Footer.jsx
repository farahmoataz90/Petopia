import React from 'react';
import './footer.css';
import cat from './images/cta-banner.png';
import backG from './images/cta-bg.jpg';

function Footer() {
  return (
    <>
    <section className="cta has-bg-image" aria-label="cta">
        <div className="container">

          <figure className="cta-banner">
            <img src={cat} width="900" height="660" loading="lazy" alt="cat" className="w-100"/>
          </figure>

          <div className="cta-content">

            <h2 class="h2 section-title">Taste it, love it or we’ll replace it… Guaranteed!</h2>

            <p className="section-text">
              At Petio, we believe your dog and cat will love their food so much that if they don’t … we’ll help you
              find a
              replacement. That’s our taste guarantee.
            </p>

            <a href="/" className="btn">Find out more</a>

          </div>

        </div>
      </section>
    </>
  )
}

export default Footer