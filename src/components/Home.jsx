import React from "react";
import "../components/Styles/Home.css";
import { UseContext } from "./ContextUsing/ContextUse";

function Home() {
  let Value = UseContext();

  return (
    <div>
      {Value.flag ? (
        <>
          <div className="filter-form">
            <input
              onChange={Value.handleSearchInput}
              type="text"
              placeholder="Search articles..."
            />
            <button onClick={Value.handleSearchSubmit}>Search</button>
            <select onChange={Value.handleCategoryChange}>
              <option value="">Select Category</option>
              <option value="science">Science</option>
              <option value="entertainment">Entertainment</option>
              <option value="business">Business</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
          </div>

          <div className="news-grid">
            <div className="news-card" onClick={Value.HandleSubmit1}>
              <h1>
                All articles mentioning Apple from yesterday, sorted by popular
                publishers first
              </h1>
              <img
                src="https://platform.theverge.com/wp-content/uploads/sites/2/2025/07/apple-liquid-glass.jpg?quality=90&strip=all&crop=0%2C3.4216870907457%2C100%2C93.156625818509&w=1200"
                alt="Apple Design"
                className="news-image"
              />
              <h3 className="news-author">Emma Roth</h3>
              <h4 className="news-title">
                Apple just added more frost to its Liquid Glass design
              </h4>
              <p className="news-description">
                Apple’s new Liquid Glass design language just got a little more…
                frosted. In the third iOS 26 developer beta, Apple dialed back
                the transparency of navigation bars, buttons, and tabs that once
                allowed you to clearly see the content beneath them. Apple
                already…
              </p>
              <p className="news-date">2025-07-07T22:31:21Z</p>
              <p className="news-link">
                <a
                  href="https://www.theverge.com/news/700066/apple-liquid-glass-frosted-ios-26-developer-beta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  read more..
                </a>
              </p>
            </div>

            <div className="news-card" onClick={Value.HandleSubmit2}>
              <h1>
                All articles about Tesla from the last month, sorted by recent
                first
              </h1>
              <img
                src="https://assets1.cbsnewsstatic.com/hub/i/r/2025/07/07/c4016456-3c82-4514-95c3-da29d8eff9f2/thumbnail/1200x630/b1444da74c45359f3d2ae412514baada/gettyimages-2217854519.jpg"
                alt="Apple Design"
                className="news-image"
              />
              <h3 className="news-author">Mary Cunningham</h3>
              <h4 className="news-title">
                Tesla stock sinks after Elon Musk announces new political party
              </h4>
              <p className="news-description">
                Tesla stock price was down after Musk said he's formed the
                America Party, the latest development in the billionaire's feud
                with President Trump.
              </p>
              <p className="news-date">2025-07-07T14:51:40Z</p>
              <p className="news-link">
                <a
                  href="https://www.cbsnews.com/news/tesla-stock-price-down-america-party-elon-musk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  read more..
                </a>
              </p>
            </div>

            <div className="news-card" onClick={Value.HandleSubmit3}>
              <h1>Top business headlines in the US right now</h1>
              <img
                src="https://www.travelandtourworld.com/wp-content/uploads/2025/07/europe-11.jpg"
                alt="Apple Design"
                className="news-image"
              />
              <h3 className="news-author">null</h3>
              <h4 className="news-title">
                Why European Three Hundred Dollar Flight Deals Might Disappear
                Starting Next Month – What Travelers Need to Know Now - Travel
                And Tour World
              </h4>
              <p className="news-description">
                $300 flight deals to Europe may disappear next month. Find out
                why and how travelers can take advantage of these limited-time
                offers before they end.
              </p>
              <p className="news-date">2025-07-07T12:22:19Z</p>
              <p className="news-link">
                <a
                  href="https://www.travelandtourworld.com/news/article/why-european-three-hundred-dollar-flight-deals-might-disappear-starting-next-month-what-travelers-need-to-know-now/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  read more..
                </a>
              </p>
            </div>

            <div className="news-card" onClick={Value.HandleSubmit4}>
              <h1>Top headlines from TechCrunch right now</h1>
              <img
                src="https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720"
                alt="Apple Design"
                className="news-image"
              />
              <h3 className="news-author">Lauren Forristal</h3>
              <h4 className="news-title">
                Bye-bye bots: Altera's game-playing AI agents get backing from
                Eric Schmidt | TechCrunch
              </h4>
              <p className="news-description">
                Autonomous, AI-based players are coming to a gaming experience
                near you, and a new startup, Altera, is joining the fray to
                build this new guard of AI Research company Altera raised $9
                million to build AI agents that can play video games alongside
                other player…
              </p>
              <p className="news-date">2024-05-08T15:14:57Z</p>
              <p className="news-link">
                <a
                  href="https://techcrunch.com/2024/05/08/bye-bye-bots-alteras-game-playing-ai-agents-get-backing-from-eric-schmidt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  read more..
                </a>
              </p>
            </div>

            <div className="news-card" onClick={Value.HandleSubmit5}>
              <h1>
                All articles published by the Wall Street Journal in the last 6
                months, sorted by recent first
              </h1>
              <img
                src="https://images.wsj.net/im-65692990/social"
                alt="Apple Design"
                className="news-image"
              />
              <h3 className="news-author">Laura Saunders</h3>
              <h4 className="news-title">
                How Trump’s Megabill Will and Won’t Change Your Taxes
              </h4>
              <p className="news-description">
                The just-passed tax-and-spending package provides certainty for
                filers for the first time in years
              </p>
              <p className="news-date">2025-07-04T09:30:00Z</p>
              <p className="news-link">
                <a
                  href="https://www.wsj.com/personal-finance/taxes/trump-tax-bill-personal-taxes-319dbceb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  read more..
                </a>
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
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
              <p style={{textAlign:'center'}}>No articles found.</p>  
            )}
          </div>
          <button
            style={{
              backgroundColor: "#1e90ff",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              margin: "30px auto",
              display: "block",
              boxShadow: "0 4px 12px rgba(30, 144, 255, 0.2)",
              transition: "all 0.3s ease",
            }}
            onClick={Value.redirectToHome}
          >
            Go to home
          </button>
        </>
      )}
    </div>
  );
}

export default Home;
