import { useEffect } from "../lib";
import { getUserInfo } from "../utils";
const Authenticate = (isLogin = false) => {
  useEffect(() => {
    const user = getUserInfo();
    console.log(user);
  });
  if (isLogin) {
    return /*html */ `
      <div class="authenticate">
        <div class="authenticate-item">
          <a href="">lethitrang@gmail.com</a>
        </div>
        <div class="authenticate-item">
          <a href="">ADMIN</a>
        </div>
    </div>
    `;
  }
  return /*html */ `
    <div class="authenticate">
      <div class="authenticate-item">
        <a href="/signin">SignIn</a>
      </div>
      <div class="authenticate-item">
        <a href="/signup">SignUp</a>
      </div>
    </div>
    `;
};
export default Authenticate;
