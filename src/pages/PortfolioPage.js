import { getProjects } from "../api/project";
import { useEffect, useState } from "../lib";

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]); // 1

  // Get List Project
  const fetchListProject = async () => {
    try {
      const response = await getProjects();
      setProjects(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Get List Project
  useEffect(() => {
    fetchListProject();
  }, []);
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
        ${projects
          .map((project) => {
            return /*html */ `<div class="portfolio-item">
            <div class="image">
                <img src="${project.img}" alt="">
            </div>
            <div class="hover-items">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>${project.time}</p>
                <p>${project.skills}</p>
                <p>${project.role}</p>
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
        </div>`;
          })
          .join("")}
        
    </div>
</section>
</main>
  
    `;
};

export default PortfolioPage;
