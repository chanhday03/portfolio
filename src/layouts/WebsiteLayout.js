import Authenticate from "../components/Authenticate";
import Constrols from "../components/Controls";
import ThemeControls from "../components/ThemeControls";

const WebsiteLayout = function (Page, pathName) {
  return /*html */ `
  <div id="website">
    ${Page()}
    ${Constrols(pathName)}
    ${ThemeControls()}
    ${Authenticate()}
  </div>`;
};

export default WebsiteLayout;
