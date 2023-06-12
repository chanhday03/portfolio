import AdminNavbar from "../components/AdminNavbar";
import AdminSideBar from "../components/AdminSideBar";
import { useEffect } from "../lib";
import { handleSearchForm } from "../utils";

const AdminLayout = function (Page, pathName) {
  useEffect(() => {
    const allSideMenu = document.querySelectorAll(
      "#sidebar .side-menu.top li a"
    );

    allSideMenu.forEach((item) => {
      const li = item.parentElement;

      item.addEventListener("click", function () {
        allSideMenu.forEach((i) => {
          i.parentElement.classList.remove("active");
        });
        li.classList.add("active");
      });
    });

    handleSearchForm();
  }, []);

  return /*html */ `
    <div id="admin">
        <!-- SIDEBAR -->
        ${AdminSideBar(pathName)}

        <!-- CONTENT -->
        <section id="content">
            ${AdminNavbar()}   
              <div id="page-content">
                  ${Page ? Page() : ""}
              </div>
        </section>
        <!-- CONTENT -->
    
  `;
};

export default AdminLayout;
