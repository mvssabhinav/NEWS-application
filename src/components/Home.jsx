import React, { useEffect, useState } from "react";
import "../components/Styles/Home.css";
import { UseContext } from "./ContextUsing/ContextUse";

function Home() {
  let Value = UseContext();

  let [fetched, setFetched] = useState([]);
  let showdata = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=76876ee6dfe54b928b0020cdf75ed519`
    )
      .then((res) => res.json())
      .then((data) => {
        setFetched(data);
      });
  };
  useEffect(() => {
    showdata();
  }, []);

  return (
    <div>
      <>
        <div className="filter-form">
          <input
            onChange={Value.handleSearchInput}
            type="text"
            placeholder="Search articles..."
          />
          <button onClick={Value.handleSearchSubmit}>Search</button>

          <select onChange={Value.handleCategoryChange}>
            <option value="">Select Category for top headlines</option>
            <option value="science">Science</option>
            <option value="entertainment">Entertainment</option>
            <option value="business">Business</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>

          {/* <select onChange={Value.handleSourceChange}>
            <option value="techcrunch">TechCrunch</option>
            <option value="the-verge">The Verge</option>
            <option value="bbc-news">BBC News</option>
            <option value="cnn">CNN</option>
            <option value="wired">Wired</option>
          </select> */}
        </div>
      </>
      {Value.flag ? (
        <div className="card-wrapper">
          {Value.loading ? (
            <p>Loading...</p>
          ) : fetched.articles ? (
            fetched.articles.map((user, index) => (
              <div className="card" key={index}>
                <img src={user.urlToImage} alt="" />
                <h3>{user.author || "Unknown"}</h3>
                <h4>{user.title}</h4>
                <p>{user.description}</p>
                <p>{user.publishedAt}</p>
                <a href={user.url}>read more..</a>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No articles found.</p>
          )}
        </div>
      ) : (
        <div className="card-wrapper">
          {Value.loading ? (
            <p>Loading...</p>
          ) : Value.artical.articles ? (
            Value.artical.articles.map((user, index) => (
              <div className="card" key={index}>
                <img src={user.urlToImage} alt="" />
                <h3>{user.author || "Unknown"}</h3>
                <h4>{user.title}</h4>
                <p>{user.description}</p>
                <p>{user.publishedAt}</p>
                <a href={user.url}>read more..</a>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No articles found.</p>
          )}
        </div>
      )}

      {/* <div className="card-wrapper">
        {Value.loading ? (
          <p>Loading...</p>
        ) : Value.artical.articles ? (
          Value.artical.articles.map((user, index) => (
            <div className="card" key={index}>
              <img src={user.urlToImage} alt="" />
              <h3>{user.author || "Unknown"}</h3>
              <h4>{user.title}</h4>
              <p>{user.description}</p>
              <p>{user.publishedAt}</p>
              <a href={user.url}>read more..</a>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No articles found.</p>
        )}
      </div> */}
    </div>
  );
}

export default Home;
