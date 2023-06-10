import Constrols from "../components/Controls";
import ThemeControls from "../components/ThemeControls";

const WebsiteLayout = function (Page, pathName) {
  return /*html */ `
  <div id="website">
    ${Page(pathName)}
    ${Constrols(pathName)}
    ${ThemeControls()}
  </div>`;
};

export default WebsiteLayout;
