<template>
    <div class="main-service-bar">
        <img src="../assets/images/cover_bg_service.png" class="bg-service-bar">
        <div class="main-service-container">
            <div class="main-service-content">
                <h1>We bring your dream
                <br> 
                <span>into reality</span></h1>
            </div>
        </div>
        <div class="menu-bar-container">
            <img class="logo-dna" src="../assets/logo/logo_dna.png" alt="Logo DNA">
            <div class="logo-menu-bar">
                <img class="logo-frame" src="../assets/logo/logo_frame.png" alt="Frame">
                <img class="logo logo-linkedin" src="../assets/logo/logo_linkedin.png" alt="LinkedIn">
                <img class="logo logo-facebook" src="../assets/logo/logo_facebook.png" alt="Facebook">
                <img class="logo logo-instagram" src="../assets/logo/logo_instagram.png" alt="Instagram">
            </div>
        </div>
        <div class="how-we-work">
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
</template>

<style scoped>

.bg-service-bar {
    position: absolute;
    width: 1832px;
    height: 560px;
    left: 96px;
    top: 0px;
    background: linear-gradient(0deg, rgba(94, 44, 176, 0.6), rgba(94, 44, 176, 0.6));
}

.main-service-content h1 {
    position: absolute;
    width: 906px;
    height: 140px;
    left: 210px;
    top: 200px;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    color: #FFFFFF;
}

.how-we-work {
    position: absolute;
    width: 1832px;
    height: 851px;
    left: 96px;
    top: 560px;
    background: #805CBA;
}

.title-mid-service {
    position: absolute;
    width: 375px;
    height: 132px;
    left: 117px;
    top: 104px;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    display: flex;
    align-items: center;
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

.menu-footer-service {
    background: url('../assets/images/footer_home.png');
    position: absolute;
    width: 1834px;
    height: 480px;
    left: 94px;
    top: 1360px;
    margin-top: 50px;
}

</style>