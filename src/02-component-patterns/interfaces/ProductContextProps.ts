import { Props as ProductCardProps } from "../components/ProductCard";
import { ProductTitleProps } from '../components/ProductTitle';
import { ImageProps } from '../components/ProductImage';
import { ProductButtonProps } from '../components/ProductButton';


export interface Product {
  title: string;
  img?: string;
}
export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ImageProps) => JSX.Element;
  Button: (Props: ProductButtonProps) => JSX.Element;
}