<template>
    <div>
        <Sidebar />
        <HeaderPortfolio />
        <OurHappyClient />
            <div class="portfolio-container">
                <div class="portfolio-content-wrapper">
                    <div class="mid-portfolio">
                        <v-img
                        src="../assets/images/img_middle_portfolio.png"
                        width=100%
                        height=100%
                        ></v-img>
                        <div class="main-portfolio">
                            <div class="content-mid-portfolio">
                                <h2>LIVERA</h2>
                                <div class="main-content-portfolio">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa tortor suspendisse tempus vivamus nisi pellentesque molestie consequat tellus. Rhoncus vitae consectetur consectetur fermentum sed proin nisl aliquet nulla. Pretium morbi urna dignissim cras adipiscing nunc et. Tempus ultricies varius morbi commodo elementum urna vulputate.</p>
                                </div>
                                <div class="what-we-do">
                                    <h2>WHAT WE DO?</h2>
                                    <div class="main-content-what-we-do">
                                        <p>Branding</p>
                                        <p>Web Design & Development</p>
                                        <p>Maintenance</p>
                                    </div>
                                </div>
                            </div>
                            <div class="line-portfolio"></div>
                        </div>
                        <div class="description-content">
                            <div class="description-content-portfolio">
                                <div class="title-description">
                                    <h2>Description</h2>
                                </div>
                                <div class="content-description">
                                    <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla integer nisl at blandit volutpat. Pretium ultrices feugiat aliquam semper id. Porttitor eleifend aliquam nisi elit risus. Vehicula justo sed viverra sit eget consectetur hendrerit amet. Quisque velit, purus viverra a massa in. Et, enim, ut diam faucibus felis magna cum. Auctor consectetur neque, aliquam faucibus leo nullam amet. Turpis orci integer magna leo pharetra pulvinar. Vulputate nulla faucibus velit eget cras diam. Sit auctor sodales augue tortor egestas vel, nunc. At odio ipsum, sed tortor, eu sit ipsum. Tincidunt est dictumst purus at. Tortor purus magnis leo euismod nunc.</span> 
                                    <br>
                                    <br>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla integer nisl at blandit volutpat. Pretium ultrices feugiat aliquam semper id. Porttitor eleifend aliquam nisi elit risus. Vehicula justo sed viverra sit eget consectetur hendrerit amet. Quisque velit, purus viverra a massa in. Et, enim, ut diam faucibus felis magna cum. Auctor consectetur neque, aliquam faucibus leo nullam amet. Turpis orci integer magna leo pharetra pulvinar. Vulputate nulla faucibus velit eget cras diam. Sit auctor sodales augue tortor egestas vel, nunc. At odio ipsum, sed tortor, eu sit ipsum. Tincidunt est dictumst purus at. Tortor purus magnis leo euismod nunc.</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="livera-portfolio-two">
                            <div class="livera-content-portfolio">
                                <v-img
                                src="../assets/images/img_livera_portfolio_01.png"
                                width="100%"
                                height="100%"
                                ></v-img>
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-content-portfolio">
                                <div class="title-testimonial-description">
                                    <h2>Testimonial</h2>
                                </div>
                                <div class="profile-testimonial-content">
                                    <v-img
                                    src="../assets/images/img_testimoni_portfolio.png"
                                    width="45px"
                                    height="45px">
                                    </v-img>
                                        <div class="name-profile-testimonial">
                                            <p class="grade-profile">CEO of Livera</p>
                                            <p class="name-profile">M.J</p>
                                        </div>
                                </div>
                                <div class="content-testimonial">
                                    <p><span class="tick-testimonial">“</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla integer nisl at blandit volutpat. Pretium ultrices feugiat aliquam semper id. Porttitor eleifend aliquam nisi elit risus. Vehicula justo sed viverra sit eget consectetur hendrerit amet. Quisque velit, purus viverra a massa in. Et, enim, ut diam faucibus felis magna cum. Auctor consectetur neque, aliquam faucibus leo nullam amet. Turpis orci integer magna leo pharetra pulvinar. Vulputate nulla faucibus velit eget cras diam. Sit auctor sodales augue tortor egestas vel, nunc. At odio ipsum, sed tortor, eu sit ipsum. Tincidunt est dictumst purus at. Tortor purus magnis leo euismod nunc.<span class="tick-testimonial">“</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="prev-next-content">
                            <div class="prev-next-wrapper">
                                <v-row>
                                    <v-col>
                                        <div class="prev-prev-button">
                                            <img src="../assets/images/img_atmajaya_portfolio.png" class="prev-button">
                                                <div class="prev-content-button">
                                                    <div class="transform-prev">
                                                        <div class="title-prev">
                                                            <h3>PREVIOUS</h3>
                                                        </div>
                                                        <div class="main-prev">
                                                            <h3>BINBANK</h3>
                                                            <img src="../assets/logo/arrow-prev-next.png">
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <div v-on:click="gotoAtmajaya" class="next-next-button">
                                            <img src="../assets/images/img_atmajaya_portfolio.png" class="next-button">
                                                <div class="next-content-button">
                                                    <div class="transform-next">
                                                        <div class="title-next">
                                                            <h3>NEXT</h3>
                                                        </div>
                                                        <div class="main-next">
                                                            <h3>ATMAJAYA</h3>
                                                            <img src="../assets/logo/arrow-prev-next.png">
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <BeforeFooter />    
        <Footer />
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import HeaderPortfolio from '@/components/HeaderPortfolio.vue'
import OurHappyClient from '@/components/OurHappyClient.vue'
import BeforeFooter from '@/components/BeforeFooter.vue'

