import React, { useState, useEffect } from "react"
import "./carousel.css"

const Carousel = (props) => {
  const { children } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(5)

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }
  // Set the length to match current children from props
  useEffect(() => {
    setLength(5)
  }, [children])

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button onClick={prev} className="left-arrow">
          &lt;
        </button>
        <div className="carousel-content-wrapper">
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel