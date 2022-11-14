import { Link } from 'react-router-dom'
import logoIntan from '../assets/img/intan logo.png'

const Navbar = () => {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to={"/"} className="navbar-brand"><img src={logoIntan} alt="logo"/></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
              <li className="nav-item" style={{textDecoration: "none"}}>
                <Link to={"/"} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                  <Link to={"/about"} className="nav-link">About Me</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/skill"} className="nav-link">My Skill</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/blog"} className="nav-link">Blog</Link>
                </li>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar