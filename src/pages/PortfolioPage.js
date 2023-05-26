import Constrols from "../components/Controls";

const PortfolioPage = () => {
  return /*html */ `
  <main> 
    <section class="container active" id="portfolio">
    <div class="main-title">
        <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
    </div>
    <p class="port-text">
        Here is some of my work that I've done in various programming languages.
    </p>
    <div class="portfolios">
        <div class="portfolio-item">
            <div class="image">
                <img src="img/port1.jpg" alt="">
            </div>
            <div class="hover-items">
                <h3>Project Source</h3>
                <div class="icons">
                    <a href="#" class="icon">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-behance"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="portfolio-item">
            <div class="image">
                <img src="img/port2.jpg" alt="">
            </div>
            <div class="hover-items">
                <h3>Project Source</h3>
                <div class="icons">
                    <a href="#" class="icon">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-behance"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="portfolio-item">
            <div class="image">
                <img src="img/port3.jpg" alt="">
            </div>
            <div class="hover-items">
                <h3>Project Source</h3>
                <div class="icons">
                    <a href="#" class="icon">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-behance"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="portfolio-item">
            <div class="image">
                <img src="img/port4.jpg" alt="">
            </div>
            <div class="hover-items">
                <h3>Project Source</h3>
                <div class="icons">
                    <a href="#" class="icon">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-behance"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="portfolio-item">
            <div class="image">
                <img src="img/port5.jpg" alt="">
            </div>
            <div class="hover-items">
                <h3>Project Source</h3>
                <div class="icons">
                    <a href="#" class="icon">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-behance"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="portfolio-item">
            <div class="image">
                <img src="img/port2.jpg" alt="">
            </div>
            <div class="hover-items">
                <h3>Project Source</h3>
                <div class="icons">
                    <a href="#" class="icon">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-behance"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="portfolio-item">
            <div class="image">
                <img src="img/port7.jpg" alt="">
            </div>
            <div class="hover-items">
                <h3>Project Source</h3>
                <div class="icons">
                    <a href="#" class="icon">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-behance"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
</main>
${Constrols()}
    `;
};

export default PortfolioPage;
