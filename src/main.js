import Navigo from "navigo"; // When using ES modules.
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import PostDetailPage from "./pages/PostDetailPage";
import { render, router } from "./lib";
import WebsiteLayout from "./layouts/WebsiteLayout";
import AddProject from "./admin/Projects/AddProject";
import EditProject from "./admin/Projects/EditProject";
// import ListProject from "./admin/Projects/ListProject";

const app = document.querySelector("#app");

// Router
router.on("/", function () {
  render(() => WebsiteLayout(HomePage, "home"), app);
});
router.on("/about", function () {
  render(() => WebsiteLayout(AboutPage, "about"), app);
});
router.on("/portfolio", function () {
  render(() => WebsiteLayout(PortfolioPage, "portfolio"), app);
});
router.on("/blogs", function () {
  render(() => WebsiteLayout(BlogPage, "blogs"), app);
});
router.on("/contact", function () {
  render(() => WebsiteLayout(ContactPage, "contact"), app);
});

// Trong thư viện Navigo đã xử lý hết phần router rồi.
// Khi mà đường dẫn khớp với cái router mình viết ở dưới
//Thì nó sẽ chạy call back. Và sẽ nhận được dữ liệu chứa id

// Admin
router.on("/admin/products/add", () => render(AddProject, app));
router.on("/admin/products/:id/edit", ({ data }) =>
  render(() => EditProject(data), app)
);

router.resolve();