export default {
    data(){
        return{
            //
        }
    },
    components : {
        Sidebar,
        Footer,
        HeaderPortfolio,
        OurHappyClient,
        BeforeFooter
    },
    methods : {
        gotoAtmajaya: function(){
            window.location.href = "/portfolio"
        }
    }
}
</script>

<style scoped>
.portfolio-container {
    font-family: 'Roboto';
    position: relative;
    left: 70px;
}

.mid-portfolio {
    position: relative;
    width: 100%;
    height: 100%;
}

/*--------------------LIVERA MID CONTENT -------------------- */
.content-mid-portfolio {
    position: absolute;
    top: 0px;
    width: 275px;
    text-align: right;
    color: #ffffff;
    margin: 75px 0px 0px 265px;
}

.content-mid-portfolio > h2 {
    font-size: 36px;
    padding-bottom: 60px;
}

.main-content-portfolio > p {
    font-size: 13px;
    height: 200px;
    line-height: 15px;
}

.what-we-do > h2 {
    font-size: 15px;
    letter-spacing: 1.5px;
    padding-bottom: 25px;
}

.main-content-what-we-do > p {
    font-size: 13px;
}

.line-portfolio {
    position: absolute;
    width: 550px;
    margin: -320px 0px 0px 320px;
    border: 4px solid #FFFDFD;
    transform: rotate(90deg);
}
/*--------------------ATMAJAYA CONTENT ABOUT-------------------- */
.description-content {
    width: 1608px;
    height: 200px;
}

.description-content-portfolio {
    width: 100%;
    height: 100%;
}

.title-description > h2 {
    position: absolute;
    font-weight: bold;
    font-size: 25px;
    margin: 0px 0px 150px 80px ;
}

.content-description {
    width: 1000px;
    height: 185px;
    line-height: 15px;
    margin: 75px 0px 100px 275px;
    padding-right: 55px;
}

.content-description > p {
    font-size: 13px;
    margin-top: 10px;
    color: #4F4F4F;
}

/*--------------------LIVERAh CONTENT TWO-------------------- */
.livera-portfolio-two {
    position: relative;
    width: 100%;
    height: 100%;
}

