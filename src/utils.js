//============== Thay đổi theme admin ================//
export const handleSwitchWebsiteTheme = function () {
  const buttonSwitchTheme = document.querySelector(".theme-btn");
  buttonSwitchTheme.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
};

//============== Thay đổi theme admin ================//
export const handleSwitchAdminTheme = function () {
  const switchMode = document.getElementById("switch-mode");

  switchMode.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  });
};

//============== Mở rộng và thu hẹp sidebar admin ================//
export const handleToggleAdminSidebar = function () {
  const menuBar = document.querySelector("#content nav .bx.bx-menu");
  const sidebar = document.getElementById("sidebar");

  menuBar.addEventListener("click", function () {
    sidebar.classList.toggle("hide");
  });
};

//============== Xử lý form search trên navbar ================//
export const handleSearchForm = function () {
  const searchButton = document.querySelector(
    "#content nav form .form-input button"
  );
  const searchButtonIcon = document.querySelector(
    "#content nav form .form-input button .bx"
  );
  const searchForm = document.querySelector("#content nav form");

  searchButton.addEventListener("click", function (e) {
    if (window.innerWidth < 576) {
      e.preventDefault();
      searchForm.classList.toggle("show");
      if (searchForm.classList.contains("show")) {
        searchButtonIcon.classList.replace("bx-search", "bx-x");
      } else {
        searchButtonIcon.classList.replace("bx-x", "bx-search");
      }
    }
  });

  if (window.innerWidth < 768) {
    sidebar.classList.add("hide");
  } else if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }

  window.addEventListener("resize", function () {
    if (this.innerWidth > 576) {
      searchButtonIcon.classList.replace("bx-x", "bx-search");
      searchForm.classList.remove("show");
    }
  });
};
