import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchApiData } from "../redux/apiAction";
import ADDorCancelButton from "./addCartButton";
import StarRating from "./starRating";

function Home() {
  const data_fetched = useSelector((state) => state.api);
  const { loading, error, data } = data_fetched;
  const dispatch = useDispatch();
  console.log(data);

  // const data_list = useSelector((state) => state.listOfData);

  // const data_list_array=data_list.data;

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  if (loading === true) {
    return (
      <>
        <div className="loading_text">
          <p>Data is loading....</p>
        </div>
      </>
    );
  } else if (error) {
    console.log(error);
    return (
      <>
        <div className="loading_text">
          <p>{error}</p>
        </div>
      </>
    );
  }
  return (
    <>
      <main>
        <div className="data_container">
          {data?.length > 0 &&
            data.map((item, index) => {
              return (
                <>
                  <div className="data_card" key={item.id}>
                    <img src={item.image} alt="hii"></img>
                    <p className="desc">{item.description}</p>
                    <StarRating rating={item.rating.rate} />
                    {/* <div className="rate_count">
                        
                     </div> */}
                    <p> &#8377;{item.price}</p>
                    <p className="tag">{item.category}</p>
                    <ADDorCancelButton id={item.id} />
                  </div>
                </>
              );
            })}
        </div>
      </main>
    </>
  );
}

export default Home;
