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
                                <h2>ATMA JAYA</h2>
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
                        <div class="atmajaya-portfolio-two">
                            <div class="atmajaya-content-portfolio">
                                <v-img
                                src="../assets/images/img_content_portfolio.png"
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
                                <v-row dense no-gutters>
                                    <v-col>
                                        <div v-on:click="gotoLivera" class="prev-prev-button">
                                            <img src="../assets/images/img_livera_portfolio.png" class="prev-button">
                                                <div class="prev-content-button">
                                                    <div class="transform-prev">
                                                        <div class="title-prev">
                                                            <h3>PREVIOUS</h3>
                                                        </div>
                                                        <div class="main-prev">
                                                            <img src="../assets/logo/arrow-prev-next.png">
                                                            <h3>LIVERA</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <div class="next-next-button">
                                            <img src="../assets/images/img_atmajaya_portfolio.png" class="next-button">
                                                <div class="next-content-button">
                                                    <div class="transform-next">
                                                        <div class="title-next">
                                                            <h3>NEXT</h3>
                                                        </div>
                                                        <div class="main-next">
                                                            <h3>BINBANK</h3>
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
    components:{
        Sidebar,
        Footer,
        HeaderPortfolio,
        OurHappyClient,
        BeforeFooter
    },
    methods: {
        gotoLivera: function () {
            window.location.href = '/second-portfolio'
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

/*--------------------ATMAJAYA MID CONTENT -------------------- */
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
/*--------------------DESCRIPTION CONTENT ABOUT-------------------- */
.description-content {
    width: 1608px;
    height: 200px;
}

.description-content-portfolio {
    width: 100%;
    height: 100%;
    margin: 75px 400px 0px 0px;
}

.title-description > h2 {
    position: relative;
    font-weight: bold;
    font-size: 25px;
    margin-left: 80px ;
    width: 10%;
}

.content-description {
    width: 1000px;
    height: 185px;
    line-height: 15px;
    margin-left: 275px;
    margin-top: -35px;
    padding-right: 55px;
}

.content-description > p {
    font-size: 12px;
    color: #4F4F4F;
    margin-right: 85px;
    line-height: 14px;
}

/*--------------------ATMAJAYA CONTENT TWO-------------------- */
.atmajaya-portfolio-two {
    width: 100%;
    height: 100%;
}

.atmajaya-content-portfolio {
    margin: 0px 140px 0px 80px;
}

/*--------------------TESTIMONIAL CONTENT-------------------- */
.testimonial-content {
    width: 1608px;
    height: 200px;
    margin: 80px 0px 0px 0px;
}

.testimonial-content-portfolio {
    width: 100%;
    height: 100%;
}

.content-testimonial {
    color: #828282;
    text-align: justify;
    font-size: 13px;
    width: 890px;
    height: 185px;
    line-height: 15px;
    margin: -340px 0px 0px 260px;
    padding-right: 55px;
}

.title-testimonial-description > h2 {
    font-weight: bold;
    font-size: 25px;
    margin: 10px 0px 0px 80px ;
}

.profile-testimonial-content {
    margin: 25px 0px 0px 130px;
}

.content-testimonial > span.tick-testimonial  {
    position: absolute;
    margin-top: -100px;
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
    width: 1284px;
    height: 170px;
    top: 0px;
}

.prev-next-wrapper {
    position: absolute;
    margin-left: 10px;
    width: 100%;
    height: 100%;
}

/*--------------------PREV BUTTON CONTENT-------------------- */
.prev-prev-button {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 170px;
}

.prev-button {
    position: absolute;
    width: 100%;
    height: 100%;
}

.prev-content-button {
    width: 100%;
    height: 100%;
    color: #ffffff;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    background: linear-gradient(90.02deg, #4BADE4 0.02%, rgba(75, 173, 228, 0.6) 56.97%, rgba(75, 173, 228, 0) 99.99%);
}

.transform-prev {
    transform: matrix(-1, 0, 0, 1, 0, 0);
}

.title-prev {
    font-size: 29px;
    float: right;
    margin-top: 25px;
    margin-right: 25px;
}

.main-prev {
    float: right;
    display: flex;
    margin-top: 120px;
}

.main-prev > h3 {
    font-size: 23px;
    margin-right: -165px;
}

.main-prev > img {
    padding-right: 120px;
    
}

/*--------------------NEXT BUTTON CONTENT-------------------- */
.next-next-button {
    position: relative;
    width: 100%;
    height: 170px;
    cursor: pointer;
}

.next-button {
    position: absolute;
    width: 100%;
    height: 100%;
}

.next-content-button {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #ffffff;
    background: linear-gradient(90.02deg, #E9BB16 0.02%, rgba(233, 187, 22, 0.8) 56.97%, rgba(233, 187, 22, 0) 99.99%);
}

.title-next {
    font-size: 29px;
    margin-top: 25px;
    margin-left: 22px;
}

.main-next {
    margin-left: 22px;
    display: flex;
    margin-top: 52px;
}

.main-next > h3 {
    font-size: 23px;
}

.main-next > img {
    padding-right: 100px;
    transform: rotate(180deg);
}

@media (min-width: 200px) and (max-width: 600px) {
    .portfolio-container {
        left: 0px;
    }
    .main-portfolio {
        text-align: center;
    }
    .content-mid-portfolio {
        margin: 0px;
        margin: 10px 0px 0px 66px;
    }
    .content-mid-portfolio > h2 {
        font-size: 18px;
        text-align: center;
    }
    .main-content-portfolio > p {
        font-size: 8px;
        text-align: justify;
        line-height: 10px;
        margin-top: -50px;
    }
    .what-we-do {
        margin: 0px;
        margin-top: -125px;
    }
    .what-we-do > h2 {
        float: left;
        margin-top: 10px;
        font-size: 12px;
    }
    .main-content-what-we-do > p {
        font-size: 8px;
    }

    /*--------------------DESCRIPTION CONTENT ABOUT-------------------- */
    .line-portfolio {
        display: none;
    }
    .description-content-portfolio {
        width: 25.5%;
    }
    .title-description > h2 {
        font-size: 14px;
        text-align: center;
        margin-top: 20px;
        margin: 0px;
        width: 100%;
        margin-bottom: 6px;
    }
    .content-description {
        margin: 0px;
    }
    .content-description > p {
        width: 41.5%;
        text-align: justify;
        margin:0px;
        margin-left: 0px;
        font-size: 8px;
        line-height: 13px;
        padding: 0px 10px;
    }


    /*--------------------ATMAJAYA PORTFOLIO ABOUT-------------------- */
    .atmajaya-content-portfolio {
        margin: 0px;
    }
    .atmajaya-portfolio-two {
        margin-top: 75px;
    }


    /*--------------------ATMAJAYA PORTFOLIO ABOUT-------------------- */
    .testimonial-content {
        margin-bottom: 30px;
    }
    .title-testimonial-description > h2 {
        margin-left: 10px;
        margin-bottom: 10px;
        font-size: 15px;
        width: 24%;
        text-align: center;
    }
    .profile-testimonial-content {
        margin-top: 0px;
        margin-left: 25px;
    }
    .content-testimonial {
        margin-left: 100px;
        margin-top: -349px;
        width: 20%;
        font-size: 8px;
    }
    .content-testimonial > p {
        margin-left: 25px;
    }


    /*--------------------PREV NEXT CONTENT-------------------- */
    .prev-next-content {
        /* position: relative; */
        left: 0px;
        width: 600px;
    }

    .prev-next-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        margin-left: 0px;
    }

    /*--------------------PREV BUTTON CONTENT-------------------- */
    .prev-prev-button {
        width:75%;
    }

    .prev-button {
        width: 220px;
        height: 120px;
        margin-top: 25px;
    }

    .title-prev {
        font-size: 20px;
    }

    .main-prev {
        float: right;
        display: flex;
        margin-top: 125px;
        margin-right: 18px;
    }
    .main-prev > h3 {
        margin: 0px;
        padding: 0px;
        margin-right: -150px;
        padding-left: 30px;
        font-size: 18px;
    }

    .main-prev > img {
        margin: 0px;
        padding: 0px;
        width: 40px;
        height: 10px;
        margin-top: 7px;
    }

    /*--------------------NEXT BUTTON CONTENT-------------------- */
    .next-next-button {
        display: flex;
        left: -75px;
        width: 75%;
    }
    
    .next-button {
        width: 220px;
        height: 120px;
        margin-top: 25px;
    }

    .title-next {
        font-size: 20px;
    }

    .main-next {
        float: right;
        display: flex;
        margin-top: 70px;
        margin-right: 65px;
    }
    .main-next > h3 {
        margin: 0px;
        padding: 0px;
        font-size: 18px;
        margin-right: 21px;
    }

    .main-next > img {
        margin: 0px;
        width: 40px;
        padding: 0px;
        height: 10px;
        margin-top: 7px;
    }
}

</style>