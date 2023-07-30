export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export type ProductCardProps = {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="Product">
      <div className="product-title">{product.title}</div>
      <div className="product-price">
        <span>Price</span>
        {product.price}
      </div>
 
      <div className="product-preview">
        <img src={product.image} alt="product-image" />
      </div>
    </div>
  )
}
