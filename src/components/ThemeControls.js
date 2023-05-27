import { useEffect } from "../utilities";

const ThemeControls = () => {
  useEffect(() => {
    const buttonSwitchTheme = document.querySelector(".theme-btn");
    buttonSwitchTheme.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  });
  return /*html */ `
    <div class="theme-btn">
        <i class="fas fa-adjust"></i>
    </div>
    `;
};
export default ThemeControls;
