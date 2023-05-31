const Constrols = (pathName) => {
  return /*html */ `
    <div class="controls">
    <a href="/" title="Home Page">
        <div class="control ${pathName === "home" ? "active-btn" : ""}">
            <i class="fas fa-home"></i>
        </div>
    </a>

    <a href="/about" title="About Page">
        <div class="control ${pathName === "about" ? "active-btn" : ""}">
            <i class="fas fa-user"></i>
        </div>
    </a>

    <a href="/portfolio" title="Portfolio Page">
    <div class="control ${pathName === "portfolio" ? "active-btn" : ""}">
            <i class="fas fa-briefcase"></i>
    </div>
    </a>

    <a href="/blogs" title="Blogs Page">
    <div class="control ${pathName === "blogs" ? "active-btn" : ""}">
            <i class="far fa-newspaper"></i>
    </div>
    </a>
    
    <a href="/contact" title="Contact Page">
    <div class="control ${pathName === "contact" ? "active-btn" : ""}">
            <i class="fas fa-envelope-open"></i>
    </div>
    </a>
</div>
    `;
};
export default Constrols;
