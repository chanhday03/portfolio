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

const app = document.querySelector("#app");

// Trong thư viện Navigo đã xử lý hết phần router rồi.
// Khi mà đường dẫn khớp với cái router mình viết ở dưới
//Thì nó sẽ chạy call back. Và sẽ nhận được dữ liệu chứa id qua tham số của callback đó

//======================= Website  Router =======================//
router.on("/signup", () => render(Signup, app));
router.on("/signin", (param) => {
  console.log(param);
  render(Signin, app);
});

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

//=======================  Admin Router =======================//

// private router
router.on("/admin/*", () => {}, {
  before(next) {
    const { user } = JSON.parse(localStorage.getItem("user")) || {};
    if (!user) return (window.location.href = "/");
    if (user && user.id != "1") return (window.location.href = "/signin");
    next();
  },
});

router.resolve();
