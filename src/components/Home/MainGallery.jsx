import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextData } from "../Context/ContextData"
import SideArticle from "./SideArticle"

const MainGallery = () => {
  const [dataContext] = useContext(ContextData)
  //   console.log(data)
  // const [data, setData] = useState([])
  //   useEffect(() => {
  //     var url =
  //       "https://newsapi.org/v2/top-headlines?" +
  //       "country=in&" +
  //       "apiKey=107fb3cea03f45cbab64c8b909fb8967"

  //     fetch(url).then((response) => {
  //       response.json().then((data) => {
  //         var data1 = data.articles.slice(0, 20)
  //         setData(data1)
  //         console.log(data.articles)
  //       })
  //     })
  //   }, [])
  return (
    <div className="container">
      {dataContext
        .filter((item) => item.id === 26)
        .map((item) => {
          return (
            <div className="mainArticle1" key={Math.random()}>
              <Link to={`/article/${item.id}`} className="link">
                <img src={item.src} alt={item.alt} />
              </Link>
              <div className="mainArticle1Text">
                <Link to={`/article/${item.id}`} className="link">
                  <h2 className="mainArticle1Heading">{item.title}</h2>
                </Link>
                <small>{item.info}</small>
              </div>
            </div>
          )
        })}

      <SideArticle />
    </div>
  )
}

export default MainGallery