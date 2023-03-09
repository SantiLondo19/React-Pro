import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButton,
} from "../components";

import "../styles/custom-styles.css";
export const ShoppingPage = () => {
  const product = {
    id: 1,
    title: "Coffee Mug - card",
    img: "./coffee-mug.png",
  };
  const product2 = {
    id: 2,
    title: "Coffee Mug - Meme",
    img: "./coffee-mug2.png",
  };
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="img" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Button className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product2} className="bg-dark text-white">
          <ProductImage className="img" />
          <ProductTitle className="text-bold" />
          <ProductButton className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
