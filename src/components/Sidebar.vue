<template>
    <div id="app">
        <div class="sidebar-fixed">
            <img class="logo-dna" src="../assets/logo/logo_dna.png">
            <div class="logo-sidebar-fixed">
                <img class="logo-frame" src="../assets/logo/logo_frame.png">
                <img class="logo logo-linkedin" src="../assets/logo/logo_linkedin.png" alt="LinkedIn">
                <img class="logo logo-facebook" src="../assets/logo/logo_facebook.png" alt="Facebook">
                <img class="logo logo-instagram" src="../assets/logo/logo_instagram.png" alt="Instagram">
            </div>
        </div>
    </div>
</template>

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


</style>