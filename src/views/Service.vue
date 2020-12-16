<template>
    <div>
        <Sidebar />
            <div class="main-service-bar">
                <v-img
                src="../assets/images/cover_bg_service.png"
                width="100%"
                height="100%"
                ></v-img>
                <div class="main-service-container">
                    <div class="main-service-content">
                        <p>We bring your dream
                        <br> 
                        <span>into reality</span></p>
                    </div>
                </div>
                <div class="how-we-work">
                    <div class="how-we-work-wrapper">
                        <div class="first-mid-service">
                            <div class="title-mid-service">
                                <p>HOW WE  WORK?</p>
                            </div>
                        </div>
                        <div class="line-service-content"></div>
                        <div class="second-mid-service">
                            <div class="content-mid-service">
                                <div class="number-text-service">
                                    <img src="../assets/logo/number_01.png" class="service-number">
                                    <h2>Analyst</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="number-text-service">
                                    <img src="../assets/logo/number_02.png" class="service-number">
                                    <h2>Design</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="number-text-service">
                                    <img src="../assets/logo/number_03.png" class="service-number">
                                    <h2>Create</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="third-mid-service">
                                <img src="../assets/logo/logo_analyst.png" class="side-logo-service img-analyst">
                                <img src="../assets/logo/logo_design.png" class="side-logo-service img-design">
                                <img src="../assets/logo/logo_create.png" class="side-logo-service img-create">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'

export default {
    data(){
        return{
            //
        }
    },
    components:{
        Sidebar,
        Footer
    }
}
</script>


<style scoped>

/*-------------------- HOME SERVICE WRAPPER-------------------- */
.main-service-bar {
    position: relative;
    width: 100%;
    height: 100%;
    left: 70px;
}

.main-service-container {
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 50px;
    color: #ffffff;
    top: 0px;
    margin: 150px 0px 220px 90px;
}

/*-------------------- MIDDLE SERVICE WRAPPER-------------------- */
.how-we-work {
    position: relative;
    width: 1824px;
    height: 851px;
    background: #805CBA;
}

.how-we-work-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
}

.title-mid-service {
    width: 375px;
    height: 132px;
    margin: 104px 0px 0px 75px;
    font-size: 50px;
    line-height: 60px;
    color: #FFFFFF;
}

.line-service-content {
    width: 643px;
    margin: 193px 0px 0px 90px ;
    border: 6px solid #FFFFFF;
    transform: rotate(90deg);
}

.content-mid-service {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
}

.number-text-service {
    position: relative;
    width: 639px;
    height: 160px;
    margin: auto;
    padding-top: 110px;
    margin-bottom: 85px;
    margin-left: 500px;
}

.service-number {
    position: absolute;
    width: 115px;
    height: 85px;
    font-style: normal;
    font-weight: bold;
    font-size: 140px;
    line-height: 164px;
    color: #000000;
}

.number-text-service > h2 {
    position: absolute;
    margin-left: 95px;
    font-size: 28px;
    color: #ffffff;
}

.number-text-service > p {
    position: absolute;
    width: 350px;
    margin: 70px 0px 0px 95px;
    color: #FFFFFF;
}

.third-mid-service {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    color:rgba(255, 255, 255, 1);
}

.side-logo-service {
    position: relative;
    width: 150px;
    height: auto;
    margin-left: 1080px;
    margin-top: 105px;
    margin-bottom: 32px;
}

.img-analyst {
    width: 75.81px;
    height: 100.31px;
}

.img-design {
    width: 104.62px;
    height: 104.62px;
}

.img-create {
    top: 15px;
    width: 108px;
    height: 77.84px;
}

</style>