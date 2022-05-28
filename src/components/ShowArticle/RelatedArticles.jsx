import React, { useContext } from "react"
import { ContextData } from "../Context/ContextData"
import AuthorImage from "../../assets/author.png"
import { Link, useParams } from "react-router-dom"
import "./showArticle.css"

export default function RelatedArticles() {
  const { id } = useParams()

  const [DataContext] = useContext(ContextData)

  let extraStart = +id + 1
  let extraEnd = +id + 3

  if (id >= 34) {
    extraStart = 34
    extraEnd = 36
  }
  return (
    <div className="moreArticles">
      {DataContext.map((item) => {
        return item.id >= extraStart && item.id <= extraEnd ? (
          <div
            className="moreAllArticle"
            key={Math.floor(Math.random() * 1000)}
          >
            <h4>Related reads</h4>
            <Link to={`/article/${item.id}`} className="link">
              <img
                src={item.src}
                alt={item.alt}
                className="relatedArticleImage"
              />
            </Link>
            <div className="moreAllText">
              <Link to={`/article/${item.id}`} className="link">
                <h2>{item.title}</h2>
              </Link>
              {/* <br /> */}
              <div className="authorDetails">
                <img src={AuthorImage} alt="author" className="authorImage" />
                <div>
                  <p className="authorName">{item.author}</p>
                  <div className="writtenTime">
                    <small>{item.date}</small> . <small>{item.readTime}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      })}
    </div>
  )
}