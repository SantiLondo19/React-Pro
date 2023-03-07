import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface ProductButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButton = ({ className, style }: ProductButtonProps) => {
  const { increaseBy, counter } = useContext(ProductContext);
  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
