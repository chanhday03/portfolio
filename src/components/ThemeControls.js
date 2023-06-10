import { useEffect } from "../lib";
import { handleSwitchWebsiteTheme } from "../utils";

const ThemeControls = () => {
  useEffect(() => {
    handleSwitchWebsiteTheme();
  });
  return /*html */ `
    <div class="theme-btn">
        <i class="fas fa-adjust"></i>
    </div>
    `;
};
export default ThemeControls;
