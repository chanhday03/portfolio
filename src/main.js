import Navigo from "navigo"; // When using ES modules.
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import PostDetailPage from "./pages/PostDetailPage";
import { render, router } from "./utilities";

const app = document.querySelector("#app");

// Router
router.on("/", function () {
  render(() => HomePage("home"), app);
});
router.on("/about", function () {
  render(() => AboutPage("about"), app);
});
router.on("/portfolio", function () {
  render(() => PortfolioPage("portfolio"), app);
});
router.on("/blogs", function () {
  render(() => BlogPage("blogs"), app);
});
router.on("/contact", function () {
  render(() => ContactPage("contact"), app);
});
// Trong thư viện Navigo đã xử lý hết phần router rồi.
// Khi mà đường dẫn khớp với cái router mình viết ở dưới
//Thì nó sẽ chạy call back. Và sẽ nhận được dữ liệu chứa id
router.on("/post/:id", function ({ data }) {
  render(() => PostDetailPage(data, app));
});

router.resolve();
