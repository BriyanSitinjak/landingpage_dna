<template>
    <div>
        <Sidebar />
            <div class="about-container">
                <div class="main-about-bar">
                    <div class="main-about-wrapper">
                        <v-img
                        src="../assets/images/img_header_about.png"
                        width=100%
                        height=100%
                        >  
                        </v-img>
                        <div class="about-header">
                            <!-- <div class="line-about-header">
                                <div class="line-long-header">
                                    <img src="../assets/images/diagonal_img_long.png">
                                </div>
                                <div class="line-short-header">
                                    <img src="../assets/images/diagonal_img_short.png">
                                </div>
                            </div> -->
                            <div class="about-header-wrapper">
                                <h2>WHY US ?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien pellentesque lorem turpis dictum vitae vitae urna, porttitor. Amet, in a gravida quam. Ullamcorper vulputate ac feugiat amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mid-about">
                    <div class="mid-about-wrapper">
                        <div class="content-mid-about">
                            <h4>“You’re gotta start with customer experience and work backwards to the technology“-</h4>
                            <p>Steve Jobs</p>
                        </div>
                    </div>
                </div>
                <div class="story-about">
                    <div class="story-about-wrapper">
                        <div class="content-about-bigtext">
                            <h2>Our Story About DNA</h2>
                        </div>
                        <div class="line-about-wrapper"></div>
                        <div class="content-about-childtext">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec</p>
                        </div>
                    </div>
                </div>
                <div class="team-about">
                    <div class="team-about-wrapper">
                        <div class="text-team">
                            <p>Our Team</p>
                        </div>
                        <div class="line-team-about"></div>
                        <div class="first-img-about">
                            <v-img
                            src="../assets/images/img_mid_about_01.png"
                            ></v-img>
                        </div>
                        <div class="second-img-about">
                            <v-row>
                                <v-col>
                                    <v-img
                                    src="../assets/images/img_mid_about_02.png"
                                    ></v-img>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-img
                                    src="../assets/images/img_mid_about_03.png"
                                    class="second-img-team"
                                    ></v-img>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </div>
                <div class="join-us-about">
                    <div class="join-us-about-wrapper">
                        <v-img
                        src="../assets/images/img_joinus_about.png"
                        width="100%"
                        height="100%"
                        ></v-img>
                        <div class="content-join-us">
                            <div class="text-join-us">
                                <h4>Be one of the super human in DNA?</h4>
                                <p>Our cool team wait you to be part of us</p>
                            </div>
                            <div class="content-btn-join-us">
                                <a href="/contact-us" class="btn join-us"><span>Join us</span></a>
                                <img class="arrow-join-us" src="../assets/images/arrow_join_us.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
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
/*--------------------HOME ABOUT-------------------- */
.about-container {
    position: relative;
    left: 80px;
    font-family: 'Roboto';
}

.main-about-wrapper {
    position: relative;
    width: 1284px;
    height: 100%;
}

.diagonal-header-short {
    position: absolute;
    margin: 0px;
}

