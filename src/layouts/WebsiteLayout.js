import Constrols from "../components/Controls";
import ThemeControls from "../components/ThemeControls";

const WebsiteLayout = function (Page, pathName) {
  return /*html */ `
    ${Page(pathName)}
    ${Constrols(pathName)}
    ${ThemeControls()}
      `;
};

export default WebsiteLayout;
