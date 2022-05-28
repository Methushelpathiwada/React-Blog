import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextData } from "../Context/ContextData"
import { ContextTheme } from "../Context/ContextTheme"

export default function LatestAll() {
  const [DataContext] = useContext(ContextData)
  const [darkMode] = useContext(ContextTheme)

  return (
    <div className="articleContainer">
      <div className="latestHeader">
        <h1>The Latest</h1>
        <hr />
      </div>
      <div className="latestAllContainer">
        {DataContext.map((item) => {
          return item.id >= 29 && item.id <= 31 ? (
            <div
              className={`latestAllArticle ${darkMode ? `Dark2` : "Light"}`}
              key={Math.floor(Math.random() * 1000)}
            >
              <Link to={`/article/${item.id}`} className="link">
                <img src={item.src} alt={item.alt} />
              </Link>
              <div className="LatestAllText">
                <Link to={`/article/${item.id}`} className="link">
                  <h2>{item.title}</h2>
                </Link>
                <p>{item.details}</p>
                {/* <br /> */}
                <p>{item.info}</p>
              </div>
            </div>
          ) : null
        })}
      </div>
    </div>
  )
}