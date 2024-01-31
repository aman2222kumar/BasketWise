import { useDispatch, useSelector } from "react-redux";
import Count from "./countingPrice";
function Checkout() {
  const data_list = useSelector((state) => state.listOfData);
  const data_list_array = data_list.data;

  //count data
  let counter = useSelector((state) => state.countData.products);
  let sum = 0;
  for (let i = 0; i < counter.length; i++) {
    sum += counter[i].totalCurrentProductPrice;
  }
  console.log("hello", counter);

  function handleChekout() {
    alert("this is your total amount" + " :" + sum.toFixed(3));
  }
  return (
    <>
      <div className="checkout_container">
        {data_list_array.length > 0 ? (
          <>
            <div className="checkout_list">
              {data_list_array?.map((prod, idx1) => {
                return (
                  <>
                    <div className="checkout_card" key={prod.id}>
                      <div className="img_desc">
                        <img src={prod.image} alt="hello"></img>
                        <div className="description_container">
                          <p className="desc">{prod.description}</p>
                          <p> &#8377;{prod.price}</p>
                        </div>
                      </div>
                      <Count id={prod.id} price={prod.price} />
                    </div>
                  </>
                );
              })}
              <p>Total Rupees:{sum.toFixed(3)}</p>
              <button id="checkout" onClick={handleChekout}>
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="no_data">There is no data available right now..</p>
        )}
      </div>
    </>
  );
}

export default Checkout;
