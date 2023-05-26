const Constrols = () => {
  return /*html */ `
    <div class="controls">
    <a href="/">
        <div class="control active-btn ">
            <i class="fas fa-home"></i>
        </div>
    </a>

    <a href="/about">
        <div class="control">
            <i class="fas fa-user"></i>
        </div>
    </a>

    <a href="/portfolio">
    <div class="control">
            <i class="fas fa-briefcase"></i>
    </div>
    </a>

    <a href="/blogs">
    <div class="control">
            <i class="far fa-newspaper"></i>
    </div>
    </a>
    
    <a href="/contact">
    <div class="control">
            <i class="fas fa-envelope-open"></i>
    </div>
    </a>
</div>
    `;
};
export default Constrols;
