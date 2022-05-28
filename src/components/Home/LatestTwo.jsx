import React, { useContext } from "react"
import { ContextData } from "../Context/ContextData"
import Carousel from "./Carousel"
import { Link } from "react-router-dom"

export default function LatestTwo() {
  const [DataContext] = useContext(ContextData)
  // const textStyle = {
  //   position: "absolute",
  //   top: 250,
  //   left: 200,
  //   color: "white",
  // }

  return (
    <>
      <div className="latestTwoContainer">
        <Carousel>
          {DataContext.map((item) => {
            return item.id >= 31 && item.id <= 36 ? (
              <div
                className="latestTwoArticle"
                key={Math.floor(Math.random() * 1000)}
              >
                <Link to={`/article/${item.id}`} className="link">
                  <img src={item.src} alt={item.alt} />
                </Link>
                <div className="latestTwoText">
                  <Link to={`/article/${item.id}`} className="link">
                    <h3 className="latestTwoHeading">{item.title}</h3>
                  </Link>
                  <p>{item.info}</p>
                </div>
              </div>
            ) : null
          })}
        </Carousel>
      </div>
    </>
  )
}