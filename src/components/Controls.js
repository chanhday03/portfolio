const Constrols = (pathName) => {
  //============== Xử lý active icon navbar ================//
  const checkIsAcive = function (href) {
    if (pathName === href) {
      return "active-btn";
    } else {
      return "";
    }
  };

  return /*html */ `
    <div class="controls">
    <a href="/" title="Home Page">
        <div class="control ${checkIsAcive("")}">
            <i class="fas fa-home"></i>
        </div>
    </a>

    <a href="/about" title="About Page">
        <div class="control ${checkIsAcive("about")}">
            <i class="fas fa-user"></i>
        </div>
    </a>

    <a href="/portfolio" title="Portfolio Page">
    <div class="control ${checkIsAcive("portfolio")}">
            <i class="fas fa-briefcase"></i>
    </div>
    </a>

    <a href="/blogs" title="Blogs Page">
    <div class="control ${checkIsAcive("blogs")}">
            <i class="far fa-newspaper"></i>
    </div>
    </a>
    
    <a href="/contact" title="Contact Page">
    <div class="control ${checkIsAcive("contact")}">
            <i class="fas fa-envelope-open"></i>
    </div>
    </a>
</div>
    `;
};
export default Constrols;
