import { useEffect } from "../lib";

const AdminNavbar = () => {
  useEffect(() => {
    const switchMode = document.getElementById("switch-mode");

    switchMode.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("light-mode");
      } else {
        document.body.classList.remove("light-mode");
      }
    });
  }, []);

  return /*html */ `
    <!-- NAVBAR -->
		<nav>
        <i class='bx bx-menu' ></i>
        <a href="#" class="nav-link">Categories</a>
        <form action="#">
            <div class="form-input">
                <input type="search" placeholder="Search...">
                <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
            </div>
        </form>
        <input type="checkbox" id="switch-mode" hidden>
        <label for="switch-mode" class="switch-mode"></label>
        <a href="#" class="notification">
            <i class='bx bxs-bell' ></i>
            <span class="num">8</span>
        </a>
        <a href="#" class="profile">
            <img src="img/people.png">
        </a>
    </nav>
    <!-- NAVBAR -->
  `;
};

export default AdminNavbar;