.about-header {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    color: #ffffff;
    background: linear-gradient(269.88deg, #5E2CB0 -2.79%, #5E2CB0 33.97%, rgba(94, 44, 176, 0) 99.87%);
}

.about-header-wrapper {
    width: 210px;
    margin-top: 150px;
    margin-right: 90px;
    float: right;
}

.about-header-wrapper > h2 {
    width: 100%;
    font-size: 42px;
    word-spacing: 7px;
    font-weight: 900;
    text-align: center;
}

.about-header-wrapper > p {
    text-align: justify;
    font-size: 13px;
    font-weight: 450;
    padding-top: 25px;
}

/*--------------------MIDDLE ABOUT-------------------- */
.mid-about {
    position: relative;
    width: 1284px;
    height: 340px;
}

.mid-about-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.content-mid-about {
    position: absolute;
    width: 1284px;
    height: 312px;
    font-family: 'Caveat';
}

.content-mid-about > h4 {
    width: 70%;
    margin: auto;
    margin-top: 120px;
    font-size: 35px;
    font-weight: 200;
    text-align: center;
}

.content-mid-about > p {
    width: 50%;
    margin: auto;
    font-size: 25px;
    font-weight: bold;
    margin-left: 1035px;
    padding-top: 28px;
    color: #979090;
}

/*--------------------STORY ABOUT-------------------- */
.story-about {
    position: relative;
    width: 1284px;
    height: 400px;
    background-color: #5B2CB2;;
}

.story-about-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.content-about-bigtext > h2 {
    position: absolute;
    color: #ffffff;
    font-size: 34px;
    margin: 240px 0px 0px 120px;
    width: 300px;
}

.line-about-wrapper {
    position: absolute;
    width: 325px;
    margin: 200px 0px 0px 260px;
    border: 4px solid #ffffff;
    transform: rotate(90deg);
}

.content-about-childtext > p {
    position: absolute;
    font-size: 17px;
    color: #FFFFFF;
    width: 55%;
    height: 300px;
    text-align: justify;
    margin: 70px 0px 0px 482px;
}

/*--------------------TEAM ABOUT-------------------- */
.team-about {
    position: relative;
    width: 1284px;
    height: auto;
    padding-top: 80px;
}

.team-about-wrapper {
    position: relative;
    width: 100%;
}

.text-team {
    color: #5E2CB0;
    font-size: 34px;
    font-weight: bold;
    margin: 0px 0px 25px 120px;
}

.line-team-about {
    position: absolute;
    width: 915px;
    margin-top: -45px;
    margin-left:275px;
    border: 1px solid #805CBA;
}

.first-img-about {
    width: 1190px;
}

.second-img-about {
    width: 1190px;
    columns: 2;
    margin-top: 35px;
    margin-bottom: 65px;
}

.second-img-team {
    margin-left: 30px;
    height: 98%;

}

/*--------------------JOIN US ABOUT-------------------- */
.join-us-about {
    position: relative;
    width: 100%;
    height: 100%;
}

.content-join-us  {
    position: absolute;
    top: 0;
    margin: 70px 0px 0px 120px ;
}

.text-join-us {
    color: #FFFFFF;
    margin-bottom: 15px;
}

.text-join-us > h4 {
    font-size: 35px;
}

.text-join-us > p {
    font-size: 22px;
    width: 55%;
}

.content-btn-join-us {
    display: flex;
}

.btn {
    position: relative;
    background-color: white;
    text-decoration: none;
    padding-top: 16px;
    padding-left: 20px;
}

.join-us {
    width: 200px;
    height: 60px;
    border-radius: 34px;
    font-size: 22px;
    
}

.arrow-join-us {
    position: absolute;
    width: 32px;
    margin: 25px 0px 0px 120px;
    color: #5E2CB0;
}





@media (min-width: 200px) and (max-width: 960px) {
    .about-container {
        left: 0px;
    }
    .about-header-wrapper {
        position: absolute;
        height: 100%;
        margin: 0;
        padding: 20px;
        width: 32.5%;
        background: linear-gradient(269.88deg, #5E2CB0 -2.79%, #5E2CB0 33.97%, rgba(94, 44, 176, 0) 99.87%);
    }
    /*--------------------MIDDLE ABOUT-------------------- */
    .content-mid-about > h4 {
        margin-top: 140px;
        margin-left: 0px;
        font-size: 20px;
        width: 32.5%;
    }
    .content-mid-about > p {
        margin-top: -25px;
        margin-left: 250px;
        font-size: 12px;
        width: 10%;
        text-align: right;
    }
    /*--------------------OUR STORY  ABOUT-------------------- */
    .content-about-bigtext > h2 {
        text-align: center;
        width: 32.5%;
        font-size: 20px;
        margin: 0px;
        margin-left: 0px;
        margin-top: 5px;
    }
    .line-about-wrapper {
        margin: 0px;
        margin-top: 40px;
        margin-left: 23px;
        width:370px;
        border: 2px solid #ffffff;
        transform: rotate(180deg);
    }
    .content-about-childtext > p {
        margin-left: 0px;
        margin-top: 60px;
        font-size: 13px;
        padding: 15px;
        width: 32.5%;
    }

    /*--------------------OUR TEAM ABOUT-------------------- */
    .text-team > p{
        position: absolute;
        margin-left: -100px;
        margin-top: -60px;
        width: 8%;
        font-size: 23px;
        text-align: center;
    }

    .line-team-about {
        position: absolute;
        padding-top: -30px;
        margin-left: 150px;
        width: 225px;
    }
    .first-img-about {
        width: 32.5%;
        height: 22%;
    }
    .second-img-about {
        width: 32.5%;
        height: 100%;
    }
    .second-img-team {
        margin-left: 0px;
        width: 100%;
        height: 140px;
    }

    /*--------------------JOIN US ABOUT-------------------- */
    .content-join-us {
        text-align: center;
        margin: 0px;
        width: 100%;
    }
    .text-join-us > h4 {
        font-size: 15px;
    }
    .text-join-us > p {
        width: 50%;
        margin-left: 25%;
        font-size: 15px;
    }
    .content-btn-join-us {
        margin-left: 10%;
        width: 100%;
    }
    .content-btn-join-us > a {
        position: relative;
        font-size: 16px;
        margin-left: 15%;
        width: 50%;
        height: 100%;
    }
    .join-us {
        padding-bottom: 15px;
        color: #5E2CB0;
    }
    .join-us > span {
        margin-left: -25px;
        
    }
    .content-btn-join-us > img {
        display: none;
    }
}
</style>