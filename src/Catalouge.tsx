import { useState, useContext, useEffect } from "react";
import { SearchContext, CategoryContext } from "./context.ts";
import Loading from "./Loading.tsx";
import { Product, ProductCard } from "./ProductCard.tsx"; 
import { Categories } from "./App.tsx";

async function GetCatalouge() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json() as Product[];

  return data;
}

function Catalouge() {

  const {category, setCategory} = useContext(CategoryContext);
  const {query, setQuery} = useContext(SearchContext);

  const [loading, setLoading] = useState(true);
  const [catalouge, setCatalouge] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    Init();  
  }, [])

  useEffect(() => {
    if(query == "") {
      setProducts(catalouge);
    } else {
      setProducts(catalouge.filter(p => 
        p.category.includes(query) ||  
        p.title.includes(query) ||
        p.description.includes(query)
      ));
    }
  }, [query]);
  
  useEffect(() => {
    if(category == Categories[0]) {
      setProducts(catalouge);
    } else {
      setProducts(catalouge.filter(p => p.category == category));
    }
  }, [category]);

  async function Init() {
    setLoading(true);
    const data = await GetCatalouge();
    setCatalouge(data);
    setProducts(data);
    setLoading(false);
  }


  if (loading) {
    return <Loading />
  }


  return (
    <div className="Catalouge">
      <div className="catalouge-title">{category}</div>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} /> 
        ))}
      </div>
    </div>
  )
}

export default Catalouge