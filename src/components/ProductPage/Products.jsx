import React from 'react'
import { UseContext } from '../ContextUsing/ContextUse';

function Products() {
    let Value1=UseContext()
  return (
    <div>
      <div className="card-wrapper">
        {Value1.loading ? (
          <p>Loading...</p>
        ) : Value1.artical.articles ? (
          Value1.artical.articles.map((user, index) => (
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
    </div>
  );
}

export default Products