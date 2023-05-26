import Navigo from "navigo"; // When using ES modules.
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import PostDetailPage from "./pages/PostDetailPage";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
  const app = document.querySelector("#app");
  app.innerHTML = content();
};
// Router
router.on("/", function () {
  render(HomePage);
});
router.on("/about", function () {
  render(AboutPage);
});
router.on("/portfolio", function () {
  render(PortfolioPage);
});
router.on("/blogs", function () {
  render(BlogPage);
});
router.on("/contact", function () {
  render(ContactPage);
});
// Trong thư viện Navigo đã xử lý hết phần router rồi. Khi mà đường dẫn khớp với cái router mình viết ở dưới
//Thì nó sẽ chạy call back. Và sẽ nhận được dữ liệu chứa í
router.on("/post/:id", function ({ data }) {
  render(() => PostDetailPage(data));
});

router.resolve();

// (function () {
//   [...document.querySelectorAll(".control")].forEach((button) => {
//     button.addEventListener("click", function () {
//       document.querySelector(".active-btn").classList.remove("active-btn");
//       this.classList.add("active-btn");
//     });
//   });
//   document.querySelector(".theme-btn").addEventListener("click", () => {
//     document.body.classList.toggle("light-mode");
//   });
// })();
