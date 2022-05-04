import { useEffect, useState } from "react";
import useFetchData from "./useFetchData";

const useLoadData = (param) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [fetchData, fetchInProgress] = useFetchData();

  const refresh = () => {
    setLoading(true);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonData = await fetchData(param, {});
        setData(jsonData);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    if (loading && !fetchInProgress) {
      loadData();
    }
  }, [fetchData, fetchInProgress, loading, param]);

  return [loading, data, refresh];
};

export default useLoadData;
