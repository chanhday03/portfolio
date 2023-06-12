import { useEffect } from "../lib";
import { handleToggleAdminSidebar } from "../utils";

const AdminSideBar = (pathName) => {
  const checkIsAcive = function (href) {
    if (pathName === href) {
      return "active";
    } else {
      return "";
    }
  };

  useEffect(() => {
    handleToggleAdminSidebar();
  }, []);

  return /*html */ `
  <!-- SIDEBAR -->
  <section id="sidebar">
      <a href="#" class="brand">
          <i class='bx bxs-smile'></i>
          <span class="text">Admin</span>
      </a>
      <ul class="side-menu top">
          <li class="${checkIsAcive(pathName, "admin")}">
              <a href="admin/#">
                  <i class='bx bxs-dashboard' ></i>
                  <span class="text">Dashboard</span>
              </a>
          </li>
          <li class="${checkIsAcive(pathName, "admin")}">
              <a href="admin/project">
                  <i class='bx bxs-shopping-bag-alt' ></i>
                  <span class="text">Projects</span>
              </a>
          </li>
          <li class="${checkIsAcive(pathName, "admin")}">
              <a href="admin/product">
                  <i class='bx bxs-doughnut-chart' ></i>
                  <span class="text">Products</span>
              </a>
          </li>
          <li class="${checkIsAcive(pathName, "")}">
              <a href="admin/#">
                  <i class='bx bxs-message-dots' ></i>
                  <span class="text">Blogs</span>
              </a>
          </li>
          <li class="${checkIsAcive(pathName, "")}">
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
