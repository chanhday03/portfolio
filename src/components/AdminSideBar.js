import { useEffect } from "../lib";
import { handleToggleAdminSidebar } from "../utils";

const AdminSideBar = (pathName) => {
  const checkIsActive = function (href) {
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
          <li class="${checkIsActive("admin")}">
              <a href="/admin/">
                    <i class='bx bxs-dashboard' ></i>
                    <span class="text">Dashboard</span>
              </a>
          </li>
          <li class="${checkIsActive("admin/category")}">
              <a href="/admin/category">
                    <i class='bx bx-category' ></i>
                    <span class="text">Categories</span>
              </a>
          </li>
          <li class="${checkIsActive("admin/project")}">
              <a href="/admin/project">
                    <i class='bx bxs-shopping-bag-alt' ></i>
                    <span class="text">Projects</span>
              </a>
          </li>
      </ul>
      <ul class="side-menu">
          <li>
              <a href="/admin/#">
                  <i class='bx bxs-cog' ></i>
                  <span class="text">Settings</span>
              </a>
          </li>
          <li>
              <a href="/admin/#" class="logout">
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
