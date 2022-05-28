import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ContextData } from "../Context/ContextData"
import LatestTop from "./LatestTop"
import LatestTwo from "./LatestTwo"
import PrepbytesImage from "../../assets/ad1.png"
import { ContextTheme } from "../Context/ContextTheme"

export default function LatestOne() {
  const [DataContext] = useContext(ContextData)
  const [showLoad, setShowLoad] = useState(false)
  const [darkMode] = useContext(ContextTheme)

  return (
    <div className="latestGridContainer">
      <div className="latestHeader">
        <h1>Latest Articles</h1>
        <hr />
      </div>
      <div className="latestArticlesContainer">
        <div className="latestOneContainer">
          <hr />
          {DataContext.map((item) => {
            return item.id >= 6 && item.id <= 8 ? (
              <div
                className="latestOneArticle"
                key={Math.floor(Math.random() * 1000)}
              >
                <Link to={`/article/${item.id}`} className="link">
                  <img src={item.src} alt={item.alt} />
                </Link>
                <div className="LatestOneText">
                  <Link to={`/article/${item.id}`} className="link">
                    <h2>{item.title}</h2>
                  </Link>
                  <p>{item.details}</p>
                  <br />
                  <p>{item.info}</p>
                </div>
                {/* <hr /> */}
              </div>
            ) : null
          })}
          {!showLoad ? (
            <button
              className={` loadContainer ${darkMode ? "Dark" : "Light2"}`}
              onClick={() => setShowLoad(!showLoad)}
            >
              <span className="loadMoreSpan">&nbsp;</span>
              LOAD MORE
            </button>
          ) : null}
          {showLoad
            ? DataContext.map((item) => {
                return item.id === 9 ? (
                  <div
                    className="latestOneArticle"
                    key={Math.floor(Math.random() * 1000)}
                  >
                    <Link to={`/article/${item.id}`} className="link">
                      <img src={item.src} alt={item.alt} />
                    </Link>
                    <div className="LatestOneText">
                      <Link to={`/article/${item.id}`} className="link">
                        <h2>{item.title}</h2>
                      </Link>
                      <p>{item.details}</p>
                      <br />
                      <p>{item.info}</p>
                    </div>
                    {/* <hr /> */}
                  </div>
                ) : null
              })
            : null}
        </div>
        <div className="ad">
          <a
            href="prebbytes.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={PrepbytesImage}
              alt="pic"
              className="prepbytesImg"
              rel="noreferrer"
              // style={{ width: "100%", height: "100%" }}
            />
          </a>
        </div>
        <LatestTwo className="latestTwo" />
        <LatestTop />
      </div>
    </div>
  )
}