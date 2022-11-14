import IntanSangatCantik from "../assets/img/intan.jpg"

const AboutMe = () => {
  return(
    <>
      {/* <!-- JUMBOTRON --> */}
      <section className="jumbotron text-center mt-lg-5 mb-md-5">
        <img src={IntanSangatCantik} alt="Intan Permatasari" width="200" className="rounded-circle img-thumbnail"  style={{marginTop: "5rem"}}/>
        <h1 className="display-5 bold">Intan Permatasari</h1>
        <p className="lead mb-5">Sistem Informasi | IBI Kesatuan</p>
      </section>
      <p style={{textAlign: "center"}}>Undergraduate Student Information Systems at Institut Bisnis dan Informatika Kesatuan Bogor.<br/>
        I am active in campus activities and participate in student association organizations serving as chairman. <br/>
        I have participated in several competitions and research together with lecturers.<br/>
        Interested in Data Science with Python, Machine Learning, Video Editors, Graphic Design.<br/>
        I have a high level of curiosity. I am able to work in a team as well as individually. <br/>
        Other skills and experiences that I have are project management, event coordinator, public relations, and analytical skill.
        Currently studying web development.</p>
    </>
  )
}

export default AboutMe