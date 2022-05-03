import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

const useFetch = (param) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = `${param}`;
  console.log(data);
  const refresh = () => {
    setLoading(true);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonData = await fetchData(url, {});
        setData(jsonData);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    if (loading) {
      loadData();
    }
  }, [loading, url]);

  return [loading, data, refresh];
};

export default useFetch;
