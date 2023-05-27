import Constrols from "../components/Controls";
import ThemeControls from "../components/ThemeControls";

const ContactPage = (pathName) => {
  return /*html */ `
  <main> 
    <section class="container contact active" id="contact">
    <div class="contact-container">
        <div class="main-title">
            <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
        </div>
        <div class="contact-content-con">
            <div class="left-contact">
                <h4>Contact me here</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    In, laborum numquam? Quam excepturi perspiciatis quas quasi.
                </p>
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Location</span>
                        </div>
                        <p>
                            : 7 Nguyen Xa , Minh Khai , Bac Tu Niem , Ha Noi
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-envelope"></i>
                            <span>Email</span>
                        </div>
                        <p>
                            <span>: lethitrang010603@gmail.com</span>
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-user-graduate"></i>
                            <span>Education</span>
                        </div>
                        <p>
                            <span>: Cao Dang FPT Polytechnic</span>
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-user-graduate"></i>
                            <span>Mobile Number</span>
                        </div>
                        <p>
                            <span>: +84369913630</span>
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-globe-africa"></i>
                            <span>Languages</span>
                        </div>
                        <p>
                            <span>: English</span>
                        </p>
                    </div>
                </div>
                <div class="contact-icons">
                    <div class="contact-icon">
                        <a href="https://www.facebook.com/chanhday03" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://github.com/chanhday03" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCqtsjnugG1y4NLQTSXItcIw" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="right-contact">
                <form action="" class="contact-form">
                    <div class="input-control i-c-2">
                        <input type="text" required placeholder="YOUR NAME">
                        <input type="email" required placeholder="YOUR EMAIL">
                    </div>
                    <div class="input-control">
                        <input type="text" required placeholder="ENTER SUBJECT">
                    </div>
                    <div class="input-control">
                        <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                    </div>
                    <div class="submit-btn">
                        <a href="#" class="main-btn">
                            <span class="btn-text">Download CV</span>
                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</main>
  ${Constrols(pathName)}
  ${ThemeControls()}
    `;
};
export default ContactPage;
