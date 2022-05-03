import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

const useComments = (param) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [startedFetch, setStartedFetch] = useState(false);
  const [endOfComments, setEndOfComments] = useState(false);

  const url = `${param}/${data.length}`;

  const refresh = () => {
    setLoading(true);
  };

  const removeFront = (id) => {
    setData((prev) => {
      return prev.filter((comment) => {
        return comment._id !== id;
      });
    });
  };

  const handleDel = async (id) => {
    try {
      await fetchData(`/admin/comment/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
      });
      removeFront(id);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setStartedFetch(true);
      try {
        const data = await fetchData(url, {});
        setData((prev) => {
          return [...prev, ...data];
        });
        if (data.length < 5) {
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

  return [loading, data, refresh, endOfComments, handleDel];
};

export default useComments;
