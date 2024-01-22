import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/dataSlice";

const GetCountry = () => {
  const dispatch = useDispatch();
  const { loading, error, items } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);


  const [filterValue, setFilterValue] = useState("");
  const data = items.slice(0, 24).filter((item) =>
    item.name.common.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  if (loading && !error) {
    return <div className="get-country">Loading...</div>;
  }

  if (error) {
    return <div className="get-country">Error: {error}</div>;
  }

  return (
    <div className="get-country">
      <div className="heading">
        <h2>Data List</h2>
      </div>
      <input
        placeholder="Filter Data"
        type="text"
        id="filter"
        value={filterValue}
        onChange={handleFilterChange}
      />
      <ul>
        {data.map((item) => (
          <li key={item.name.common}>{item.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetCountry;
