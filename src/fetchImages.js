const fetchImages = async () => {
  const apiRes = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${
      import.meta.env.VITE_API_KEY
    }&count=10`,
  );

  return apiRes.json();
};

export default fetchImages;
