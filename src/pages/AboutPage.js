import Constrols from "../components/Controls";
import Header from "../components/Header";

const AboutPage = () => {
  return /*html */ `
  <main> 
  <section class="container about active" id="about">
  <div class="main-title">
      <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
  </div>
  <div class="about-container">
      <div class="left-about">
          <h4>Information About me</h4>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet labore nihil obcaecati consequatur. Debitis error doloremque,
              vero eos vel nemo eius voluptatem dicta tenetur modi. <br /> <br /> La musica
              delectus dolore fugiat exercitationem a,
              ipsum quidem quo enim natus accusamus labore dolores nam. Unde.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Harum non necessitatibus deleniti eum soluta.
          </p>
          <div class="btn-con">
              <a href="#" class="main-btn">
                  <span class="btn-text">Download CV</span>
                  <span class="btn-icon"><i class="fas fa-download"></i></span>
              </a>
          </div>
      </div>
      <div class="right-about">
          <div class="about-item">
              <div class="abt-text">
                  <p class="large-text">10+</p>
                  <p class="small-text">Projects <br /> Completed</p>
              </div>
          </div>
          <div class="about-item">
              <div class="abt-text">
                  <p class="large-text">1+</p>
                  <p class="small-text">Years of <br /> experience</p>
              </div>
          </div>
          <div class="about-item">
              <div class="abt-text">
                  <p class="large-text">5+</p>
                  <p class="small-text">Happy <br /> Clients</p>
              </div>
          </div>
          <div class="about-item">
              <div class="abt-text">
                  <p class="large-text">10+</p>
                  <p class="small-text">Customer <br /> reviews</p>
              </div>
          </div>
      </div>
  </div>
  <div class="about-stats">
      <h4 class="stat-title">My Skills</h4>
      <div class="progress-bars">
          <div class="progress-bar">
              <p class="prog-title">html5</p>
              <div class="progress-con">
                  <p class="prog-text">80%</p>
                  <div class="progress">
                      <span class="html"></span>
                  </div>
              </div>
          </div>
          <div class="progress-bar">
              <p class="prog-title">css3</p>
              <div class="progress-con">
                  <p class="prog-text">95%</p>
                  <div class="progress">
                      <span class="css"></span>
                  </div>
              </div>
          </div>
          <div class="progress-bar">
              <p class="prog-title">javascript</p>
              <div class="progress-con">
                  <p class="prog-text">75%</p>
                  <div class="progress">
                      <span class="js"></span>
                  </div>
              </div>
          </div>
          <div class="progress-bar">
              <p class="prog-title">ReactJS</p>
              <div class="progress-con">
                  <p class="prog-text">75%</p>
                  <div class="progress">
                      <span class="react"></span>
                  </div>
              </div>
          </div>
          <div class="progress-bar">
              <p class="prog-title">NodeJS</p>
              <div class="progress-con">
                  <p class="prog-text">87%</p>
                  <div class="progress">
                      <span class="node"></span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <h4 class="stat-title">My Timeline</h4>
  <div class="timeline">
      <div class="timeline-item">
          <div class="tl-icon">
              <i class="fas fa-briefcase"></i>
          </div>
          <p class="tl-duration">2023 - present</p>
          <h5>Student <span> - at FPT Polytechnic</span></h5>
          <p>
          "FPT Polytechnic Practice College was born with the mission of providing good training services on the following criteria: matching the learning capacity of students; meeting the great needs of enterprises; and providing training services. creating standards based on recognized standards. With a rate of 97.7% of students having jobs right after graduation."
          </p>
      </div>
      <div class="timeline-item">
          <div class="tl-icon">
              <i class="fas fa-briefcase"></i>
          </div>
          <p class="tl-duration"> 2011</p>
          <h5>Begin study at FPT<span> - FPT Polytechnic.</span></h5>
          <p>
          FPT Polytechnic College is a public college in Vietnam, established and managed by FPT Corporation.
          </p>
      </div>
      <div class="timeline-item">
          <div class="tl-icon">
              <i class="fas fa-briefcase"></i>
          </div>
          <p class="tl-duration">2022</p>
          <h5>Stydy "Tieng Anh giao tiep "<span> - Lapo English</span></h5>
          <p>
          With learning English and having good communication skills in this language, you will have the opportunity to make new friends, especially young people from different countries, in addition, learning English is also an opportunity. good opportunity for you to learn more about the culture of western countries.
          </p>
      </div>
      <div class="timeline-item">
          <div class="tl-icon">
              <i class="fas fa-briefcase"></i>
          </div>
          <p class="tl-duration">2023</p>
          <h5>Study " Hoc Toiec 1 Lan La Dat "<span> - Zenlish Toeic</span></h5>
          <p>
          TOEIC is a test for people who use English as a foreign language and want to use English in an international communication and working environment.
          </p>
      </div>
  </div>
</section>
</main>
${Constrols()}
    `;
};
export default AboutPage;
