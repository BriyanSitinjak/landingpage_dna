<template>
    <v-container id="app">
        <div class="sidebar-fixed">
            <img v-on:click="gotoHome" class="logo-dna" src="../assets/logo/logo_dna.png" >
            <div class="logo-sidebar-fixed">
                <img class="logo-frame" src="../assets/logo/logo_frame.png" @click="sidebar = !sidebar">
                <v-content class="full-navbar">
                    <v-card>
                        <v-navigation-drawer width="700" temporary app v-model="sidebar" light>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title class="txt-header">DIGITAL NATIVE AGENCY</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="txt-navbar" v-for="(item, i) in menuItems" exact :key="i" :to="item.path">{{item.title}}</v-list-item>
                            </v-list>
                        </v-navigation-drawer>
                    </v-card>
                </v-content>
                <img v-on:click="gotoLinkedin" class="logo" src="../assets/logo/logo_linkedin.png">
                <img v-on:click="gotoFacebook" class="logo" src="../assets/logo/logo_facebook.png">
                <img v-on:click="gotoInstagram" class="logo" src="../assets/logo/logo_instagram.png">
            </div>
        </div>
        <div class="nav-bar">
            <v-toolbar id="navbar">
                <v-app-bar-nav-icon x-small @click="sidebar = !sidebar"></v-app-bar-nav-icon>
                <div class="title-toolbar">
                    <img v-on:click="gotoHome" src="../assets/logo/logo_dna.png">
                </div>
                <v-navigation-drawer app dark absolute temporary v-model="sidebar">
                    <v-list nav width="100%" height="100%">
                        <v-list-item v-for="(item, i) in menuItems" exact :key="i" :to="item.path">{{item.title}}</v-list-item>
                        <div class="navbar-logo-wrapper">
                            <div class="navbar-logo linkedin-content">
                                <v-img
                                src="../assets/logo/logo_linkedin.png"
                                width="100%" 
                                v-on:click="gotoLinkedin"
                                ></v-img>
                            </div>
                            <div class="navbar-logo facebook-content">
                                <v-img
                                src="../assets/logo/logo_facebook.png"
                                width="100%"
                                v-on:click="gotoFacebook"
                                ></v-img>
                            </div>
                            <div class="navbar-logo instagram-content">
                                <v-img
                                src="../assets/logo/logo_instagram.png"
                                width="100%"
                                v-on:click="gotoInstagram"
                                ></v-img>
                            </div>
                        </div>
                    </v-list>
                </v-navigation-drawer>
            </v-toolbar>
        </div>
    </v-container>
</template>

<script>
export default {
    data: function() {
        return {
            sidebar: false,
            menuItems : [
                { path: "/", name: "Home", title: "Home"},
                { path: "/service", name: "Service", title: "Our Service"},
                { path: "/portfolio", name: "Portfolio", title: "Portfolio"},
                { path: "/about", name: "About", title: "About us"},
                { path: "/contact-us", name: "ContactUs", title: "Contact us"}

            ],
        };
    },
    methods:{
        gotoHome: function(){
            window.location.href = '/'
        },
        gotoLinkedin: function() {
            window.location.href = 'https://www.linkedin.com/company/digital-native-agency-indonesia/'
        },
        gotoFacebook: function() {
            window.location.href = 'https://web.facebook.com/Digital-Native-Agency-111851087042638'
        },
        gotoInstagram: function() {
            window.location.href = 'https://www.instagram.com/digital_native_dna/'
        }
    }
}
</script>

<style scoped>
#app {
    margin: 0px;
    padding: 0px;
}

.nav-bar {
    display: none;
}

.sidebar-fixed {
    background-color: #5E2CB0;
    position: fixed;
    height: 100%;
    z-index: 1;
    overflow: auto;
}

.logo-dna {
    margin: 5px;
    width: 70px;
    height: 70px;
}

.logo-frame {
    margin: 30px;
    margin-top: 150px;
    margin-bottom: 110px;
    cursor: pointer;
}

.logo-sidebar-fixed > img.logo {
    width: 30px;
    height: 30px;
    display: list-item;
    margin: 25px;
}

.logo , .logo-dna{
    cursor: pointer;
}
.full-navbar {
    position: relative;
    width: 80% !important;
    overflow: visible !important;
    z-index: -1 !important;
}
.txt-navbar {
    color:  #5E2CB0;
    width: 320px;
    font-size: 40px;
    font-weight: bold;
    float: right;
    text-align: right;
    margin-left: 50px;
    margin-top: 20px;
    margin-right: 50px;
    display: table-column-group;
}

.txt-header {
    color: #5E2CB0;
    font-size: 40px;
    font-weight: bold;
    margin-left: 90px;
    margin-top: 10px;
    height: 150px;
}

@media (min-width: 200px) and (max-width: 600px) {
    .sidebar-fixed {
        display: none;
    }


    #navbar {
        z-index: 1;
        background: linear-gradient(124.11deg, rgba(110, 42, 169, 0.8) 27.4%, rgba(255, 255, 255, 0) 102.33%), linear-gradient(108.51deg, rgba(110, 42, 169, 0.5) 0.81%, rgba(94, 44, 176, 0.5) 32.12%, rgba(112, 42, 168, 0.5) 40.81%, rgba(110, 42, 169, 0.5) 50.65%, rgba(121, 40, 164, 0.5) 63.06%, rgba(147, 37, 152, 0.5) 77.15%);
        width: 100%;
        height: 100%;
    }
    .nav-bar {
        font-family: 'Roboto';
        display: inherit;
    }
    .title-toolbar {
        width: 100%;
        height: 100%;
    }
    .title-toolbar > img {
        width: 13%;
        margin-top: 5px;
        height: auto;
        float: right;
        cursor: pointer;
    }
    .navbar-logo-wrapper {
        float: left;
        margin-left: 10px;
        border: 5px solid white;
    }
    .navbar-logo {
        float: left;
        padding: 20px;
        cursor: pointer;
    }
}
</style>