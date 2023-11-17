import info_icon from "../images/info-icon.png";
import exclusiveicon from "../images/holiday-icon.png";

function Card(props) {
  return (
    <div className="card position-relative">
      {props.isFirst && (
        <img
          src={exclusiveicon}
          className="position-absolute"
          style={{ top: "1em", right: "1em" }}
          alt="exclusive package"
        />
      )}
      <img src={props.src} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <h2 className="card-title text-uppercase text-success fs-4 fw-bolder">
          {props.title}
        </h2>
        <h3 className="card-text fs-5 fw-bold">{props.desc}</h3>
        <div className="mt-4">
          <a href="#" className="text-decoration-none text-black">
            Info{" "}
            <span>
              <img src={info_icon} alt="info" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
