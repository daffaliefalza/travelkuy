import React from "react";
import "./Services.css";
import labuanBajo from "../assets/img/labuan_bajo.png";
import lombok from "../assets/img/lombok.png";
import bali from "../assets/img/bali.png";
import belitung from "../assets/img/belitung.png";

const Services = () => {
  return (
    <section className="services">
      <div className="services__title">
        <h2>Our Services</h2>
      </div>

      <div className="services__destination">
        <div className="services__destination-one">
          <img src={labuanBajo} alt="" />
          <h3>Labuan Bajo</h3>
          <p>
            Labuan Bajo merupakan sebuah surga tersembunyi yang ada di Indonesia
            Bagian Timur.Desa ini terletak di Kecamatan Komodo, Kabupaten
            Manggarai Barat,Provinsi Nusa Tenggara Timur.Labuan Bajo adalah
            salah satu dari lima Destinasi Super Prioritas yang sedang
            dikembangkan di indonesia.
          </p>
          <button className="button">Pesan Tiket</button>
        </div>
        <div className="services__destination-two">
          <img src={bali} alt="" />
          <h3>Bali</h3>
          <p>
            Siapa pun tak ada yang bisa menyangkal keindahan yang ditawarkan
            Pulau Dewata. Baru-baru ini, Bali didapuk menjadi destinasi paling
            populer di dunia versi Tripadvisor Travellers, Choice tahun 2021.
            Tentu saja, bentangan alamnya yang indah berpadu sempurna dengan
            kearifan lokalnya yang istimewa menjadikan Bali sebagai destinasi
            #DiTravelKuy yang patut Sobat kunjungi setidaknya sekali seumur
            hidup!
          </p>
          <button className="button">Pesan Tiket</button>
        </div>
        <div className="services__destination-three">
          <img src={lombok} alt="" />
          <h3>Lombok</h3>
          <p>
            Dengan pantai-pantai nan memesona, Gunung Rinjani yang indah, serta
            pemandangan bawah laut yang spektakuler, Lombok di Nusa Tenggara
            Barat akan memanjakan mata Sobat Travelers baik saat berada di darat
            maupun di air. Tidak heran, jika pulau kecil ini menjelma menjadi
            destinasi paling populer di Nusa Tenggara Barat.
          </p>
          <button className="button">Pesan Tiket</button>
        </div>
        <div className="services__destination-four">
          <img src={belitung} alt="" />
          <h3>Belitung</h3>
          <p>
            Sobat Pesona pernah nonton film Laskar Pelangi, kan? Indah banget
            kan latar filmnya? Nah, film yang masuk ke dalam box office
            Indonesia tersebut berlatar di Pulau Belitung, lho! Jika Sobat
            Travelers punya rencana liburan #DiTravelKuyAja, bisa banget
            memasukkan Pulau Belitung ke dalam bucket-list! Ya, pulau yang
            terletak di Provinsi Kepulauan Bangka Belitung ini punya jutaan
            wisata yang siap membuat Sobat TravelKuy berdecak kagum karena
            keindahannya.
          </p>
          <button className="button">Pesan Tiket</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
