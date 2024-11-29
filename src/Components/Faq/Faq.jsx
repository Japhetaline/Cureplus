import React from 'react';
import '../Faq/Faq.css';
import WorldHealth from '../Images/WorldHealth.png';
import WorldMedical from '../Images/World_medical.png';
import Unicef from '../Images/Unicef.png';
import Ama from '../Images/Ama.png';
import Isim from '../Images/isim.png';
import Ecedc from '../Images/ecdc.png';

function Faq() {
  return (
    <>
    <section className="faq-section">
      <p className="faq-title">FAQS</p>
      <div className="faq-title_line"></div>
      <div className="faq-container">
        <div className="faq-card">
        <p className="faq-card-title">How do I book an appointment?</p>
          <p className="faq-text">
          Booking an appointment is simple. Just log into the app, browse our list of 
available providers, choose one that suits your needs, and select an available 
time slot. You’ll receive a reminder before your appointment.
          </p>
        </div>
        
        <div className="faq-card">
        <p className="faq-card-title">Can I choose my doctor?</p>
          <p className="faq-text">
          Yes, you can browse our list of doctors, read their profiles, and select the 
one who best matches your needs. If you need help choosing, our system 
can also match you with a doctor based on your symptoms.
          </p>
        </div>

        <div className="faq-card">
        <p className="faq-card-title">Can I get a referral to a specialist?</p>
          <p className="faq-text">
          Yes, if your healthcare provider determines you need specialized care, 
they can refer you to a specialist within our network for further treatment.
          </p>
        </div>

        <div className="faq-card">
        <p className="faq-card-title">What if I have a medical emergency?</p>
          <p className="faq-text">
          Telemedicine is designed for non-emergency situations. If you or 
someone else is experiencing a medical emergency, please call 
emergency services or go to the nearest emergency room.
          </p>
        </div>
      </div>
    </section>

    <section className='sponsors'>
        <img className='sponsors-img' src={WorldHealth} alt="" />
        <img className='sponsors-img' src={WorldMedical} alt="" />
        <img className='sponsors-img' src={Unicef} alt="" />
        <img className='sponsors-img' src={Ama} alt="" />
        <img className='sponsors-img' src={Isim} alt="" />
        <img className='sponsors-img' src={Ecedc} alt="" />
    </section>
    </>
  )
}

export default Faq