import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextTheme } from "./Context/ContextTheme"
const HeaderComp = () => {
  const [darkMode] = useContext(ContextTheme)
  return (
    <div className="logoHead">
      <div className="logoContainer">
        <div className="logoText">
          <h1 className="textThe">The</h1>
          <h1 className="textSiren">Siren</h1>
        </div>
      </div>
      <div className="menuBtnContainer">
        <input id="check01" type="checkbox" name="menu" />
        <label htmlFor="check01">
          <span className="material-symbols-outlined">menu</span>
        </label>
        <div className={`navBar ${darkMode ? "Dark" : "Light2"}`}>
          <NavLink to="/home" className="link">
            Home
          </NavLink>
          <NavLink to="/bollywood" className="link">
            Bollywood
          </NavLink>
          <NavLink to="/technology" className="link">
            Technology
          </NavLink>
          <NavLink to="/hollywood" className="link">
            Hollywood
          </NavLink>
          <NavLink to="/fitness" className="link">
            Fitness
          </NavLink>
          <NavLink to="/food" className="link">
            Food
          </NavLink>
        </div>
      </div>

      <hr className="navHr" />
    </div>
  )
}

export default HeaderComp