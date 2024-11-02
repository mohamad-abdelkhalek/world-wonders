
const wondersList = document.getElementById("wonders-list");

const fetchWonders = async () => {
  try {
    const response = await instance.get("/wonders");
    const wonders = response.data;

    wonders.forEach((wonder, index) => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = wonder.links.images ? wonder.links.images[0] : "placeholder.jpg";
      img.alt = wonder.name;
      card.appendChild(img);

      const content = document.createElement("div");
      content.className = "card-content";

      const title = document.createElement("h3");
      title.className = "card-title";
      title.textContent = wonder.name;
      content.appendChild(title);

      // Use index as unique identifier in the URL
      const link = document.createElement("a");
      link.href = `wonder.html?index=${index}`;
      link.className = "card-link";
      link.textContent = "View Details";
      content.appendChild(link);

      card.appendChild(content);
      wondersList.appendChild(card);
    });

    // Store wonders data in localStorage
    localStorage.setItem("wondersData", JSON.stringify(wonders));
  } catch (error) {
    console.error("Error fetching wonders:", error);
  }
    

};

fetchWonders();