import AdminLayout from "./layouts/AdminLayout";
import WebsiteLayout from "./layouts/WebsiteLayout";
import { render, router } from "./lib";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PortfolioPage from "./pages/PortfolioPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoryAddPage from "./pages/admin/CategoryAddPage";
import CategoryEditPage from "./pages/admin/CategoryEditPage";
import CategoryListPage from "./pages/admin/CategoryListPage";
import ProjectAddPage from "./pages/admin/ProjectAddPage";
import ProjectEditPage from "./pages/admin/ProjectEditPage";
import ProjectListPage from "./pages/admin/ProjectListPage";

const app = document.querySelector("#app");

// Trong thư viện Navigo đã xử lý hết phần router rồi.
// Khi mà đường dẫn khớp với cái router mình viết ở dưới
//Thì nó sẽ chạy call back. Và sẽ nhận được dữ liệu chứa id qua tham số của callback đó

// private router
router.on("/admin/*", () => {}, {
  // before(next) {
  //   const { user } = JSON.parse(localStorage.getItem("user")) || {};
  //   if (!user) return (window.location.href = "/");
  //   if (user && user.id != "1") return (window.location.href = "/signin");
  //   next();
  // },
});

//======================= Website  Router =======================//
router.on("/signup", () => render(Signup, app));
router.on("/signin", (param) => {
  render(Signin, app);
});

router.on("/", function (params) {
  render(() => WebsiteLayout(HomePage, params.url), app);
});
router.on("/about", function (params) {
  render(() => WebsiteLayout(AboutPage, params.url), app);
});
router.on("/portfolio", function (params) {
  render(() => WebsiteLayout(PortfolioPage, params.url), app);
});
router.on("/blogs", function (params) {
  render(() => WebsiteLayout(BlogPage, params.url), app);
});
router.on("/contact", function (params) {
  render(() => WebsiteLayout(ContactPage, params.url), app);
});

//=======================  Admin Router =======================//
router.on("/admin", function (params) {
  render(() => AdminLayout(AdminDashboard, params.url), app);
});

//======================= Admin Category Router =======================//
router.on("/admin/category", function (params) {
  render(() => AdminLayout(CategoryListPage, params.url), app);
});

router.on("/admin/category/add", function (params) {
  render(() => AdminLayout(CategoryAddPage, params.url), app);
});

router.on("/admin/category/:id/edit", function (params) {
  render(
    () => AdminLayout(() => CategoryEditPage(params.data), params.url),
    app
  );
});

//======================= Admin Project Router =======================//

router.on("/admin/project", function (params) {
  render(() => AdminLayout(ProjectListPage, params.url), app);
});
router.on("/admin/project/add", function (params) {
  render(() => AdminLayout(ProjectAddPage, params.url), app);
});
router.on("/admin/project/:id/edit", function (params) {
  render(
    () => AdminLayout(() => ProjectEditPage(params.data), params.url),
    app
  );
});

router.notFound(() => {
  render(() => NotFoundPage(), app);
});

//============Xử lý click vào thẻ a bị load lại trang ==============//
document.addEventListener("click", (event) => {
  // Kiểm tra xem phần tử được click có phải là thẻ <a> không
  const anchorElement = event.target.closest("a");

  // Kiểm tra xem có tồn tại thẻ <a> cha hay không
  if (anchorElement) {
    // Ngăn chặn hành vi mặc định của trình duyệt (load lại trang)
    event.preventDefault();

    // Lấy href của thẻ <a>
    const href = anchorElement.getAttribute("href");

    // Chuyển đổi route bằng Navigo.js
    router.navigate(href);
  }
});

router.resolve();
