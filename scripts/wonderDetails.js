// const instance = axios.create({
//     baseURL: "https://www.world-wonders-api.org/v0",
//   });
  
  // wonderDetails.js
  const fetchWonderDetails = () => {
    const params = new URLSearchParams(window.location.search);
    const wonderIndex = params.get("index");
    
    // Retrieve wonders data from localStorage
    const wondersData = JSON.parse(localStorage.getItem("wondersData"));
    
    if (!wondersData || !wonderIndex) {
      document.getElementById("wonder-details").textContent = "Wonder details not found.";
      return;
    }
    
    // Get the specific wonder based on the index
    const wonder = wondersData[wonderIndex];
    
    if (!wonder) {
      document.getElementById("wonder-details").textContent = "Wonder details not found.";
      return;
    }
  
    // Display wonder details
    const detailsDiv = document.getElementById("wonder-details");
    detailsDiv.innerHTML = `
      <h2>${wonder.name}</h2>
      <p><strong>Location:</strong> ${wonder.location}</p>
      <p><strong>Build Year:</strong> ${wonder.build_year}</p>
      <p><strong>Time Period:</strong> ${wonder.time_period}</p>
      <p><strong>Summary:</strong> ${wonder.summary}</p>
      <div class="image-gallery">
        ${wonder.links.images.map(img => `<img src="${img}" alt="${wonder.name}" />`).join('')}
      </div>
      <h3>Additional Links</h3>
      <ul>
        <li><a href="${wonder.links.wiki}" target="_blank">Wikipedia</a></li>
        <li><a href="${wonder.links.britannica}" target="_blank">Britannica</a></li>
        <li><a href="${wonder.links.google_maps}" target="_blank">Google Maps</a></li>
        <li><a href="${wonder.links.trip_advisor}" target="_blank">Trip Advisor</a></li>
      </ul>
    `;
  };
  
  fetchWonderDetails();
  
  