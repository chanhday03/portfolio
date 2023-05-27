import Constrols from "../components/Controls";
import ThemeControls from "../components/ThemeControls";
import { posts } from "../dataFake";
import { useEffect } from "../utilities";

const HomePage = (pathName) => {
  return /*html */ `
  <header class="container header active" id="home">
  <div class="header-content">
      <div class="left-header">
          <div class="h-shape"></div>
          <div class="image">
              <img src="img/hero.jpg" alt="">
          </div>
      </div>
      <div class="right-header">
      <h1 class="name">
      Hi, I'm <span>Le Thi Trang</span>
      A Business Analyst (BA)
      </h1>
      <p>
          I'm a Business Analyst (BA), I love to create beautiful and functional websites.
          The main responsibility of the BA position is to analyze and evaluate the company's entire business process to identify problems that need improvement, thereby proposing specific solutions. BA can work directly with customers to receive comments, then transfer information to the internal team for processing. In addition, BA also undertakes the role of writing and managing technical documents.
      </p>
          <div class="btn-con">
              <a href="" class="main-btn">
                  <span class="btn-text">Download CV</span>
                  <span class="btn-icon"><i class="fas fa-download"></i></span>
              </a>
          </div>
      </div>
  </div>
</header>
    ${Constrols(pathName)}
  ${ThemeControls()}
  
 `;
};

export default HomePage;
