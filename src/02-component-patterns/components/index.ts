import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButton } from './ProductButton';
import { ProductCardHOCProps } from '../interfaces/ProductContextProps';

export { ProductButton } from "../components/ProductButton";
export { ProductTitle } from "../components/ProductTitle";
export { ProductImage } from "../components/ProductImage";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Button: ProductButton
})


export default ProductCard;