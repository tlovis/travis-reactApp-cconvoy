import { useQuery } from "@tanstack/react-query";
import fetchImages from "./fetchImages";

// Using ReactQuery for data fetching and caching. Will run fetching function from separate component, return the data from API here and map images to be rendered.
const ImagesComponent = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  // From return JSON data, uses "urls" to access url to image and "small" to use size most appropriate for this use case
  return (
    <div className="images">
      {data.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          className="image"
        />
      ))}
    </div>
  );
};

export default ImagesComponent;
