import { createContext, useContext, useEffect, useState } from "react";

export let Context=createContext()

export let ContextProvider = ({ children }) => {
    let [artical,setArtical]=useState([])
    let [savedata1, setSavedata1] = useState([])
    let [savedata2, setSavedata2] = useState([]);
    let [savedata3, setSavedata3] = useState([]);
    let [savedata4, setSavedata4] = useState([]);
    let [savedata5, setSavedata5] = useState([]);
    let [flag,setFlag]=useState(true)
    let [search,setSearch]=useState('')
    const [loading, setLoading] = useState(false);
    let handleSearchInput=(e)=>{
      setSearch(e.target.value)

    }
    let handleSearchSubmit=(e)=>{
      e.preventDefault();
      if (!search.trim()) return;

      setLoading(true);
      fetch(
        `https://newsapi.org/v2/everything?q=${search}&from=2025-07-08&to=2025-07-08&sortBy=popularity&apiKey=76876ee6dfe54b928b0020cdf75ed519`
      )
        .then((res) => res.json())
        .then((data) => {
          setArtical(data);
          setFlag(false);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Search Error:", err);
          setLoading(false);
        });

    }

    let handleCategoryChange=(e)=>{
      const category = e.target.value;
      if (!category) return;

      setLoading(true);
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=76876ee6dfe54b928b0020cdf75ed519`
      )
        .then((res) => res.json())
        .then((data) => {
          setArtical(data);
          setFlag(false);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Category Error:", err);
          setLoading(false);
        });

    }



    let fetchingArtical=async()=>{
        let data1 = await fetch(
          `https://newsapi.org/v2/everything?q=apple&from=2025-07-07&to=2025-07-07&sortBy=popularity&apiKey=76876ee6dfe54b928b0020cdf75ed519`
        );
        let data2 = await fetch(
          `https://newsapi.org/v2/everything?q=tesla&from=2025-06-08&sortBy=publishedAt&apiKey=76876ee6dfe54b928b0020cdf75ed519`
        );
        let data3 = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=76876ee6dfe54b928b0020cdf75ed519`
        );
        let data4 = await fetch(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=76876ee6dfe54b928b0020cdf75ed519`
        );
        let data5 = await fetch(
          `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=76876ee6dfe54b928b0020cdf75ed519`
        );
        setSavedata1(await data1.json())
        setSavedata2(await data2.json());
        setSavedata3(await data3.json());
        setSavedata4(await data4.json());
        setSavedata5(await data5.json());
        
    }
    

    let HandleSubmit1 = () => {
        setFlag(false)
        setArtical(savedata1)
        console.log(artical);
        

    };
    let HandleSubmit2= ()=>{
      setFlag(false);
        setArtical(savedata2)

    }
    let HandleSubmit3 = () => {
      setFlag(false);
        setArtical(savedata3);

    };
    let HandleSubmit4 = () => {
      setFlag(false);
        setArtical(savedata4);

    };
    let HandleSubmit5 = () => {
      setFlag(false);
        setArtical(savedata5);
    };


    let redirectToHome = () => {
      setFlag(true)
    };

    useEffect(() => {
      fetchingArtical();
    }, []);

   


  return (
    <Context.Provider
      value={{
        artical,
        HandleSubmit1,
        HandleSubmit2,
        HandleSubmit3,
        HandleSubmit4,
        HandleSubmit5,
        redirectToHome,
        handleSearchInput,
        handleSearchSubmit,
        handleCategoryChange,
        loading,
        flag,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export let UseContext=()=>{
    return useContext(Context);

}