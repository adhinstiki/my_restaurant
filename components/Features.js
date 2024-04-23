import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const Features = () => {
  return (
    <div className="container features">
      <div className="row">
        <div className="col-lg-6 left-column">
          <div className="image-content">
            <Image
              src="/images/chef.jpg"
              width={667}
              height={710}
              alt="Content Image"
            />
          </div>
        </div>
        <div className="col-lg-6 right-column">
          <h1>
            WE ARE SPECIALIZED <br /> IN SPICY MODERN FUSION FOOD
          </h1>
          <h2>THE ART OF COOKING</h2>
          <hr />
          <p>
            Morbi leo risus, porta ac consectetur ac, vesti bulum at eros.
            Aenean lacinia bibendum nulla sed consec us eget urna mollis ornare
            vel euleo. Nullam id dolor id nibh ultricies vehicula ut id elit.
            Cum sociis natoque penatibus et magnis dis parturient monte siculus
            mus.Maecenas sed diam eget risus varius blandit sit amet non magna.
          </p>
          <Image
            src="/images/signature2.png"
            width={216}
            height={81}
            alt="Signature Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
