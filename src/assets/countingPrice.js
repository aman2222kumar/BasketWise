import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveDataToListAction,
  decrementProductCount,
  incrementProductCount,
} from "../redux/apiAction";

function Count({ id, price }) {
  const dispatch = useDispatch();
  let counter = useSelector((state) => state.countData.products);
  let count_number = counter.find((pr) => pr.id === id);
  // console.log(counter);
  // console.log(typeof count_number?.count);

  const data_list = useSelector((state) => state.listOfData);
  const data_list_array = data_list.data;
  // console.log("arraaa", data_list_array);

  useEffect(() => {
    if (count_number?.count === undefined) {
      dispatch(RemoveDataToListAction(id));
    }
  }, [count_number?.count]);
  function decrmentHandle() {
    dispatch(decrementProductCount(id, price));
  }

  function incrmentHandle() {
    console.log(id, price);
    dispatch(incrementProductCount(id, price));
  }

  return (
    <>
      <div className="counter_container">
        <h5 onClick={decrmentHandle}>-</h5>
        <p>{count_number?.count}</p>
        <h5 onClick={incrmentHandle}>+</h5>
      </div>
    </>
  );
}

export default Count;
