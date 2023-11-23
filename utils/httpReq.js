const fetchData = async () => {
  const response = await fetch("data.json");
  const json = await response.json();
  return json;
};
export default fetchData;
