const instance = axios.create({
    baseURL: "https://www.world-wonders-api.org/v0",
  });
  
  const fetchWonders = async () => {
    const response = await instance.get("/wonders");
  
    console.log(response.data);
  };
  
  fetchWonders();