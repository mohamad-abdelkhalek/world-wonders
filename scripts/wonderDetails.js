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
  
    // Populate HTML with wonder details
    document.getElementById("wonder-name").textContent = wonder.name;
    document.getElementById("wonder-location").textContent = wonder.location;
    document.getElementById("wonder-build-year").textContent = wonder.build_year;
    document.getElementById("wonder-time-period").textContent = wonder.time_period;
    document.getElementById("wonder-summary").textContent = wonder.summary;
  
    // Populate image gallery
    const imageGallery = document.getElementById("image-gallery");
    wonder.links.images.forEach(imgUrl => {
      const img = document.createElement("img");
      img.src = imgUrl;
      img.alt = wonder.name;
      imageGallery.appendChild(img);
    });
  
    // Populate additional links
    document.getElementById("wiki-link").href = wonder.links.wiki;
    document.getElementById("britannica-link").href = wonder.links.britannica;
    document.getElementById("google-maps-link").href = wonder.links.google_maps;
    document.getElementById("trip-advisor-link").href = wonder.links.trip_advisor;
  };
  
  fetchWonderDetails();
  