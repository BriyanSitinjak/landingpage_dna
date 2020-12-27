<template>
    <div class="header-portfolio">
        <div class="header-portfolio-wrapper">
            <v-img
                src="../assets/images/img_header_portfolio.png"
                width=100%
                height=100%
            ></v-img>
            <div class="header-content-portfolio">
                <div class="main-header-content">
                    <p>OUR TEAM WILL MAKE YOUR DREAMS COME TRUE</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header-portfolio {
    font-family: 'Roboto';
    position: relative;
    left: 70px;
    width: 100%;
    height: 100%;
}

.header-content-portfolio {
    position: absolute;
    font-style: normal;
    font-weight: bold;
    color: #ffffff;
    font-size: 47px;
    width: 825px;
    top: 0px;
    margin-top: 150px;
    margin-left: 90px;
}

@media (min-width: 200px) and (max-width: 600px) {
    .header-portfolio {
        left: 0px;
    }
    .header-content-portfolio {
        /* border: 2px solid red; */
        margin: 38px 0px 0px 30px;
        width: 70%;
        font-size: 20px;
    }
}

</style>