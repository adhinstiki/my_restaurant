import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { FaExpandAlt } from "react-icons/fa";

const CardGrid = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 card-container">
          <div className="card-content">
            <div className="card-image">
              {/* <span className="btn-action">
                <FaExpandAlt />
              </span> */}
              <Image
                src="/images/product-1.jpg"
                width={490}
                height={314}
                alt="Product Image"
              />
            </div>
            <div className="menu-post">
              <h1 className="menu-title">Tuna Roast Source</h1>
              <h1 className="menu-price">$24.5</h1>
            </div>
            <div className="menu-post">
              <h1 className="post-detail">Tuna / Potatoes / Rice</h1>
              <h1 className="menu-highlight">RECOMMENDED</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 card-container">
          <div className="card-content">
            <div className="card-image">
              {/* <span className="btn-action">
                <FaExpandAlt />
              </span> */}
              <Image
                src="/images/product-2.jpg"
                width={490}
                height={314}
                alt="Product Image"
              />
            </div>
            <div className="menu-post">
              <h1 className="menu-title">Roast Pork (4 Sticks)</h1>
              <h1 className="menu-price">$15.5</h1>
            </div>
            <div className="menu-post">
              <h1 className="post-detail">Pork / Veggies / Shoyu</h1>
              <h1 className="menu-highlight">RECOMMENDED</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 card-container">
          <div className="card-content">
            <div className="card-image">
              {/* <span className="btn-action">
                <FaExpandAlt />
              </span> */}
              <Image
                src="/images/product-3.jpg"
                width={490}
                height={314}
                alt="Product Image"
              />
            </div>
            <div className="menu-post">
              <h1 className="menu-title">Salted Fried Chicken</h1>
              <h1 className="menu-price">$20</h1>
            </div>
            <div className="menu-post">
              <h1 className="post-detail">Chicken / Olive Oil / Salt</h1>
              <h1 className="menu-highlight">RECOMMENDED</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 card-container">
          <div className="card-content">
            <div className="card-image">
              {/* <span className="btn-action">
                <FaExpandAlt />
              </span> */}
              <Image
                src="/images/product-4.jpg"
                width={490}
                height={314}
                alt="Product Image"
              />
            </div>
            <div className="menu-post">
              <h1 className="menu-title">Crab With Curry Sources</h1>
              <h1 className="menu-price">$24.5</h1>
            </div>
            <div className="menu-post">
              <h1 className="post-detail">Crab / Potatoes / Rice</h1>
              <h1 className="menu-highlight">RECOMMENDED</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 card-container">
          <div className="card-content">
            <div className="card-image">
              {/* <span className="btn-action">
                <FaExpandAlt />
              </span> */}
              <Image
                src="/images/product-5.jpg"
                width={490}
                height={314}
                alt="Product Image"
              />
            </div>
            <div className="menu-post">
              <h1 className="menu-title">Imported Salmon Steak</h1>
              <h1 className="menu-price">$18.9</h1>
            </div>
            <div className="menu-post">
              <h1 className="post-detail">Salmon / Veggies / Oil</h1>
              <h1 className="menu-highlight">RECOMMENDED</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 card-container">
          <div className="card-content">
            <div className="card-image">
              {/* <span className="btn-action">
                <FaExpandAlt />
              </span> */}
              <Image
                src="/images/product-6.jpg"
                width={490}
                height={314}
                alt="Product Image"
              />
            </div>
            <div className="menu-post">
              <h1 className="menu-title">Baked Potato Pizza</h1>
              <h1 className="menu-price">$12</h1>
            </div>
            <div className="menu-post">
              <h1 className="post-detail">Potato / Bread / Cheese</h1>
              <h1 className="menu-highlight">NEW</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
