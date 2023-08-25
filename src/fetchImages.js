// Fetching function to fetch images from Unsplash. Uses API key from .env file in "client_id" query paramenter and uses the "count" parameter to request 10 random images

const fetchImages = async () => {
  const apiRes = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${
      import.meta.env.VITE_API_KEY
    }&count=10`,
  );

  return apiRes.json();
};

export default fetchImages;
