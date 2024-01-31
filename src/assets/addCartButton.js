import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddDataToListAction,
  RemoveDataToListAction,
  incrementProductCount,
} from "../redux/apiAction";
function ADDorCancelButton({ id }) {
  const dispatch = useDispatch();
  const data_fetched = useSelector((state) => state.api);
  const { data } = data_fetched;
  const [isADDCart, setAddCart] = useState(true);

  //checking list
  const data_list = useSelector((state) => state.listOfData);
  const data_list_array = data_list.data;

  function handleAddingIntoCart() {
    let listedData = data.find((ite, idx) => ite.id === id);
    const isAlreadyAdded = data_list_array.some((item) => item.id === id);

    if (!isAlreadyAdded) {
      dispatch(AddDataToListAction(listedData));
    }

    dispatch(incrementProductCount(listedData.id, listedData.price));
    setAddCart(false);
  }

  function cancelCartHandle() {
    dispatch(RemoveDataToListAction(id));
    setAddCart(true);
  }
  //console.log(id);
  return (
    <>
      {isADDCart ? (
        <button onClick={handleAddingIntoCart} className="btn1">
          ADD to Cart
        </button>
      ) : (
        <button onClick={cancelCartHandle} className="btn1">
          Cancel
        </button>
      )}
    </>
  );
}

export default ADDorCancelButton;
