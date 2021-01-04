<template>
    <v-footer class="before-footer">
        <div class="before-footer-wrapper">
            <div class="content-before-footer">
                <div class="title-before-content">
                    <h2>Like what you see ?</h2>
                    <p>Feel free to ask us more</p>
                </div>
                <div class="btn-before-content">
                    <a href="/contact-us">Let's discuss</a>
                    <img src="../assets/images/arrow_join_us.png" >
                </div>
            </div>
            <div class="img-before-footer">
                <v-img
                src="../assets/images/img_discuss_portfolio.png"
                width="70%"
                height="70%"
                ></v-img>
            </div>
        </div>
    </v-footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.before-footer {
    font-family: 'Roboto';
    background-image: url('../assets/images/footer_home.png');
    left: 70px;
    height: 400px;
    width: 1824px;
}

.img-before-footer{
    position: relative;
    margin: 50px 0px 0px 600px;
}

.content-before-footer {
    /* border: 2px solid red; */
    position: absolute;
    color: #ffffff;
    margin: 80px 0px 0px 105px;
}

.title-before-content > h2 {
    font-size: 33px;
    padding-bottom: 5px;
}

.title-before-content > p {
    color: #c4c4c4;
    padding-bottom: 33px;
}

.btn-before-content {
    background-color: #ffffff;
    width: 200px;
    height: 60px;
    border-radius: 25px;
}

.btn-before-content > a {
    position: absolute;
    color: #5E2CB0;
    font-size: 22px;
    text-decoration: none;
    margin: 15px 0px 0px 15px;
}

.btn-before-content > img {
    position: absolute;
    width: 12%;
    height: 8%;
    margin: 23px 0px 0px 150px;
}

@media (min-width: 200px) and (max-width: 600px) {
    .before-footer {
        left: 0px;
        font-family: 'Roboto';
    }
    .img-before-footer {
        width: 30%;
        height: 30%;
        margin: auto;
        float: left;
        margin-left: 165px;
    }
    .content-before-footer {
        margin: auto;
    }
    .title-before-content > h2 {
        font-size: 24px;
    }
    .title-before-content > p {
        font-size: 12px;
    }
    .btn-before-content > a{
        font-size: 15px;
        margin: 12px 0px 0px 15px ;
    }
    .btn-before-content > img {
        margin: 17px 0px 0px 115px;
        width: 13%;
        height: auto;
    }
    .btn-before-content {
        width: 150px;
        height: 45px;
    }

}

</style>