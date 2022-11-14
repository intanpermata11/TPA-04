import logoIntan from '../assets/img/intan logo.png'

const Footer = () => {
  return(
    <>
      {/* <!-- footer --> */}
        <footer className="footer">
          <img src={logoIntan} alt=""/>
          <div className="menu">
              <a href="/index.html">HOME</a>
              <a href="/ABOUT/about.html">ABOUT ME</a>
              <a href="/MY_PROJECT/myProject.html">SKILL</a>
              <a href="#">BLOG</a>
          </div>
          <p>Created with <i className="bi bi-suit-heart-fill text-danger"></i> by <a href="https://www.instagram.com/intxnpermata/" className="text-white fw-bold">Intan Permatasari</a></p>
        </footer>
    </>
  )
}
export default Footer