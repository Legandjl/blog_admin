import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const { logout } = useContext(UserContext);

  const fetchData = async (params, options) => {
    console.log("fetching");
    try {
      const url = `http://localhost:3000${params}`;
      setLoading(true);
      const data = await fetch(url, options);
      console.log(data.status);
      if (data.status === 401) {
        logout();
      }

      if (!data.ok) {
        throw new Error("Could not fetch the resource");
      }
      const jsonData = await data.json();
      setLoading(false);
      return jsonData;
    } catch (e) {
      console.log("caught an error" + e);
      setLoading(false);
    }
  };
  return [fetchData, loading];
};

export default useFetchData;
