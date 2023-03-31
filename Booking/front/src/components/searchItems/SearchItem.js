import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img
        src={
          "https://barilocheturismo.gob.ar/images/actividades/excursiones-lacustres/isla-victoria/isla-victoria-02.jpg"
        }
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating > 8 ? (
          <div className="fpRating">
            <button>{item.rating}</button>
            <span>Excellent</span>
          </div>
        ) : item.rating >= 5 ? (
          <div className="fpRating">
            <button>{item.rating}</button>
            <span>Very Good</span>
          </div>
        ) : (
          <div className="fpRating">
            <button>{item.rating}</button>
            <span>Bad</span>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
