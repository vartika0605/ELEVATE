import { useState} from 'react'
import Hero from "./Hero.tsx"
import Catalouge from "./Catalouge.tsx"
import { CategoryContext, SearchContext } from "./context.ts";

import './App.css'

export const Categories = [
  "All categories",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
];

function App() {
  const [category, setCategory] = useState(Categories[0])
  const [query, setQuery] = useState("")
  
  return (
    <CategoryContext.Provider value={{category, setCategory}}>
      <SearchContext.Provider value={{query, setQuery}}>
        <>
          <Hero />
          <Catalouge />
        </>
      </SearchContext.Provider>
    </CategoryContext.Provider>
  )
}

export default App
