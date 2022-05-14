import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const fetchData = async (params, options) => {
    try {
      const url = `https://intense-chamber-01379.herokuapp.com${params}`;
      setLoading(true);
      const data = await fetch(url, options);
      if (data.status === 401) {
        setLoading(false);
        nav(`/unauthorised`, { replace: true });
        return;
      }
      if (data.status === 404) {
        setLoading(false);
        nav(`/404`, { replace: true });
        return;
      }
      if (!data.ok) {
        throw new Error("Could not fetch the resource");
      }
      const jsonData = await data.json();
      setLoading(false);
      return jsonData;
    } catch (e) {
      setLoading(false);
      nav(`/oops`, { replace: true });
      return;
    }
  };
  return [fetchData, loading];
};

export default useFetchData;
