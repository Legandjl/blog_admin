const fetchData = async (url) => {
  const data = await fetch(url, {});
  if (!data.ok) {
    throw new Error("Could not fetch the resource");
  }
  const jsonData = await data.json();
  return jsonData;
};

export default fetchData;
