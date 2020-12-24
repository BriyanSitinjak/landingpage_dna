<template>
    <div app> 
        <Sidebar /> 
            <div class="main-menu-bar">
                <v-img
                src="../assets/images/background_img.png"
                width=100%
                height=100%
                ></v-img>
                <div class="main-container">
                    <h2>DIGITAL NATIVE AGENCY</h2>
                    <div class="main-content">
                        <h2>Digitalize Your Business Through Innovation</h2>
                    </div>
                    <a href="/service" class="btn learn-more"><span class="text-learn-more">Learn more</span></a>
                </div>
            </div>
            <div class="mid-wrapper">
                <div class="mid-content-wrapper">
                    <v-row>
                        <v-col class="mid content-years">
                            <p class="txt-number">2</p>
                            <p class="txt-content">Year of Experience</p>
                        </v-col>
                        <v-col class="mid content-projects">
                            <p class="txt-number">10</p>
                            <p class="txt-content">Successful Projects</p>
                        </v-col>
                        <v-col class="mid content-clients">
                            <p class="txt-number">6</p>
                            <p class="txt-content">Happy Clients</p>
                        </v-col>
                    </v-row>
                </div>
            </div>
            <div class="mid-service">
                <div class="mid-service-wrapper">
                    <div class="service-wrapper">
                        <p class="txt-service"> Service That We Can Provide</p>
                    </div>
                    <img class="img-service" src="../assets/images/line.png" alt="Line">
                    <div class="mid-icon">
                        <div class="mid-icon-content">
                            <div class="ui-ux-images">
                                <div class="icon img-ui">
                                    <img src="../assets/images/uiux_dev.png" alt="UIUX">
                                </div>
                                <p> class="text txt-ui">UI/UX Design</p>
                            </div>
                            <div class="web-images">
                                <div class="icon img-web">
                                    <img src="../assets/images/website_dev.png" alt="Website">
                                </div>
                                <p class="text txt-web">Website Development</p>
                            </div>
                            <div class="mobile-images">
                                <div class="icon img-mobile">
                                    <img src="../assets/images/mobile_dev.png" alt="Mobile">
                                </div>
                                <p class="text txt-mobile">Mobile Apps Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-menu">
                <div class="project-menu-wrapper">
                    <p>Our Project</p>
                    <div class="line-project"></div>
                    <div class="scroll-project">
                        <div class="project-scroll-content">
                            <div class="our-project-content">
                                <div class="img-project-livera">
                                    <img src="../assets/images/livera_box.png" alt="Livera">
                                    <p class="txt-project">C-PRO</p>
                                </div>
                                <div class="img-project-kolita">
                                    <img src="../assets/images/box_default.png" alt="Kolita">
                                    <p class="txt-project">Atmajaya (KOLITA)</p>
                                </div>
                                <div class="img-project-wvi">
                                    <img src="../assets/images/box_default.png" alt="Binbank">
                                    <p class="txt-project">Binbank (WVI)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="img-arrow">
                        <img v-on:click="back" src="../assets/logo/icon_back.png" alt="Back">
                        <img v-on:click="next" src="../assets/logo/icon_next.png" alt="Next">
                    </div>
                </div>
            </div>
        <OurHappyClient />
        <Footer />
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import OurHappyClient from '@/components/OurHappyClient.vue'

export default {
    components:{
        Sidebar,
        Footer,
        OurHappyClient
    }
}
</script>

<style scoped>
/*--------------------HOME WRAPPER-------------------- */
.main-menu-bar {
    position: relative;
    font-family: 'Roboto';
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    left: 70px;
    color: #ffffff;
}

.main-container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: linear-gradient(124.11deg, rgba(110, 42, 169, 0.8) 27.4%, rgba(255, 255, 255, 0) 102.33%), linear-gradient(108.51deg, rgba(110, 42, 169, 0.5) 0.81%, rgba(94, 44, 176, 0.5) 32.12%, rgba(112, 42, 168, 0.5) 40.81%, rgba(110, 42, 169, 0.5) 50.65%, rgba(121, 40, 164, 0.5) 63.06%, rgba(147, 37, 152, 0.5) 77.15%);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.main-container > h2 {
    margin: 10px 0px 0px 30px;
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
}

.main-content {
    width: 800px;
}

.main-content > h2 {
    font-size: 45px;
    font-weight: 900;
    line-height: 50px;
    margin: 150px 0px 0px 100px;
    font-style: normal;
}

.btn {
    position: absolute;
    background-color: white;
    text-decoration: none;
}

.learn-more {
    width: 200px;
    height: 60px;
    margin: 10px 0px 0px 100px;
    filter: drop-shadow(10px 10px 20px #5B2CB2);
    border-radius: 36px;
}

.text-learn-more {
    position: absolute;
    font-size: 25px;
    height: 42px;
    padding: 13px 0px 0px 35px;
    color: #5E2CB0;
}

/*-------------------- MIDDLE WRAPPER-------------------- */
.mid-wrapper {
    position: relative;
    left: 70px;
    width: 1824px;
    height: 220px;
    background: #f4f3f3;
}

.mid {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 50px 0px 0px 70px;
}

.mid-content-wrapper {
    width: 100%;
    height: 100%;
}

.mid-content-wrapper > v-row > v-col {
    margin: auto;
    text-align: center;
}

.txt-content {
    font-size: 18px;
    color: #000000;
}

.content-years {
    margin-left: 135px;
}

.content-projects {
    margin-left: 545px;
}

.content-clients {
    margin-left: 980px;
}

.txt-number {
    font-weight: 500;
    font-size: 50px;
    line-height: 75px;
    margin-left: 55px;
    color: #5E2CB0;
}

.content-clients > p.txt-number {
    margin-left: 50px;
}

/*-------------------- SERVICE WRAPPER-------------------- */
.mid-service {
    position: relative;
    width: 1824px;
    height: 600px;
    left: 70px;
    background: #ffffff;
}

.mid-service-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
}

