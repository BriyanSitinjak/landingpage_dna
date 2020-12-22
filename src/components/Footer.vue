<template>
    <v-container fluid class="menu-footer"> 
        <v-row>
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
            <v-col cols="12" sm="12" md="1" lg="1" xl="1" class="footer-two">
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
        </v-row>
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.menu-footer {
    /* position: absolute; */
    font-family: 'Roboto';
    background-image: url('../assets/images/footer_home.png');
    background-repeat: no-repeat;
    width: 1824px;
    height: 480px;
    /* left: 70px; */
    padding-left: 50px;
    padding-top: 25px;
    /* color: #000000; */
}

/*--------------------ROW1COL1 WRAPPER-------------------- */
.footer-one {
    line-height: 16px;
    /* border: 2px solid red; */
    padding: 0;
    /* margin: 0; */
    margin-left: 70px;
    color: #FFFFFF;
}

.footer-one > div {
    padding: 15px;
}

.first-footer-one {
    /* border: 2px solid black; */
    width: 375px;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 40px;
}

.second-footer-one {
    width: 375px;
    font-size: 18px;
    margin-bottom: 10px;
    /* border: 2px solid black; */
}

.third-footer-one {
    width: 375px;
    font-size: 14px;
    text-align: left;
    /* border: 2px solid black; */
}

/*--------------------ROW2COL2 WRAPPER-------------------- */
.first-footer-two {
    color: #FFFFFF;
    font-size: 18px;
    line-height: 21px;
    margin-top: 95px;
    /* border: 2px solid red;  */
    /* padding-left: -100px; */
}

.first-footer-two > h5 {
    margin-bottom: 35px;
    /* border: 2px solid black; */
    width: 100px;
}

.first-footer-two > ul > li a{
    color: #FFFFFF;
    text-decoration: none;
    /* color: black; */
    /* border: 2px solid black; */
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
    /* width: 301px;
    height: 302px; */
    /* border: 2px solid red;    */
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
    /* border: 2px solid red; */
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
    /* color: #000000; */
    font-size: 14px;
    font-style: normal;
}

/*--------------------MOBILE VIEW WRAPPER-------------------- */
@media (min-width: 200px) and (max-width: 960px) {
    .footer-one, .footer-two, .footer-three {
        font-size: 15px;
        text-align:center;
        background-image: url('../assets/images/footer_home.png');
    }

    .footer-one {
        margin: auto;
        padding-left: 30px;
    }
    .first-footer-one > p {
        margin: auto;
        text-align: center;
        font-size: 20px;
    }
    .first-footer-one, .second-footer-one, .third-footer-one {
        margin: auto;
        text-align: center;
        padding-right: -100px;
    }
    .first-footer-two {
        margin: auto;
        padding-left: 30px;
    }
    .first-footer-two > h5 {
        margin: auto;
        padding-bottom: 25px;
    }
    .first-footer-three {
        margin: auto;
        padding-left: 30px;
    }
    .first-footer-three > h5 {
        padding-left: 10px;
    }
    .map-section {
        margin: auto;
        text-align: center;
        padding-right: 10px;
    }
    .content-map-section {
        margin: auto;
        text-align: center;
        padding-right: 25px;
        margin-bottom: 10px;
    }
    .icon-map {
        margin: auto;
        align-content: center;
    }
    .icon-footer { 
        margin: auto;
    }
    .mail-section, .facebook-section, .linkedin-section {
        margin: auto;
    }
}

@media (min-width: 960px) and (max-width: 1904px) {
    .first-footer-two > ul > li > a{
        margin-left: -75px;
    }

    .first-footer-two > h5 {
        margin-left: -75px;
    }
}
</style>