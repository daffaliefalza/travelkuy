import React from "react";
import "./About.css";
import daffa from "../assets/img/daffa2.jpeg";
import topias from "../assets/img/topias.jpg";
import notail from "../assets/img/notail.jpg";
import richard from "../assets/img/johnrichard.jpg";
import anna from "../assets/img/annaspencer.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about__title">
        <h2>OUR TEAM</h2>
      </div>
      <div className="about__slogan">
        <p>
          "Kebersamaan itu seperti permulaan, kemudian menjaga kebersamaan
          merupakan kemajuan dan bekerja bersama merupakan keberhasilan."
        </p>
      </div>
      <div className="about__gallery">
        <div className="team-one card">
          <img src={daffa} alt="" />
          <h2>Andi Daffa Liefalza</h2>
          <h3>Front end Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            deserunt quas dolorum impedit eum eveniet laborum, atque ipsum
            repudiandae aliquam.
          </p>
        </div>
        <div className="team-two card">
          <img src={richard} alt="" />
          <h2>John Richard</h2>
          <h3>CEO / FOUNDER</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            deserunt quas dolorum impedit eum eveniet laborum, atque ipsum
            repudiandae aliquam.
          </p>
        </div>
        <div className="team-three card">
          <img src={topias} alt="" style={{ objectFit: "cover" }} />
          <h2>Topson</h2>
          <h3>Backend Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            deserunt quas dolorum impedit eum eveniet laborum, atque ipsum
            repudiandae aliquam.
          </p>
        </div>
        <div className="bottom-team">
          <div className="team-four card">
            <img src={notail} alt="" />
            <h2>Notail Johan</h2>
            <h3>System Analyst</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate deserunt quas dolorum impedit eum eveniet laborum,
              atque ipsum repudiandae aliquam.
            </p>
          </div>
          <div className="team-five card">
            <img src={anna} alt="" style={{ objectFit: "cover" }} />
            <h2>Anna Spencer</h2>
            <h3>Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate deserunt quas dolorum impedit eum eveniet laborum,
              atque ipsum repudiandae aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