.service-wrapper {
    width: 100%;
    margin-top: 80px;
}

.txt-service {
    font-weight: 500;
    font-size: 28px;
    margin: auto;
    width: 46%;
    color: #5B2CB2;
}

.img-service {
    position: relative;
    margin-left: 640px;
    width: 100px;
}

.mid-icon {
    position: relative;
    width: 1368px;
    height: 360px;
    margin: auto;
}

.mid-icon-content {
    height: 100%;
    width: 100%;
}

.icon {
    float: left;
    margin: 80px 250px 40px 0px;
}

.text {
    position: absolute;
    margin: 250px 250px 0px -25px;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    color: #5E2CB0;
}

.txt-ui{
    width: 175px;
}

.txt-web {
    left: 350px;
    width: 300px;
}

.txt-mobile {
    left: 740px;
    width: 300px;
}

/*-------------------- PROJECT WRAPPER-------------------- */
.project-menu {
    position: relative;
    width: 1824px;
    height: 540px;
    left: 70px;
    background-color: #5B2CB2;
}

.project-menu-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
}

.project-menu-wrapper > p {
    width: 50px;
    margin: 350px 0px 0px 50px;
    font-weight: 900;
    font-size: 36px;
    display: flex;
    text-align: right;
    color: #ffffff;
}

.line-project {
    width: 368px;
    margin: -190px 0px 0px 30px;
    border: 4px solid #FFFDFD;
    transform: rotate(90deg);
}

.project-scroll-content {
    width: 1800px;
    height: 100px;
}

.our-project-content {
    width: 100px;
    height: 265px;
    float: left;
}

.our-project-content > div > img {
    width: auto;
    height: auto;
}

.our-project-content > div {
    position: absolute;
    top: 100px;
}

.img-project-livera {
    margin-left: 250px;
}

.img-project-kolita {
    margin-left: 730px;
}

.img-project-wvi {
    margin-left: 1210px;
}

.txt-project {
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    display: flex;
    align-items: center;
    font-style: normal;
    color: #FFFEFE;
}

.img-arrow {
    position: absolute;
    display: flex;
    margin: 200px 0px 50px 1100px;
    width: 60px;
    height: 60px;
}

@media (min-width: 200px) and (max-width: 600px) {
    .main-menu-bar, .mid-wrapper, .mid-service, .project-menu {
        left: 0px;
    }
    .main-container > h2{
        text-align: left;
        margin: 10px;
        font-size: 18px;
        margin-bottom: 15%;
    }
    .main-content > h2 {
        text-align: center;
        font-size: 20px;
        line-height: 30px;
        margin: 0px;
        margin-left: 10%;
        width: 250px;
    }
    .learn-more {
        width: 145px;
        height: 45px;
        margin-left: 130px;
    }
    .text-learn-more {
        font-size: 18px;
        text-align: center;
        margin-left: -10px;
        margin-top: -2px;
    }
    /*-------------------- MIDDLE WRAPPER-------------------- */
    .mid {
        padding: 0px;
        margin: 0px;
        position: absolute;
        width: 150px;
        height: 100px;
        margin-top: 50px;
    }
    .mid-content-wrapper {
        width: 100%;
        height: 100%;
        margin-left: 0px;
    }
    .txt-number {
        font-size: 30px;
        text-align: center;
        margin-left: 25px;
    }
    .txt-content {
        font-size: 12px;
        width: 75px;
        text-align: center;
        margin-left: 50px;
    }
    .content-clients > p.txt-content {
        margin-left: 65px;
    }
    .content-years{
        margin-left: -30px;
    }   
    .content-projects {
        margin-left: 125px;
    }
    .content-clients {
        margin-left: 270px;
    }

    /*-------------------- SERVICE WRAPPER-------------------- */
    .service-wrapper {
        padding: 0px;
        margin: 0px;
    }

    .service-wrapper {
        margin-left:-500px;
        padding-left: 100px;
    }
    .txt-service {
        font-size: 20px;
    }
    .ui-ux-images {
        position: absolute;
        margin: 0px;
        top: 0px;
    }
    /* .mid-service {
        position: absolute;
        margin-left: 0px;
    } */

    /*-------------------- OUR PROJECT WRAPPER-------------------- */
    .project-menu-wrapper > p{
        font-size: 20px;
        margin-left: 20px;
    }

    .line-project {
        width: 300px;
        margin: -150px 0px 0px -30px;
    }

    .img-project-livera, .img-project-kolita, .img-project-wvi {
        margin-left: 170px;
    }

    .our-project-content > div > img {
        border: 2px solid red;
        width: 50%;
        height: 50%;
    }

    .img-project-livera {
        margin-top: -90px;
    }
    .img-project-kolita {
        margin-top: 90px;
    }
    .img-project-wvi {
        margin-top: 270px;
    }

    .txt-project {
        font-size: 20px;
        margin-top: -10px;
    }
}

</style>