<template>
    <div fluid class="client-menu" app>
        <div class="client-menu-wrapper">
            <div class="title-client">
                <p>OUR HAPPY CLIENT</p>
            </div>
            <div class="line-client"></div>
            <div class="logo-scroll-client">
                <div class="logo-client">
                    <div class="logo-size-client">
                        <img v-on:click="gotoLivera" src="../assets/images/logo_livera.png">
                        <img src="../assets/images/logo_wvi.png">
                        <img v-on:click="gotoAtmajaya" src="../assets/images/logo_atmajaya.png">
                        <img v-on:click="gotoLivera" src="../assets/images/logo_livera.png">
                        <img src="../assets/images/logo_wvi.png">
                        <img v-on:click="gotoAtmajaya" src="../assets/images/logo_atmajaya.png">
                        <!-- <v-row>
                            <v-col v-for="(n, i) in sourceImages" :key="i">
                                <v-img :src="`${n}`"></v-img>
                            </v-col>
                        </v-row> -->
                    </div>
                </div>
            </div>
            <!-- <div class="img-arrow-two">
                <img src="../assets/logo/icon_back_02.png">
                <img src="../assets/logo/icon_next_02.png">
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            // sourceImages : [
            //     require ('@/assets/images/logo_livera.png'),
            //     require ('@/assets/images/logo_wvi.png')
            // ]
        }
    },
    methods: {
        gotoLivera : function () {
            window.location.href = '/second-portfolio'
        },
        gotoAtmajaya : function () {
            window.location.href = '/portfolio'
        }
    }
}
</script>

<style scoped>
.client-menu {
    font-family: 'Roboto';
    position: relative;
    width: 1284px;
    height: 370px;
    margin-left: 80px;

}

.client-menu-wrapper {
    width: 100%;
    height: 100%;
    padding-top: 80px;
}

.title-client > p {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #805CBA;
}

.line-client {
    position: absolute;
    width: 1000px;
    margin-top: -13px;
    left:275px;
    border: 1px solid #805CBA;
}

.logo-client {
    position: relative;
    width: 128px;
    height: 150px;
}

.logo-scroll-client {
    overflow-x: scroll;
}

.logo-client > div.logo-size-client > img {
    margin-top: 10px;
    padding-right: 125px;
}

.logo-size-client {
    width: 70%;
    height: 70%;
    display: flex;
}

.img-arrow-two {
    position: absolute;
    display: flex;
    width: 18%;
    height: 18%;
    margin-top: 10px;
    margin-left: 996px;
}

@media (min-width: 200px) and (max-width: 960px) {
    .client-menu {
        margin-left: 0px;
        height: 280px;
    }

    .client-menu-wrapper {
        margin: 10px;
        
    }
    .line-client {
        left: 175px;
        width: 500px;
    }
    .logo-size-client {
        width: 100px;
        height: 68%;
        display: flex;
    }
    .logo-scroll-client {
        height: 70%;
        overflow-x: scroll;
    }
    .img-arrow-two {
        display: none;
    }
}

</style>