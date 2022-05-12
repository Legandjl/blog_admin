import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import useFetchData from "./useFetchData";

const usePub = () => {
  const [fetchData] = useFetchData();
  const { token } = useContext(UserContext);
  const handlePub = async (dataItem) => {
    await fetchData(
      `/admin/publish/${dataItem._id}?published=${
        dataItem.published === true ? false : true
      }`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
      }
    );
  };
  return [handlePub];
};

export default usePub;
