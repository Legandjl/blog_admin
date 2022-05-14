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
      const jsonData = await data.json();
      if (data.status === 400) {
        setLoading(false);
        nav(`/oops`, { replace: true });
        return;
      }
      if (data.status === 401) {
        setLoading(false);
        nav(`/unauthorised`, { replace: true });
        return;
      }
      if (data.status === 404) {
        console.log(data.error);
        setLoading(false);
        nav(`/404`, { replace: true });
        return;
      }
      if (!data.ok) {
        throw new Error("Could not fetch the resource");
      }
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
