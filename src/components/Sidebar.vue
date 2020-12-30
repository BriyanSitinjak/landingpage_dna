<template>
    <div id="app">
        <div class="sidebar-fixed">
            <img v-on:click="gotoHome" class="logo-dna" src="../assets/logo/logo_dna.png" >
            <div class="logo-sidebar-fixed">
                <img class="logo-frame" src="../assets/logo/logo_frame.png" @click="sidebar = !sidebar">
                <v-divider></v-divider>
                <v-content class="full-navbar">
                    <v-navigation-drawer width="700" temporary app v-model="sidebar" light force>
                        <v-list>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-img src="../assets/logo/logo_dna.png"
                                    width="15%"
                                    height="auto"></v-img>
                                </v-list-item-icon>
                                <v-list-item-title class="txt-header">DIGITAL NATIVE AGENCY</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="txt-navbar" v-for="(item, i) in menuItems" exact :key="i" :to="item.path">{{item.title}}</v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                </v-content>
                <img v-on:click="gotoLinkedin" class="logo logo-linkedin" src="../assets/logo/logo_linkedin.png" alt="LinkedIn">
                <img v-on:click="gotoFacebook" class="logo logo-facebook" src="../assets/logo/logo_facebook.png" alt="Facebook">
                <img v-on:click="gotoInstagram" class="logo logo-instagram" src="../assets/logo/logo_instagram.png" alt="Instagram">
            </div>
        </div>
        <div class="nav-bar">
            <div app class="nav-bar-wrapper">
                <v-toolbar app dark id="navbar">
                    <v-app-bar-nav-icon x-small dense class="navbar-sidebar" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
                    <v-navigation-drawer app fixed absolute v-model="sidebar">
                        <v-list app nav dense width="100%" height="200px">
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
                            <!-- <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-home</v-icon>
                                </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                            </v-list-item> -->
                        </v-list>
                    </v-navigation-drawer>

                    <!-- <v-toolbar-items d-flex>
                        <v-img src="../assets/logo/logo_dna.png" width="50px" height="100%"></v-img>
                    </v-toolbar-items> -->

                    <!-- <v-spacer></v-spacer> -->

                    <!-- <v-toolbar-items>
                        <v-btn text v-for="item in menuItems" :key="item.title">
                        <router-link class="router-link" :to="item.path">{{item.title}}</router-link>
                        </v-btn>
                    </v-toolbar-items> -->
                </v-toolbar>
            </div>
        </div>
    </div>
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
    z-index: 1px;
    padding-right: 11px;
}

.logo-dna {
    width: 50px;
    height: 50px;
    overflow: auto;
    margin: 10px 0px 0px 10px;
}

.logo-frame {
    margin: 150px 0px 130px 25px;
    cursor: pointer;
}

.logo-sidebar-fixed > img.logo {
    width: 30px;
    height: 30px;
    display: list-item;
    margin: 20px 0px 0px 20px;
}

.logo , .logo-dna{
    cursor: pointer;
}

.full-navbar {
    position: absolute;
    width: 80% !important;
    overflow: visible !important;
    z-index: 100 !important;
}

.v-navigation-drawer {
    z-index: 99999 !important;
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
    margin-left: 50px;
    margin-top: 30px;
    height: 150px;
}

@media (min-width: 200px) and (max-width: 600px) {
    .sidebar-fixed {
        display: none;
    }

    .nav-bar {
        position: relative;
        font-family: 'Roboto';
        display: inherit;
    }
    .nav-bar-wrapper {
        position: relative;
        height:100%;
    }
    .router-link { 
        text-decoration: none;
        color:  #5E2CB0;
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

    .navbar-sidebar {
        height: 10px;
    }
}
</style>