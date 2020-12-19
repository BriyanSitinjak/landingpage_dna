<template>
    <div class=client-menu>
        <div class="client-menu-wrapper">
            <div class="title-client">
                <p>OUR HAPPY CLIENT</p>
            </div>
            <div class="line-client"></div>
            <div class="logo-scroll-client">
                <div class="logo-client">
                    <div class="logo-size-client">
                        <img class="logo-livera" src="../assets/images/logo_livera.png">
                        <img src="../assets/images/logo_wvi.png">
                        <img src="../assets/images/logo_atmajaya.png">
                        <img  src="../assets/images/logo_livera.png">
                        <img src="../assets/images/logo_wvi.png">
                        <img src="../assets/images/logo_atmajaya.png">
                    </div>
                </div>
            </div>
            <div class="img-arrow img-arrow-two">
                <img src="../assets/logo/icon_back_02.png">
                <img src="../assets/logo/icon_next_02.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.client-menu {
    font-family: 'Roboto';
    position: relative;
    width: 1400px;
    height: 370px;
    left: 70px;
}

.client-menu-wrapper {
    width: 100%;
    height: 100%;
    padding-top: 80px;
    margin-left: 100px;
}

.title-client > p {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #805CBA;
}

.line-client {
    position: absolute;
    width: 900px;
    margin-top: -13px;
    left:275px;
    border: 1px solid #805CBA;
}

.logo-client {
    position: relative;
    width: 1800px;
    height: 150px;
}

.logo-scroll-client {
    overflow-x: scroll;
}

.logo-client > div.logo-size-client > img {
    margin-top: 10px;
    padding-right: 20px;
}

.logo.size-client {
    width: 100%;
    height: 100%;
    float: left;
}

.img-arrow-two {
    position: absolute;
    display: flex;
    width: 60px;
    height: 60px;
    margin-top: 10px;
    margin-left: 996px;
}
</style>