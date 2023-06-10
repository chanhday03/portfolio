import { router, useEffect } from "../lib";

const Signin = () => {
  useEffect(() => {
    const formSignin = document.querySelector("#form-signin");
    if (!formSignin) return;
    formSignin.addEventListener("submit", function (event) {
      // chặn reload trang
      event.preventDefault();

      const credential = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
      };

      fetch(`${import.meta.env.VITE_API_URI}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credential),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          window.alert("Đăng nhập thành công");
          router.navigate("/admin");
        });
    });
  });
  return /*html */ `
        <section id="guess">
          <div class="form-box">
              <div class="form-value">
                  <form id="form-signin">
                      <h2>Login</h2>
                      <div class="inputbox">
                          <ion-icon name="mail-outline"></ion-icon>
                          <input type="email" required id="email">
                          <label for="">Email</label>
                      </div>
                      <div class="inputbox">
                          <ion-icon name="lock-closed-outline"></ion-icon>
                          <input type="password" id="password" required>
                          <label for="">Password</label>
                      </div>
                      <div class="forget">
                          <label for=""><input type="checkbox">Remember Me 
                          
                      </div>
                      <button type="submit">Log in</button>
                      <div class="register">
                          <p>Don't have a account <a href="/signup">Register</a></p>
                      </div>
                  </form>
              </div>
          </div>
        </section>
    `;
};
export default Signin;
