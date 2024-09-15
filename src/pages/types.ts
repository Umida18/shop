export interface ProductType {
  id: number;
  name: string;
  price: string;
  description: string;
  inStock: boolean;
  comment: CommentType[];
  variants: VariantType[];
}
export interface CommentType {
  id: number;
  email: string;
  fullName: string;
  review: string;
  stars: number;
}
export interface VariantType {
  id: number;
  color: string;
  size: string;
  stock: number;
  productId: number;
}
