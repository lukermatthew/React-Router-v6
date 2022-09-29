import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { productId } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  const fetchDataFromApi = async () => {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/" + productId
    );

    const { title, price, description, image } = data;
    setTitle(title);
    setPrice(price);
    setDescription(description);
    setImage(image);
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <main>
      <header>
        <h1>{title}</h1>
      </header>
      <p>Price: PHP {price}</p>
      <div>
        <img src={image} alt="product-image" style={{ maxWidth: "100%" }} />
      </div>
      <div>{description}</div>
    </main>
  );
};

export default ProductPage;
