import { useQuery } from "@tanstack/react-query";
import fetchImages from "./fetchImages";

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
