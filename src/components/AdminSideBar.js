import { useEffect } from "../lib";

const AdminSideBar = () => {
  useEffect(() => {
    // TOGGLE SIDEBAR
    const menuBar = document.querySelector("#content nav .bx.bx-menu");
    const sidebar = document.getElementById("sidebar");

    menuBar.addEventListener("click", function () {
      sidebar.classList.toggle("hide");
    });
  }, []);

  return /*html */ `
  <!-- SIDEBAR -->
  <section id="sidebar">
      <a href="#" class="brand">
          <i class='bx bxs-smile'></i>
          <span class="text">AdminHub</span>
      </a>
      <ul class="side-menu top">
          <li class="active">
              <a href="admin/#">
                  <i class='bx bxs-dashboard' ></i>
                  <span class="text">Dashboard</span>
              </a>
          </li>
          <li>
              <a href="admin/#">
                  <i class='bx bxs-shopping-bag-alt' ></i>
                  <span class="text">My Store</span>
              </a>
          </li>
          <li>
              <a href="admin/#">
                  <i class='bx bxs-doughnut-chart' ></i>
                  <span class="text">Analytics</span>
              </a>
          </li>
          <li>
              <a href="admin/#">
                  <i class='bx bxs-message-dots' ></i>
                  <span class="text">Message</span>
              </a>
          </li>
          <li>
              <a href="admin/#">
                  <i class='bx bxs-group' ></i>
                  <span class="text">Team</span>
              </a>
          </li>
      </ul>
      <ul class="side-menu">
          <li>
              <a href="admin/#">
                  <i class='bx bxs-cog' ></i>
                  <span class="text">Settings</span>
              </a>
          </li>
          <li>
              <a href="admin/#" class="logout">
                  <i class='bx bxs-log-out-circle' ></i>
                  <span class="text">Logout</span>
              </a>
          </li>
      </ul>
  </section>
  <!-- SIDEBAR -->
  `;
};

export default AdminSideBar;
