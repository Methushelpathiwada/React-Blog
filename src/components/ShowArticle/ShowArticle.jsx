import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContextData } from "../Context/ContextData"
import { ContextTheme } from "../Context/ContextTheme"
import RelatedArticles from "./RelatedArticles"
import AuthorImage from "../../assets/author.png"
import Clap from "../../assets/clap.svg"
import "./showArticle.css"
import {
  RedditShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share"

import {
  RedditIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share"

export default function ShowArticle() {
  const { id } = useParams()
  const [DataContext, setDataContext] = useContext(ContextData)
  const [darkMode] = useContext(ContextTheme)
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    DataContext.forEach((item) => {
      if (item.id === +id) {
        setCounter(item.clap)
      }
    })
  }, [DataContext, id])

  const upvoteHandler = () => {
    let newValue = counter + 1
    setCounter(() => newValue)
    setDataContext((prevState) =>
      prevState.map((article) =>
        article.id === +id
          ? {
              ...article,
              clap: newValue,
            }
          : article
      )
    )
  }

  return (
    <div>
      <div className="containerArticle">
        {DataContext.map((item) => {
          return item.id === +id ? (
            <div className="Article" key={Math.floor(Math.random() * 1000)}>
              <h2 className="articleTitle">{item.title}</h2>

              <div className="authorDetailsContainer">
                <div className="authorDetails">
                  <img src={AuthorImage} alt="author" className="authorImage" />
                  <div>
                    <p className="authorName">{item.author}</p>
                    <div>
                      <small>{item.date}</small> .{" "}
                      <small>{item.readTime}</small>
                    </div>
                  </div>
                </div>
                <div>
                  <RedditShareButton
                    url={window.location.href}
                    title={item.title}
                  >
                    <RedditIcon size={32} round={true} />
                  </RedditShareButton>
                  &nbsp;
                  <WhatsappShareButton
                    url={window.location.href}
                    title={item.title}
                  >
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>
                  &nbsp;
                  <TwitterShareButton
                    url={window.location.href}
                    title={item.title}
                  >
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                  &nbsp;
                  <LinkedinShareButton
                    url={window.location.href}
                    title={item.title}
                    summary={item.details}
                  >
                    <LinkedinIcon size={32} round={true} />
                  </LinkedinShareButton>
                </div>
              </div>
              <img src={item.src} alt={item.alt} className="articleImage" />
              <br />
              <br />
              <br />
              <p>{item.details}</p>

              <div className="articleText">{item.description}</div>
              <br />
              <div className={` articleTags ${darkMode ? "Dark2" : "Light"}`}>
                {item.tags}
              </div>
              <div className="clapContainer">
                <button
                  onClick={upvoteHandler}
                  className={`${darkMode ? `Dark` : "Light2"}`}
                >
                  <img src={Clap} alt="clap" className="clap" />
                </button>
                {/* <p>{item.clap} claps</p> */}
                <p>{counter} claps</p>
              </div>
              <hr />
              <div className="authorDetails">
                <img src={AuthorImage} alt="author" className="authorImage" />
                <div>
                  <p className="writtenBy">WRITTEN BY</p>
                  <p className="authorName">{item.author}</p>
                  <div>
                    <small>{item.date}</small> . <small>{item.readTime}</small>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ) : null
        })}
      </div>
      <div className={`moreArticlesContainer ${darkMode ? `Dark2` : "Light"}`}>
        <h3>More From The Siren</h3>
        <hr />
        <RelatedArticles />
      </div>
    </div>
  )
}