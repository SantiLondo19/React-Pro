import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButton,
} from "../components";

export const ShoppingPage = () => {
  const product = {
    title: "Coffee Mug - card",
    img: "./coffee-mug.png",
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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Hola Mundo" />
          <ProductCard.Button />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="" />
          <ProductButton />
        </ProductCard>
      </div>
    </div>
  );
};
