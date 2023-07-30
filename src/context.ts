import { createContext } from 'react';

type CategoryContextType = {
  category: string;
  setCategory: (arg0:string) => void;
};

type SearchContextType = {
  query: string;
  setQuery: (arg0:string) => void;
};

export const CategoryContext = createContext<CategoryContextType>({
  category: "",
  setCategory: (val:string) => console.error(`setCategory is not used current value: ${val} `),
});
export const SearchContext = createContext<SearchContextType>({
  query: "",  
  setQuery: (val:string) => console.error(`setQuery is not used current value: ${val} `),
});
