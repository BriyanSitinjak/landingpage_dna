<template>
    <div id="app">
        <div class="sidebar-fixed">
            <img v-on:click="gotoHome" class="logo-dna" src="../assets/logo/logo_dna.png" >
            <div class="logo-sidebar-fixed">
                <img class="logo-frame" src="../assets/logo/logo_frame.png">
                <img v-on:click="gotoLinkedin" class="logo logo-linkedin" src="../assets/logo/logo_linkedin.png" alt="LinkedIn">
                <img v-on:click="gotoFacebook" class="logo logo-facebook" src="../assets/logo/logo_facebook.png" alt="Facebook">
                <img v-on:click="gotoInstagram" class="logo logo-instagram" src="../assets/logo/logo_instagram.png" alt="Instagram">
            </div>
        </div>
    </div>
</template>

<script>
export default {
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

.sidebar-fixed {
    background-color: #5E2CB0;
    position: fixed;
    width: 70px;
    height: 100%;
    z-index: 1px;
}

.logo-dna {
    width: 50;
    height: 50px;
    overflow: auto;
    margin: 10px 0px 0px 10px;
}

.logo-frame {
    margin: 150px 0px 130px 25px;
}

.logo-sidebar-fixed > img.logo {
    width: 30px;
    height: 30px;
    margin: 20px 0px 0px 20px;
}

.logo , .logo-dna{
    cursor: pointer;
}

</style>