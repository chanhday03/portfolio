import { router, useEffect } from "../lib";
const Signup = () => {
  useEffect(() => {
    const formSignup = document.querySelector("#form-signup");
    if (!formSignup) return;
    formSignup.addEventListener("submit", function (event) {
      // chặn reload trang
      event.preventDefault();

      const credential = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
      };

      fetch(`${import.meta.env.VITE_API_URI}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credential),
      }).then((res) => {
        console.log("res", res);
        if (res.ok) {
          window.alert("Bạn đăng ký thành công");
          setTimeout(() => {
            router.navigate("/signin", {
              email: credential.email,
            });
          }, 1000);
        } else {
          window.alert("Không đăng ký được");
        }
      });
    });
  });
  return /*html */ `
  <section id="guess">
    <div class="form-box">
        <div class="form-value">
            <form id="form-signup">
                <h2>Register</h2>
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
                <button type="submit">Register</button>
                <div class="register">
                    <p>Already have a account <a href="/signin">Login</a></p>
                </div>
            </form>
        </div>
    </div>
  </section>
    `;
};
export default Signup;
