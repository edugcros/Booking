import "./featured.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHotel } from "../../store/apiCalls";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getHotel(dispatch);
  }, [dispatch]);

  const city = useSelector((state) =>
    state.hotel.list.map((hotel) => hotel.city)
  );

  const { data } = useFetch(`/api/hotels/countByCity?cities=${city}`);
  console.log(data);

  return (
    <div className="featured">
      {
        <>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/originals/de/6b/65/de6b65e956e6f26807d17cd9b7e2936f.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Edinburgo</h1>
              <h2> {data[3]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.vivireuropa.com/wp-content/uploads/2014/01/12074553285_694e1e2952_b.jpg.webp"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Brujas</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Featured;
