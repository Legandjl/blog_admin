const fetchData = async (params, options) => {
  const url = `http://localhost:3000${params}`;
  console.log(url);
  const data = await fetch(url, options);
  if (!data.ok) {
    throw new Error("Could not fetch the resource");
  }
  const jsonData = await data.json();
  return jsonData;
};

export default fetchData;