.livera-content-portfolio {
    position: relative;
    margin: 0px 140px 0px 80px;
}

/*--------------------TESTIMONIAL CONTENT-------------------- */
.testimonial-content {
    width: 1608px;
    height: 200px;
}

.testimonial-content-portfolio {
    width: 100%;
    height: 100%;
}

.content-testimonial {
    width: 1000px;
    height: 185px;
    line-height: 15px;
    margin: 75px 0px 100px 275px;
    padding-right: 55px;
}

.title-testimonial-description > h2 {
    position: absolute;
    font-weight: bold;
    font-size: 25px;
    margin: 0px 0px 150px 80px ;
}

.content-testimonial > p {
    position: absolute;
    font-size: 13px;
    margin: 60px 250px 0px -30px;
    text-align: justify;
    color: #828282;
}

.profile-testimonial-content {
    position: absolute;
    margin: 60px 0px 0px 130px;
}

.content-testimonial > span.tick-testimonial  {
    position: absolute;
    font-size: 50px;
}

.name-profile-testimonial {
    position: relative;
    width: 300px;
    height: 300px;
    padding-top: 5px;
}

.grade-profile {
    position: absolute;
    font-size: 13px;
    font-weight: 450;
    color: #686565;
    margin-left: -15px;
}

.name-profile {
    margin: auto;
    position: absolute;
    font-size: 12px;
    color: #A9A5A5;
    margin-top: 18px;
    margin-left: 12px;
}

/*--------------------PREV NEXT CONTENT-------------------- */
.prev-next-content {
    position: relative;
    width: 1824px;
    height: 170px;
}

.prev-next-wrapper {
    position: absolute;
    /* border: 2px solid red; */
    width: 1284px;
    height: 175px;
}

/*--------------------PREV BUTTON CONTENT-------------------- */
.prev-prev-button {
    position: absolute;
    width: 635px;
    height: 170px;
    top: 0px;
}

.prev-button {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: matrix(-1, 0, 0, 1, 0, 0);
}

.prev-content-button {
    position: absolute;
    width: 635px;
    height: 170px;
    color: #ffffff;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    background: linear-gradient(90.02deg, #E9BB16 0.02%, rgba(235, 144, 75, 0.8) 56.97%, rgba(233, 113, 22, 0) 99.99%);
}

.transform-prev {
    position: absolute;
    transform: matrix(-1, 0, 0, 1, 0, 0);
}

.transform-prev > div {
    padding-bottom: 10px;
}

.title-prev {
    font-size: 29px;
    margin: 25px 22px 45px 0px;
}

.main-prev {
    position: absolute;
    font-size: 20px;
    display: flex;
}

.main-prev > img {
    margin-top: 5px;
    margin-left: -20px;
    width: 55px;
    height: 18px;
}

.main-prev > h3 {
    position: absolute;
    margin-left: 60px;
}

/*--------------------NEXT BUTTON CONTENT-------------------- */
.next-next-button {
    position: absolute;
    cursor: pointer;
    width: 655px;
    height: 170px;
    top: 0px;
    margin-left: -20px;
}

.next-button {
    position: absolute;
    width: 100%;
    height: 100%;
}

.next-content-button {
    position: absolute;
    width: 655px;
    height: 170px;
    color: #ffffff;
    background: linear-gradient(90.02deg, #E97116 0.02%, rgba(233, 113, 22, 0.8) 56.97%, rgba(233, 113, 22, 0) 99.99%);
}

.transform-next {
    position: absolute;
}

.transform-next > div {
    padding-bottom: 10px;
}

.title-next {
    font-size: 29px;
    margin: 25px 0px 45px 22px;
}

.main-next {
    font-size: 20px;
    margin-left: 22px;
    display: flex;
}

.main-next > img {
    margin: 5px 0px 0px 25px;
    transform: rotate(180deg);
    width: 27%;
    height: 27%;
}

</style>