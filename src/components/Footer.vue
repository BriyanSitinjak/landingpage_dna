<template>
    <v-footer class="menu-footer">
        <v-col>
            <v-row cols="12" md="6" class="footer-one">
                <div class="first-footer-one">
                    <p>DIGITAL NATIVE AGENCY</p>
                </div>
                <div class="second-footer-one">
                    <p>You have an idea, we make it comes true</p>
                </div>
                <div class="third-footer-one" justify>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et egestas dui libero et eget neque. Consequat fusce justo, diam sed. Scelerisque mus vitae varius ut non volutpat mattis eleifend proin. Turpis eget odio lectus nunc imperdiet. Vitae convallis commodo dui sollicitudin viverra congue. Quis gravida tincidunt sed quis ultrices habitasse.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et egestas dui libero et eget neque. Consequat fusce justo, diam sed. Scelerisque mus vitae varius ut non volutpat mattis eleifend proin. Turpis eget odio lectus nunc imperdiet. Vitae convallis commodo dui sollicitudin viverra congue. Quis gravida tincidunt sed quis ultrices habitasse.</p>
                </div>
            </v-row>
        </v-col>
        <v-col>
            <v-row cols="12" md="6">
                <div class="first-footer-two">
                    <h5>SITEMAP</h5>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Service</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>
            </v-row>
        </v-col>
        <v-col>
            <v-row cols="12" md="6">
                <div class="first-footer-third">
                        <h5>CONTACT US</h5>
                        <div class="map-section">
                            <img src="../assets/logo/logo_map.png" class="icon-footer icon-map">
                            <div class="content-map-section">
                                <p> Menara Global</p>
                                <p> 15th Floor Unit C-D</p>
                                <p> Jl Gatut Subroto No Kav 27,</p>
                                <p> RT. 03/RW.03, Kuningan, Jakarta Selatan</p>
                                <p> 12980</p>
                                <p> Indonesia</p>
                            </div>
                        </div>
                        <div class="mail-linkedin-facebook-section">
                            <div class="mail-section">
                                <img src="../assets/logo/logo_mail.png" class="icon-footer icon-mail">
                                <p class="content-last-footer-section">info@digitalnative.id</p>
                            </div>
                            <div class="linkedin-section">
                                <img src="../assets/logo/logo_linkedin.png" class="icon-footer icon-linkedin">
                                <p class="content-last-footer-section">Digital Native Agency Indonesia</p>
                            </div>
                            <div class="facebook-section">
                                <img src="../assets/logo/logo_facebook.png" class="icon-footer icon-facebook">
                                <p class="content-last-footer-section">Digital Native Agency Indonesia</p>
                            </div>
                        </div>
                    </div>
            </v-row>
        </v-col>
        <div class="copyright-section">
            <p>Copyright  ©  2020 Digital Native Agency</p>
        </div>
    </v-footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.menu-footer {
    background-image: url('../assets/images/footer_home.png');
    background-repeat: no-repeat;
    width: 100%;
    height: 480px;
    left: 70px;
    padding: 20px 0px 0px 80px;
}

.footer-one {
    color: #FFFFFF;
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
}

.footer-one > div {
    padding-bottom: 40px;
}

.first-footer-one {
    width: 375px;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 40px;
}

.second-footer-one {
    width: 375px;
    font-size: 18px;
    margin-bottom: 10px;
}

.third-footer-one {
    width: 375px;
    font-size: 14px;
    text-align: justify;
}

.first-footer-two {
    color: #FFFFFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    margin: 0px 0px 55px 150px;
}

.first-footer-two > h5 {
    padding-bottom: 35px;
}

.first-footer-two > ul > li a{
    color: #FFFFFF;
    text-decoration: none;
}

.first-footer-two > ul > li{
    list-style: none;
    margin-bottom: 24px;
    font-size: 16px;
}

.first-footer-third {
    width: 301px;
    height: 302px;
    color: #FFFFFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    margin-top: 15px;
    margin-left: -10px;
}

.first-footer-third > h5 {
    font-size: 15px;
    padding-bottom: 12px;
}

.icon-footer {
    position: absolute;
    width: 24px;
    height: 24px;
    margin-top: 20px;
}

.map-section {
    width: 297px;
    height: 104px;
}

.content-map-section {
    padding-top: 20px;
    width: 350px;
    margin-left: 30px;
}

.mail-section {
    padding-top: 40px;
    width: 298px;
}

.linkedin-section {
    padding-top: 10px;
    width: 298px;
}

.facebook-section {
    padding-top: 10px;
    width: 298px;
}

.content-last-footer-section {
    margin-left: 30px;
    margin-top: 20px;
}

.copyright-section {
    position: absolute;
    margin: 420px 300px 0px 425px;
    color: #FFFFFF;
    font-size: 14px;
    font-style: normal;
}
</style>