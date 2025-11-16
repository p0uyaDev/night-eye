import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={props.image}
            className="max-w rounded-xl shadow-2xl"
            alt={`Image for: ${props.title}`}
          />
          <div className="p-2">
            <h1 className="text-5xl font-bold text-secondary">{props.title}</h1>
            <p className="py-6">{props.description}</p>
            <Link className="btn btn-primary" to={props.buttonLink}>
              {props.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
