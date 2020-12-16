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
                                <div class="content-mid-service-first">
                                    <img src="../assets/logo/number_01.png" class="number-01">
                                    <h2>Analyst</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget vestibulum gravida mattis neque, eget orci.</p>
                                </div>
                                <div class="content-mid-service-second">
                                    <img src="../assets/logo/number_02.png" class="number-02">
                                    <h2>Design</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget vestibulum gravida mattis neque, eget orci.</p>
                                </div>
                                <div class="content-mid-service-third">
                                    <img src="../assets/logo/number_03.png" class="number-03">
                                    <h2>Create</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget vestibulum gravida mattis neque, eget orci.</p>
                                </div>
                            </div>
                        </div>
                        <div class="third-mid-service">
                            <img src="../assets/logo/logo_analyst.png" class="img-analyst">
                            <img src="../assets/logo/logo_design.png" class="img-design">
                            <img src="../assets/logo/logo_create.png" class="img-create">
                        </div>
                    </div>
                </div>
            </div>
        <!-- <Footer/> -->
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
// import Footer from '@/components/Footer.vue'

export default {
    data(){
        return{
            //
        }
    },
    components:{
        Sidebar,
        // Footer
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
    width: 1832px;
    height: 851px;
    background: #805CBA;
}

.how-we-work-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
}

.title-mid-service {
    /* position: relative; */
    width: 375px;
    height: 132px;
    margin: 104px 0px 0px 117px;
    /* font-style: normal; */
    /* font-weight: normal; */
    font-size: 50px;
    line-height: 60px;
    /* display: flex;
    align-items: center; */
    color: #FFFFFF;
}

.line-service-content {
    position: absolute;
    width: 643px;
    height: 0px;
    left: 280px;
    top: 420px;
    border: 10px solid #FFFFFF;
    transform: rotate(90deg);
}
.content-mid-service {
    position: relative;
    top: -500px;
}

.content-mid-service-first{
    position: absolute;
    width: 639px;
    height: 162px;
    left: 810px;
    top: 634px;
}

.content-mid-service-second {
    position: absolute;
    width: 639px;
    height: 160px;
    left: 810px;
    top: 870px;
}

.content-mid-service-third {
    position: absolute;
    width: 639px;
    height: 163px;
    left: 807px;
    top: 1112px;
}

.number-01 {
    position: absolute;
    width: 181px;
    height: 98px;
    /* left: 107px; */
    /* top: 634px; */
    font-style: normal;
    font-weight: bold;
    font-size: 140px;
    line-height: 164px;
    color: #6F46B0;
}

.number-02 {
    position: absolute;
    width: 181px;
    height: 98px;
    /* left: 810px; */
    /* top: 870px; */
    font-style: normal;
    font-weight: bold;
    font-size: 140px;
    line-height: 164px;
    color: #6F46B0;
}

.number-03 {
    position: absolute;
    width: 181px;
    height: 98px;
    /* left: 807px; */
    /* top: 1112px; */
    font-style: normal;
    font-weight: bold;
    font-size: 140px;
    color: #6F46B0;
    }

.img-analyst {
    position: absolute;
    width: 75.81px;
    height: 100.31px;
    top: 115px;
    left: 1580px;
    color:rgba(255, 255, 255, 1);
}

.img-design {
    position: absolute;
    width: 104.62px;
    height: 104.62px;
    top: 360px;
    left: 1579px;
    color:rgba(255, 255, 255, 1);
}

.img-create {
    position: absolute;
    width: 108px;
    height: 77.84px;
    top: 620px;
    left: 1579px;
    color:rgba(255, 255, 255, 1);
}

</style>