import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EachCard from "./EachCard";

const Random = ({ page }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "https://picsum.photos/v2/list?page=2&limit=20"
        );
        setData(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  

  console.log(data);

  return (
    <div className="flex flex-wrap gap-8 grow justify-center transition-all ease-out">
      {!loading && !data.length == 0
        ? data.map((e) => <EachCard key={e.id} data={e} />)
        : "Loading..."}
    </div>
  );
};

export default Random;
