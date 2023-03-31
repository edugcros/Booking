import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/api/hotels?limit=5");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={
                  "https://barilocheturismo.gob.ar/images/actividades/excursiones-lacustres/isla-victoria/isla-victoria-02.jpg"
                }
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
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
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
