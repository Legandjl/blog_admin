import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const { logout } = useContext(UserContext);

  const fetchData = async (params, options) => {
    try {
      const url = `http://localhost:3000${params}`;
      setLoading(true);
      const data = await fetch(url, options);
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
    }
  };

  return [fetchData];
};

export default useFetchData;
