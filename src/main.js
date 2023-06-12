import Navigo from "navigo"; // When using ES modules.
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import { render, router } from "./lib";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProductAddPage from "./pages/admin/ProductAddPage";
import ProductEditPage from "./pages/admin/ProductEditPage";
import ProductListPage from "./pages/admin/ProductListPage";

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
//=======================  Admin Router =======================//
router.on("/admin/product", function (params) {
  render(() => AdminLayout(ProductListPage, params.url), app);
});
router.on("/admin/product/add", function (params) {
  render(() => AdminLayout(ProductAddPage, params.url), app);
});
router.on("/admin/product/:id/edit", function (params) {
  render(() => AdminLayout(ProductEditPage, params.url), app);
});

router.resolve();
