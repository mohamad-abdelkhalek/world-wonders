# World Wonders

This project displays a list of the world's wonders using an API to fetch data. The website allows users to view all wonders in a list format, with each wonder linking to a details page. The project is built with HTML, CSS, JavaScript, and utilizes an API to fetch the data.

## Features
- Displays all world wonders fetched from an external API.
- Each wonder is displayed in a card with an image and name.
- A "View Details" link for each wonder redirects to a detailed page (`wonder.html`) with more information.
- Wonders data is stored in the browser’s `localStorage` for persistent access without needing to re-fetch the data.

## Technologies Used
- **HTML**: Basic structure and layout.
- **CSS**: For styling the website.
- **JavaScript**: For dynamic functionality such as fetching the wonders and rendering them in the DOM.
- **API**: Fetches a list of world wonders.
- **localStorage**: Stores wonders data locally for caching.

## File Structure
- `index.html`: Main page that lists all wonders.
- `wonder.html`: Page that displays the details of an individual wonder.
- `style.css`: Styles for the website.
- `details.css`: Styles for the wonders details.
- `axiosInstance.js`: Axios instance with a predefined baseURL of "https://www.world-wonders-api.org/v0", which allows for easier management of API requests to the World Wonders API.
- `script.js`: JavaScript that handles fetching and displaying the wonders.
- `wonderDetails.js`: JavaScript that handles fetching and displaying each wonder detail.

## How to Clone the Repository

To clone this game repository and play it on your local machine:

1. Open your terminal or command prompt.
2. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/mohamad-abdelkhalek/world-wonders.git
