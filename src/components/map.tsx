import React, { useEffect, useState } from "react";
import Loader from "./loader";

const Map = () => {
  const [data, setData] = useState();

  const getCoordinate = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/get-coordinate`);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoordinate();
  }, []);

  if (!data) {
    return <Loader />;
  }
  return (
    <div>
      <p>Map</p>
    </div>
  );
};

export default Map;
