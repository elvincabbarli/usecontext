import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  fetchDataFailure,
  fetchDataStart,
  fetchDataSuccess,
} from "../store/dataSlice";

const GetCountry = () => {
  const dispatch = useDispatch();
  const { loading, error, items } = useSelector((state) => state.data);
  const [filteredItems, setFilteredItems] = useState([]);

  const getData = async () => {
    dispatch(fetchDataStart());
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      dispatch(fetchDataSuccess(response.data.slice(0, 24)));
      setFilteredItems(response.data.slice(0, 24));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };

  const inputRef = useRef();

  const filterData = () => {
    const inputData = inputRef.current.value.toLowerCase();
    const filteredData = items.filter((item) =>
      item.name.common.toLowerCase().includes(inputData)
    );
    setFilteredItems(filteredData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="get-country">
      <div className="heading">
        <h2>Data List</h2>
        <button onClick={getData}>Get Data</button>
      </div>
      <input placeholder="Filter Data" onChange={filterData} ref={inputRef} type="text" id="filter" />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.name.common}>{item.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetCountry;
