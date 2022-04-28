import { useEffect, useState } from "react";

const useComments = (param) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [startedFetch, setStartedFetch] = useState(false);
  const [endOfComments, setEndOfComments] = useState(false);

  const url = `http://localhost:3000${param}/${data.length}`;

  const refresh = () => {
    setLoading(true);
  };

  useEffect(() => {
    const loadData = async () => {
      setStartedFetch(true);
      try {
        console.log("fetching");
        const data = await fetch(url);
        if (!data.ok) {
          throw new Error("Could not fetch the resource");
        }
        const jsonData = await data.json();
        setData((prev) => {
          return [...prev, ...jsonData];
        });
        if (jsonData.length <= 1) {
          setEndOfComments(true);
        } else {
          setEndOfComments(false);
        }

        setLoading(false);
        setStartedFetch(false);
      } catch (e) {
        console.log(e);
      }
    };
    if (loading && !startedFetch) {
      loadData();
    }
  }, [loading, startedFetch, url]);

  return [loading, data, refresh, endOfComments];
};

export default useComments;
