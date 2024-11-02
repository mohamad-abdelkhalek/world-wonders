
  const fetchWonderDetails = () => {
    const params = new URLSearchParams(window.location.search);
    const wonderIndex = params.get("index");
  
    const wondersData = JSON.parse(localStorage.getItem("wondersData"));
    
    if (!wondersData || !wonderIndex) {
      document.getElementById("wonder-details").textContent = "Wonder details not found.";
      return;
    }

    const wonder = wondersData[wonderIndex];
    
    if (!wonder) {
      document.getElementById("wonder-details").textContent = "Wonder details not found.";
      return;
    }
    
    // Wonder details
    document.getElementById("wonder-name").textContent = wonder.name;
    document.getElementById("wonder-location").textContent = wonder.location;
    document.getElementById("wonder-build-year").textContent = wonder.build_year;
    document.getElementById("wonder-time-period").textContent = wonder.time_period;
    document.getElementById("wonder-summary").textContent = wonder.summary;
  
    // Wonder images
    const imageGallery = document.getElementById("image-gallery");
    wonder.links.images.forEach(imgUrl => {
      const img = document.createElement("img");
      img.src = imgUrl;
      img.alt = wonder.name;
      imageGallery.appendChild(img);
    });
  
    // Additional links
    document.getElementById("wiki-link").href = wonder.links.wiki;
    document.getElementById("britannica-link").href = wonder.links.britannica;
    document.getElementById("google-maps-link").href = wonder.links.google_maps;
    document.getElementById("trip-advisor-link").href = wonder.links.trip_advisor;
  };
  
  fetchWonderDetails();
  