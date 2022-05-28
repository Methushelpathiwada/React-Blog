import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextData } from "../Context/ContextData"

export default function LatestTop() {
  const [DataContext] = useContext(ContextData)

  return (
    <div className="topArticles">
      <div className="latestHeader">
        <h1>Top Posts</h1>
        <hr />
      </div>
      {DataContext.map((item) => {
        return item.id === 1 ? (
          <div className="topOneArticle" key={Math.floor(Math.random() * 1000)}>
            <Link to={`/article/${item.id}`} className="link">
              <img src={item.src} alt={item.alt} />
            </Link>
            <div className="topArticlesText">
              <div className="topOneArticleInfo">
                <Link to={`/article/${item.id}`} className="link">
                  <h2>{item.title}</h2>
                </Link>
                <p>{item.info}</p>
              </div>
              <div className="topListNum">{item.id}</div>
            </div>
          </div>
        ) : null
      })}
      {DataContext.map((item) => {
        return item.id >= 2 && item.id <= 4 ? (
          <div className="topArticle" key={Math.floor(Math.random() * 1000)}>
            <Link to={`/article/${item.id}`} className="link">
              <img src={item.src} alt={item.alt} />
            </Link>
            <div className="topArticlesText">
              <div className="topArticlesInfo">
                <Link to={`/article/${item.id}`} className="link">
                  <h2>{item.title}</h2>
                </Link>
                <p>{item.info}</p>
                {/* <br /> */}
              </div>
              <div className="topListNum">{item.id}</div>
            </div>
            {/* <hr /> */}
          </div>
        ) : null
      })}
    </div>
  )
}