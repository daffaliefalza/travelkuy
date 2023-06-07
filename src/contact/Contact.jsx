import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__title">
        <h2>Contact Us</h2>
        <p>Silahkan kontak kami jika terdapat kendala :-)</p>
      </div>
      <div className="contact__wrapper">
        <div className="information">
          <div className="address">
            <h4>Address</h4>
            <p>
              Jalan Patriot.
              <br />
              Bekasi Barat, Indonesia, <br /> 11621
            </p>
          </div>
          <div className="phone">
            <h4>Phone</h4>
            <span>555-1142-331</span>
          </div>
          <div className="email">
            <h4>Email</h4>
            <span>TravelKuy@.co.id</span>
          </div>
        </div>
        <div className="contact-form">
          <h2>Kirim Pesan</h2>
          <form action="#">
            <input type="text" placeholder="Nama Lengkap" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Tulisan pesanmu..." />
            <button className="button">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
