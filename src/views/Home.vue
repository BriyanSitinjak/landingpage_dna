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
                <v-content class="mid-content-wrapper">
                    <v-row dense no-gutters>
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
                </v-content>
            </div>
            <div class="mid-service">
                <div class="mid-service-wrapper">
                    <div class="service-wrapper">
                        <p class="txt-service"> Service That We Can Provide</p>
                    </div>
                    <div class="line-service-wrapper">
                        <img class="img-service" src="../assets/images/line.png" alt="Line">
                    </div>
                    <div class="mid-icon">
                        <div class="mid-icon-content">
                            <div class="ui-ux-images">
                                <div class="icon img-ui">
                                    <img src="../assets/images/uiux_dev.png">
                                </div>
                                <p class="text txt-ui">UI/UX Design</p>
                            </div>
                            <div class="web-images">
                                <div class="icon img-web">
                                    <img src="../assets/images/website_dev.png">
                                </div>
                                <p class="text txt-web">Website Development</p>
                            </div>
                            <div class="mobile-images">
                                <div class="icon img-mobile">
                                    <img src="../assets/images/mobile_dev.png">
                                </div>
                                <p class="text txt-mobile">Mobile Apps Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-menu">
                <div class="project-menu-wrapper">
                    <div class="title-project-menu"></div>
                    <p>Our Project</p>
                    <div class="line-project"></div>
                    <div class="scroll-project">
                        <div class="project-scroll-content">
                            <div class="our-project-content">
                                <div class="img-project-livera">
                                    <img src="../assets/images/livera_box.png">
                                    <p class="txt-project">C-PRO</p>
                                </div>
                                <div class="img-project-kolita">
                                    <img src="../assets/images/box_default.png">
                                    <p class="txt-project">Atmajaya (KOLITA)</p>
                                </div>
                                <div class="img-project-wvi">
                                    <img src="../assets/images/box_default.png">
                                    <p class="txt-project">Binbank (WVI)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="img-arrow">
                        <img v-on:click="back" src="../assets/logo/icon_back.png" alt="Back">
                        <img v-on:click="next" src="../assets/logo/icon_next.png" alt="Next">
                    </div> -->
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
    margin: 20px 0px 0px 30px;
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
    margin-left: 70px;
    width: 1284px;
    height: 220px;
    background: #f4f3f3;
}

.mid-content-wrapper {
    width: 100%;
    height: 100%;
}

.mid {
    margin-top: 60px;
    margin-left: 10px;
    text-align: center;
    width: 100%;
    height: 100%;
}

.txt-content {
    font-size: 18px;
    color: #000000;
}

.txt-number {
    font-weight: 500;
    font-size: 50px;
    color: #5E2CB0;
}


/*-------------------- SERVICE WRAPPER-------------------- */
.mid-service {
    position: relative;
    width: 1274px;
    height: 600px;
    padding-top: 80px;
    margin-left: 80px;
    background: #ffffff;
}

.mid-service-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
}

.txt-service {
    font-size: 28px;
    margin: auto;
    width: 100%;
    text-align: center;
    color: #5B2CB2;
}
.line-service-wrapper {
    width: 1274px;
    display: flex;
}
.img-service {
    width: 100px;
    margin: auto;
}

.mid-icon {
    width: 1274px;
    height: 360px;
    margin-top: 30px;
}

.mid-icon-content {
    height: 100%;
    width: 100%;
    margin-left: 170px;
}

.icon {
    float: left;
    margin: 80px 250px 40px 0px;
}

.text {
    position: absolute;
    margin-top: 250px;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    color: #5E2CB0;
}

.txt-ui{
    width: 150px;
    margin-left: -5px;
}

.txt-web {
    left: 490px;
    width: 300px;
}

.txt-mobile {
    left: 875px;
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

.scroll-project {
    overflow-x: scroll;
    margin-top: -150px;
    width: 70%;
    height: 80%;
}

.project-scroll-content {
    width: 1284px;
    height: auto;
}

.our-project-content {
    /* border: 2px solid red; */
    margin: 0px;
    top: 0px;
    margin-left: 275px;
    width: 100%;
    height: 100%;
    display: flex;
}

/* .our-project-content > div > img {
    width: auto;
    height: auto;
} */

/* .our-project-content > div {
    position: absolute;
    top: 100px;
} */

.img-project-livera {
    margin-left: 0px;
}

.img-project-kolita {
    margin-left: 80px;
}

.img-project-wvi {
    margin-left: 80px;
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
    position: relative;
    display: flex;
    margin: 100px 0px 0px 1100px;
    width: 12%;
    height: 12%;
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
    .mid-wrapper {
        margin-left: 0px;
        padding-top: 10px;
    }

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
    .content-years{
        margin-left: -20px;
    }   
    .content-projects {
        margin-left: 115px;
    }
    .content-clients {
        margin-left: 250px;
    }
    /*-------------------- SERVICE WRAPPER-------------------- */

    .line-service-wrapper {
        margin-left: -80px;
        width: 415px;
    }

    .service-wrapper {
        width:415px;
        margin-left: -80px;
        margin-top: -60px;
    }
    .txt-service {
        font-size: 20px;
    }

    .icon {
        margin-top: 150px;
        width: 150%;
        margin-left: 100px;
    }
    .icon > img {
        width: 100%;
    }
    .mid-icon-content {
        margin-left: -80px;
        width: 415px;
        height: 135%;
        display: grid;
    }
    .ui-ux-images {
        margin-left: 55px;
        margin-top: -150px;
        margin-bottom: -1000px;
    }
    .web-images {
        margin-left: 55px;
        margin-top: 20px;
    }
    .mobile-images {
        margin-top: -120px;
        margin-left: 55px;
    }
    .img-ui {
        width: 100px;
    }
    .img-web {
        width: 100px;
    }
    .img-mobile {
        width: 100px;
    }
    .txt-ui{
        margin-left: 70px;
        margin-top: 260px;
        font-size: 12px;
    }
    .txt-web {
        margin-left: 74px;
        margin-top: 260px;
        padding: 0px;
        left: 0px;
        font-size: 12px;
        width:8%;
    }
    .txt-mobile {
        font-size: 12px;
        margin-left: 70px;
        margin-top: 260px;
        padding: 0px;
        left: 0px;
        width: 8%;
    }
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
        margin-left: -130px;
        padding: 0px;
        left: 0px;
    }

    .our-project-content {
        display: list-item;
        width: 100%;
        height: 100%;
    }

    .img-project-livera > img{
        width: 15%;
    }
    .img-project-kolita > img {
        width: 15%;
    }
    .img-project-wvi > img {
        width: 15%;
    }

    .txt-project {
        font-size: 20px;
        margin-top: -10px;
    }
}

</style>