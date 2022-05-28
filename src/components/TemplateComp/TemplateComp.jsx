import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ContextData } from "../Context/ContextData"
import "./templateComp.css"
import PrepbytesImage from "../../assets/ad1.png"
import { ContextTheme } from "../Context/ContextTheme"

export default function TemplateComp(props) {
  const { Start, End, Heading } = props
  const [DataContext] = useContext(ContextData)
  const [showLoad, setShowLoad] = useState(false)
  const [darkMode] = useContext(ContextTheme)

  return (
    <div className="mainContainer">
      <div className="ArticlesContainer">
        <div>
          <div className="topicHeader">
            <h1>{Heading}</h1>
          </div>
          <div className="ArticlesOneContainer">
            {DataContext.map((item) => {
              return item.id >= Start && item.id < End ? (
                <div
                  className="latestOneArticle"
                  key={Math.floor(Math.random() * 1000000)}
                >
                  <Link to={`/article/${item.id}`} className="link">
                    <img src={item.src} alt={item.alt} />
                  </Link>
                  <div className="LatestOneText">
                    <Link to={`/article/${item.id}`} className="link">
                      <h2>{item.title}</h2>
                    </Link>
                    <p>{item.details}</p>
                    {/* <br /> */}
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
                  return item.id === End ? (
                    <div
                      className="latestOneArticle"
                      key={Math.floor(Math.random() * 1000000)}
                    >
                      <Link to={`/article/${item.id}`} className="link">
                        <img src={item.src} alt={item.alt} />
                      </Link>
                      <div className="LatestOneText">
                        <Link to={`/article/${item.id}`} className="link">
                          <h2>{item.title}</h2>
                        </Link>
                        <p>{item.details}</p>
                        {/* <br /> */}
                        <p>{item.info}</p>
                      </div>
                      {/* <hr /> */}
                    </div>
                  ) : null
                })
              : null}
          </div>
        </div>
        <div className="topPlusAd">
          <div className="topPosts">
            <div className="latestHeader">
              <h1>Top Posts</h1>
              <hr />
            </div>
            {DataContext.map((item) => {
              return item.id === 1 ? (
                <div
                  className="topOneArticle"
                  key={Math.floor(Math.random() * 1000000)}
                >
                  <Link to={`/article/${item.id}`} className="link">
                    <img src={item.src} alt={item.alt} />
                  </Link>
                  <div className="topArticlesText">
                    <div>
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
            {DataContext.map((item) => {
              return item.id >= 2 && item.id <= 4 ? (
                <div
                  className="topArticle"
                  key={Math.floor(Math.random() * 1000000)}
                >
                  <Link to={`/article/${item.id}`} className="link">
                    <img src={item.src} alt={item.alt} />
                  </Link>
                  <div className="topArticlesText">
                    <div className="topArticlesInfo">
                      <Link to={`/article/${item.id}`} className="link">
                        <h4>{item.title}</h4>
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
          <div className="pageAd">
            <a
              href="https://www.prepbytes.com/elevation-academy/mern-stack-web-development-career"
              target="_blank"
              rel="noreferrer"
            >
              <img src={PrepbytesImage} alt="pic" className="prepbytesImg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}