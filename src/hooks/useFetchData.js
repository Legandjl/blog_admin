import { useState } from "react";

const useFetchData = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = async (params, options) => {
    const url = `http://localhost:3000${params}`;
    setLoading(true);
    const data = await fetch(url, options);
    if (!data.ok) {
      throw new Error("Could not fetch the resource");
    }
    const jsonData = await data.json();
    setLoading(false);
    return jsonData;
  };

  return [fetchData];
};

export default useFetchData;
