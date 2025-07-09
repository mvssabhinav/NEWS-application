import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export let Context = createContext();

export let ContextProvider = ({ children }) => {
  let nav = useNavigate();
  let [artical, setArtical] = useState([]);

  // let [savedata1, setSavedata1] = useState([])
  // let [savedata2, setSavedata2] = useState([]);
  // let [savedata3, setSavedata3] = useState([]);
  // let [savedata4, setSavedata4] = useState([]);
  // let [savedata5, setSavedata5] = useState([]);
  let [flag, setFlag] = useState(true);
  let [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  let handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  let handleSearchSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;
    nav("/products");

    setLoading(true);
    fetch(
      `https://newsapi.org/v2/everything?q=${search}&from=2025-07-08&to=2025-07-08&sortBy=popularity&apiKey=76876ee6dfe54b928b0020cdf75ed519`
    )
      .then((res) => res.json())
      .then((data) => {
        setArtical(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Search Error:", err);
        setLoading(false);
      });
  };

  let handleCategoryChange = (e) => {
    const category = e.target.value;
    if (!category) return;
    setFlag(false);
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=76876ee6dfe54b928b0020cdf75ed519`
    )
      .then((res) => res.json())
      .then((data) => {
        setArtical(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Category Error:", err);
        setLoading(false);
      });
  };

  let handleSourceChange = (e) => {
    const source = e.target.value;
    if (!source) return;

    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=76876ee6dfe54b928b0020cdf75ed519
`
    )
      .then((res) => res.json())
      .then((data) => {
        setArtical(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Category Error:", err);
        setLoading(false);
      });
  };

  return (
    <Context.Provider
      value={{
        artical,
        handleSearchInput,
        handleSearchSubmit,
        handleCategoryChange,
        handleSourceChange,
        flag,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export let UseContext = () => {
  return useContext(Context);
};
