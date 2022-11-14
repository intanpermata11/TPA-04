import intanCantik from "../assets/img/intan cantik.jpg"
import astrobotImg from "../assets/img/astrobot.jpg"
import bangTabImg from "../assets/img/Bang Tab 1.jpg"
const Home = () => {
  return(
    <>
      {/* <!-- HERO SECTION --> */}
      <header className="hero-section">
          <div className="hero-text-container">
            <h1>Welcome to Intan's Portfolio</h1>
            <h3>Dark mode lover, but... i love beach so much!</h3>
          </div>
      </header>
      {/* <!-- ABOUT US --> */}
      <section className="about-us-section" >
          <div className="about-text-container">
            <h3>Introduction</h3>
              <p>Undergraduate Student Information Systems at Institut Bisnis dan Informatika Kesatuan Bogor.<br/>
                I am active in campus activities and participate in student association organizations serving as chairman. <br/>
                I have participated in several competitions and research together with lecturers.<br/>
                Interested in Data Science with Python, Machine Learning, Video Editors, Graphic Design.<br/>
                I have a high level of curiosity. I am able to work in a team as well as individually. <br/>
                Other skills and experiences that I have are project management, event coordinator, public relations,<br/> and analytical skill.
                Currently studying web development.</p>
              <a href="https://wa.me/0881024672256"> <button>WhatsApp Me</button></a>
          </div>
          <div className="about-img-container">
            <img src={intanCantik} alt="Intan"/>
          </div>
      </section>
      {/* <!-- PORTFOLIO SECTION --> */}
      <section className="portfolio-section" id="portfolio">
          <h3>My Project</h3>
          <div className="portfolio-btns">
            <button>Chatbot</button><button>Creative Design</button><button>Graphic Design</button>
          </div>
          <div className="portfolio-container">
            <a href="https://app.smojo.org/smartindo/astrobot" target="_blank"><img src={astrobotImg} alt="Chatbot Astrobot"/></a> 
            <a href="https://app.smojo.org/intanpermatasari/bangtab" target="_blank"><img src={bangTabImg} alt="Chatbot Bangtab"/></a> 
          </div>
      </section>
      {/* <!-- BLOG SECTION --> */}
      <section className="blog-section" id="blog">
          <h3>Overview</h3>
          <p>I'm a weird girl but have a lot of friends, I think so..</p>
          <div className="articles-container">
              <div className="article">
                  <img src="./images/blog-01.jpg" alt=""/>
                  <div className="article-text">
                      <h4>Belajar Ngoding <br/> Malem-Malem </h4>
                      <p>Pengalaman awal belajar ngoding malem-malem<br/>
                          Ngantuk, tapi masuk!!!!!!<br/>
                          Gatau, anehhh!</p>
                  </div>
              </div>
              <div className="article">
                  <img src="./images/blog-01.jpg" alt=""/>
                  <div className="article-text">
                      <h4>Tips n Trick<br/>
                          Lawan Rasa NGANTUK pas ngoding!</h4>
                      <p>Beli kopi kenangan atau yang ada di alfamart.<br/>
                          Minimal banget LIONG.<br/>
                          but am prefer to call my boyfriend x0x0!</p>
                  </div>
              </div>
              <div className="article">
                  <img src="./images/blog-01.jpg" alt=""/>
                  <div className="article-text">
                      <h4>Tips n Trick!<br/>
                          So SIBUK, ala Intan.</h4>
                      <p>Cari kegiatan walaupun ga berguna,<br/>
                          apa aja asal ga diem dirumah.<br/>
                          Biar keliatan sibuk kesana kemari dan tertawa!</p>
                  </div>
              </div>
          </div>
      </section>
      {/* <!-- CONTACT US --> */}
      <section className="contact-us-section"  id="contact">
          <h3>Contact us</h3>
          <p>contact me if you want to make friends, vent, drink coffee, travel, etc..  </p>
          <div className="contact-us-container">
              <div className="input-section">
                  <input type="text" placeholder="Your Name"/>
                  <input type="email" placeholder="Your Email"/>
                  <input type="number" placeholder="You Phone Number"/>
              </div>
              <div className="message-section">
                  <textarea name="" id="" cols="50" rows="8" placeholder="Your Message"></textarea>
              </div>
          </div>
          <button>Send Message</button>
      </section>
    </>
  )
}
export default Home