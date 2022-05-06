import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import useFetchData from "./useFetchData";

const useLoadData = (param) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [fetchData, fetchInProgress] = useFetchData();
  const { token } = useContext(UserContext);

  const refresh = () => {
    setLoading(true);
  };

  useEffect(() => {
    const loadData = async () => {
      const jsonData = await fetchData(param, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
      });
      setData(jsonData);
      setLoading(false);
    };
    if (loading && !fetchInProgress) {
      loadData();
    }
  }, [fetchData, fetchInProgress, loading, param, token]);

  return [loading, data, refresh];
};

export default useLoadData;
