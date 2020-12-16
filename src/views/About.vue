<template>
    <div>
        <Sidebar />
            <div class="about-container">
                <div class="main-about-bar">
                    <div class="main-about-wrapper">
                        <v-img
                        src="../assets/images/img_header_about.png"
                        max-width="100%"
                        max-height="100%"
                        >
                            <img class="bg-header-about" src="../assets/images/bg_header_about.png">
                            <img class="diagonal-header-long" src="../assets/images/diagonal_img_long.png">
                            <img class="diagonal-header-short" src="../assets/images/diagonal_img_short.png">
                        </v-img>
                        <div class="about-header">
                            <h2>WHY US?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis omnis, possimus dolorum soluta delectus odit inventore quaerat dicta odio impedit, amet corrupti quisquam alias? Voluptates inventore earum illo hic molestiae!</p>
                        </div>
                    </div>
                </div>
                <div class="mid-about">
                    <div class="mid-about-wrapper">
                        <div class="content-mid-about">
                            <p>“You’re gotta start with customer experience and work backwards to the technology “-</p>
                            <p>Steve Jobs</p>
                        </div>
                    </div>
                </div>
                <div class="story-about">
                    <div class="story-about-wrapper">
                        <div class="content-about-bigtext">
                            <h2>Our Story About DNA</h2>
                        </div>
                        <div class="content-about childtext">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec</p>
                        </div>
                    </div>
                </div>
                <div class="team-about">
                    <div class="team-about-wrapper">
                        <div class="first-img-about">
                            <v-img
                            src="../assets/images/img_mid_about_01.png"
                            ></v-img>
                        </div>
                        <v-col>
                            <v-row>
                                <v-img
                                src="../assets/images/img_mid_about_02.png"
                                ></v-img>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-img
                                src="../assets/images/img_mid_about_02.png"
                                ></v-img>
                            </v-row>
                        </v-col>
                    </div>
                </div>
                <div class="join-us-about">
                    <div class="join-us-about-wrapper">
                        <v-img
                        src="../assets/images/img_joinus_about.png"
                        ></v-img>
                        <div class="join-us-content">
                            <h4>Be one of the super human in DNA?</h4>
                            <p>Our cool team wait you to be part of us</p>
                        </div>
                        <div class="btn-join-us">
                            <a href="/contact-us"><span>Join us</span></a>
                            <!-- <v-img
                            src="../assets/images/arrow_join_us.png"
                            ></v-img> -->
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
.about-container {
    position: relative;
    left: 70px;
}

.main-about-bar {
    position: relative;
    width: 1824px;
    height: 560px;
}

.main-about-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.about-header {
    position: absolute;
    top: 0px;
    color: #ffffff;
    width: 292px;
    height: 212px;
    margin-left: 900px;
}

</style>