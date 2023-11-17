import Card from "./Card";
import tokyo from "../images/tokyo.jpg";
import london from "../images/london.jpg";
import paris from "../images/paris.jpg";
import newyork from "../images/newyork.jpg";

function Main() {
  return (
    <section className="container my-5 card-section">
      <div className="row g-3">
        <div className="col-md-4 col-xl-3">
          <Card
            src={newyork}
            alt="Newyork"
            title="New York"
            desc="New York Bridge Tour"
            isFirst
          />
        </div>
        <div className="col-md-4 col-xl-3">
          <Card src={paris} alt="Paris" title="Paris" desc="Paris Light Tour" />
        </div>
        <div className="col-md-4 col-xl-3">
          <Card
            src={london}
            alt="London"
            title="London"
            desc="London Royal Palace Tour"
          />
        </div>
        <div className="col-md-4 col-xl-3">
          <Card src={tokyo} alt="Tokyo" title="Tokyo" desc="Tokyo Sushi Tour" />
        </div>
      </div>
    </section>
  );
}

export default Main;
