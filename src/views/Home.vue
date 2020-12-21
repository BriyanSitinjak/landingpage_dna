<template>
    <div app> 
        <Sidebar/>
            <div class="main-menu-bar">
                <v-img
                src="../assets/images/background_img.png"
                width=100%
                height=100%
                ></v-img>
                <div class="main-container">
                    <h2 class="text-xs-h6">DIGITAL NATIVE AGENCY</h2>
                    <div class="main-content">
                        <h2>Digitalize Your Business Through Innovation</h2>
                    </div>
                    <a href="/service" class="btn learn-more"><span class="text-learn-more">Learn more</span></a>
                </div>
            </div>
            <div class="mid-wrapper">
                <div class="mid-content-wrapper">
                    <div class="mid content-years">
                        <p class="txt-number">2</p>
                        <p class="txt-content">Year of Experience</p>
                    </div>
                    <div class="mid content-projects">
                        <p class="txt-number">10</p>
                        <p class="txt-content">Successful Projects</p>
                    </div>
                    <div class="mid content-clients">
                        <p class="txt-number">6</p>
                        <p class="txt-content">Happy Clients</p>
                    </div>
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
                            <div class="icon img-ui">
                                <img src="../assets/images/uiux_dev.png" alt="UIUX">
                            </div>
                            <p class="text txt-ui">UI/UX Design</p>
                            <div class="icon img-web">
                                <img src="../assets/images/website_dev.png" alt="Website">
                            </div>
                            <p class="text txt-web">Website Development</p>
                            <div class="icon img-mobile">
                                <img src="../assets/images/mobile_dev.png" alt="Mobile">
                            </div>
                            <p class="text txt-mobile">Mobile Apps Development</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-menu">
                <div class="project-menu-wrapper">
                    <p>Our Project</p>
                    <div class="line-project"></div>
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
    line-height: 42px;
    padding: 5px 0px 0px 25px;
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
    padding: 60px 0px 80px 0px;
}

.mid-content-wrapper {
    width: 100%;
    height: 100%;
}

.mid-content-wrapper > div {
    margin: auto;
    margin-left: -650px;
    text-align: center;
}

.txt-content {
    font-size: 18px;
    color: #000000;
}

.content-projects {
    padding-left: 860px;
}

.content-clients {
    padding-left: 1693px;
}

.txt-number {
    font-weight: 500;
    font-size: 50px;
    line-height: 75px;
    color: #5E2CB0;
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

.our-project-content {
    width: 422px;
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


</style>