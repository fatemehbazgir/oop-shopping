import fetchData from "./utils/httpReq.js";

const render = async () => {
  const productData = await fetchData();
};

document.addEventListener("DOMContentLoaded", render);
