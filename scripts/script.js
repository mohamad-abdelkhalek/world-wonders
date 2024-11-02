const instance = axios.create({
    baseURL: "https://www.world-wonders-api.org/v0",
  });
  
  const fetchWonders = async () => {
    try {
      const response = await instance.get("/wonders");
      const wonders = response.data;
  
      const wondersList = document.getElementById("wonders-list");
  
      wonders.forEach(wonder => {
        //Card element
        const card = document.createElement("div");
        card.className = "card";
  
        // First image in the array of images
        const img = document.createElement("img");
        img.src = wonder.links.images ? wonder.links.images[0] : "placeholder.jpg";
        img.alt = wonder.name;
        card.appendChild(img);
  
        // Card content
        const content = document.createElement("div");
        content.className = "card-content";
  
        // Display wonder name
        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = wonder.name;
        content.appendChild(title);
  
        // Link to the details
        const link = document.createElement("a");
        link.href = `wonder.html?id=${wonder.id}`;
        link.className = "card-link";
        link.textContent = "View Details";
        content.appendChild(link);
  
        card.appendChild(content);
        wondersList.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching wonders:", error);
    }
  };
  
  fetchWonders();
  