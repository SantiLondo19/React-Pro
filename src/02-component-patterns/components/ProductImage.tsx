import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface ImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: ImageProps) => {
  const { product } = useContext(ProductContext);

  let imgToshow: string;
  if (img) {
    imgToshow = img;
  } else if (product.img) {
    imgToshow = product.img;
  } else {
    imgToshow = noImage;
  }

  return (
    <img
      style={style}
      src={imgToshow}
      alt="Producto imagen"
      className={`${styles.productImg} ${className}`}
    />
  );
};
