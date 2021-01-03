<template>
    <v-container fluid class="menu-footer"> 
        <v-row class="row-footer"> 
            <v-col cols="12" sm="12" md="7" lg="7" xl="7" 
            class="footer-one">
                <div class="first-footer-one">
                    <p>DIGITAL NATIVE AGENCY</p>
                </div>
                <div class="second-footer-one">
                    <p>You have an idea, we make it comes true</p>
                </div>
                <div class="third-footer-one">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et egestas dui libero et eget neque. Consequat fusce justo, diam sed. Scelerisque mus vitae varius ut non volutpat mattis eleifend proin. Turpis eget odio lectus nunc imperdiet. Vitae convallis commodo dui sollicitudin viverra congue. Quis gravida tincidunt sed quis ultrices habitasse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et egestas dui libero et eget neque. Consequat fusce justo, diam sed. Scelerisque mus vitae varius ut non volutpat mattis eleifend proin. Turpis eget odio lectus nunc imperdiet. Vitae convallis commodo dui sollicitudin viverra congue. Quis gravida tincidunt sed quis ultrices habitasse.</p>
                </div>
            </v-col>
            <v-col class="footer-two" cols="12" sm="12" md="1" lg="1" xl="1">
                <div class="first-footer-two">
                    <h5>SITEMAP</h5>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Service</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="footer-three">
                <div class="first-footer-three">
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
            </v-col>
            <div class="copyright-section">
                <p>Copyright  ©  2020 Digital Native Agency</p>
            </div>
        </v-row>
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.menu-footer {
    font-family: 'Roboto';
    background-image: url('../assets/images/footer_home.png');
    background-repeat: no-repeat;
    width: 1824px;
    height: 480px;
    margin-left: 70px;
    padding-left: 50px;
    padding-top: 25px;
}

/*--------------------ROW1COL1 WRAPPER-------------------- */
.footer-one {
    line-height: 16px;
    padding: 0;
    color: #FFFFFF;
}

.footer-one > div {
    padding: 15px;
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
    text-align: left;
}

/*--------------------ROW2COL2 WRAPPER-------------------- */
.first-footer-two {
    color: #FFFFFF;
    font-size: 18px;
    line-height: 21px;
    margin-top: 95px;
}

.first-footer-two > h5 {
    margin-bottom: 35px;
    width: 100px;
}

.first-footer-two > ul > li a{
    color: #FFFFFF;
    text-decoration: none;
    width: 100px;
}

.first-footer-two > ul > li{
    list-style: none;
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 500;
}

/*--------------------ROW3COL3 WRAPPER-------------------- */
.first-footer-three {
    margin-top: 95px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
}

.first-footer-three > h5 {
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
    height: 100%;
}

.content-map-section {
    padding-top: 20px;
    width: 350px;
    height: 100px;
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
    width: 90%;
    text-align: center;
    margin-top: 425px;
    color: #FFFFFF;
    font-size: 16px;
    font-style: normal;
}

/*--------------------MOBILE VIEW WRAPPER-------------------- */
@media (min-width: 200px) and (max-width: 960px) {
    .menu-footer {
        margin-left: 0px;
    }

    
    .footer-one, .footer-two, .footer-three {
        font-size: 15px;
        text-align:center;
        background-image: url('../assets/images/footer_home.png');
    }


    .footer-one {
        position: absolute;
        width: 100%;
        height: auto;
        margin-left: -39px;
    }
    .first-footer-one > p {
        text-align: center;
    }
    .first-footer-one, .second-footer-one, .third-footer-one {
        margin: auto;
        text-align: justify;
    }


    .footer-two {
        position: absolute;
        width: 100%;
        height: 235px;
        margin-left: -38px;
        margin-top: 400px;
        border-top: 4px solid white;
    }
    .first-footer-two {
        margin: auto;
    }
    .first-footer-two > h5 {
        margin: auto;
        padding-bottom: 30px;
        font-size: 18px;
    }
    .first-footer-two > ul > li {
        margin-bottom: 12px;
    }


    .footer-three {
        position: absolute;
        width: 100%;
        height: auto;
        margin-top: 635px;
        margin-left: -38px;
        border-top: 4px solid white;
    }
    .first-footer-three {
        margin: auto;
        text-align: center;
    }
    .first-footer-three > h5 {
        font-size: 18px;
    }
    .map-section {
        text-align: center;
        width: 100%;
    }
    .content-map-section {
        margin: auto;
        text-align: center;
        margin-bottom: 32px;
    }
    .content-map-section > p {
        text-align: center;
    }
    .icon-footer { 
        margin: auto;
        margin-left: -13px;
    }
    .mail-linkedin-facebook-section {
        width: 100%;
        padding-top: 8px;
    }
    .mail-linkedin-facebook-section > div > img {
        margin-top: -20px;
    }
    .mail-section, .facebook-section, .linkedin-section {
        margin: auto;
    }
    .content-last-footer-section {
        width: 100%;
        margin: auto;
        margin-bottom: 20px;
    }
    .copyright-section {
        display: none;
    }
}

/*--------------------DESKTOP VIEW WRAPPER-------------------- */
@media (min-width: 960px) and (max-width: 1904px) {
    .first-footer-two > ul > li > a{
        margin-left: -75px;  
    }

    .first-footer-two > h5 {
        margin-left: -75px;
    }

}
</style>