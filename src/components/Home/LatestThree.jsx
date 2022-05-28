import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextData } from "../Context/ContextData"
import { ContextTheme } from "../Context/ContextTheme"

export default function LatestThree() {
  const [DataContext] = useContext(ContextData)
  const [darkMode] = useContext(ContextTheme)

  return (
    <div className="articleContainer">
      <div className="latestHeader">
        <h1>Latest Stories</h1>
      </div>
      <hr />
      <div className="latestAllContainer">
        {DataContext.map((item) => {
          return item.id >= 21 && item.id <= 23 ? (
            <React.Fragment key={Math.floor(Math.random() * 1000)}>
              <div className="latestThreeArticle">
                <div className="LatestAllText">
                  <Link to={`/article/${item.id}`} className="link">
                    <h2>{item.title}</h2>
                  </Link>
                  <p>{item.details}</p>
                  <br />
                  <p>{item.info}</p>
                </div>
              </div>
              <hr />
            </React.Fragment>
          ) : null
        })}
      </div>
      <hr />

      <Link to="/bollywood">
        <button className={` viewContainer ${darkMode ? "Dark" : "Light2"}`}>
          <p> VIEW MORE</p>
          <p className="viewMoreSpan">&nbsp;</p>
        </button>
      </Link>
    </div>
  )
}