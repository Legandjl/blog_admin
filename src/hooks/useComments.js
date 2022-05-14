import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

import useFetchData from "./useFetchData";

const useComments = (param) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [endOfComments, setEndOfComments] = useState(false);
  const { token } = useContext(UserContext);

  const url = `${param}/${data.length}`;
  const [fetchData, fetchInProgress] = useFetchData();

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
    await fetchData(`/admin/comment/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });
    removeFront(id);
  };

  useEffect(() => {
    const loadData = async () => {
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
    };
    if (loading && !fetchInProgress) {
      loadData();
    }
  }, [fetchData, fetchInProgress, loading, url]);

  return [loading, data, refresh, endOfComments, handleDel];
};

export default useComments;
