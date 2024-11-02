const instance = axios.create({
    baseURL: "https://www.world-wonders-api.org/v0",
  });
  
  const fetchWonders = async () => {
    try {
      const response = await instance.get("/wonders");
      const wonders = response.data;
      
      const wondersList = document.getElementById("wonders-list");
  
      wonders.forEach(wonder => {
        const wonderLink = document.createElement("a");
        wonderLink.href = `wonder.html?id=${wonder.id}`;
        wonderLink.textContent = wonder.name;
        wonderLink.style.display = "block";
        wondersList.appendChild(wonderLink);
      });
    } catch (error) {
      console.error("Error fetching wonders:", error);
    }
  };
  
  fetchWonders();
  