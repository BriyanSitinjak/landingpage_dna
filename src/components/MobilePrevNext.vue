<template>
    <div class="mobile-wrapper">
        <v-row>
            <v-col>
                <v-row>
                    <v-col>
                        <div v-on:click="gotoLivera" class="mobile-prev">
                            <v-img 
                            src="../assets/images/img_livera_portfolio.png" 
                            class="prev-button"
                            width="40%"
                            height="40%"></v-img>
                                <!-- <div class="prev-content-button">
                                    <div class="transform-prev">
                                        <div class="title-prev">
                                            <h3>PREVIOUS</h3>
                                        </div>
                                        <div class="main-prev">
                                            <img src="../assets/logo/arrow-prev-next.png">
                                            <h3>LIVERA</h3>
                                        </div>
                                    </div>
                                </div> -->
                        </div>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <div v-on:click="gotoLivera" class="mobile-prev">
                            <v-img 
                            src="../assets/images/img_livera_portfolio.png" 
                            class="prev-button"
                            width="40%"
                            height="40%"></v-img>
                                <!-- <div class="prev-content-button">
                                    <div class="transform-prev">
                                        <div class="title-prev">
                                            <h3>PREVIOUS</h3>
                                        </div>
                                        <div class="main-prev">
                                            <img src="../assets/logo/arrow-prev-next.png">
                                            <h3>LIVERA</h3>
                                        </div>
                                    </div>
                                </div> -->
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.mobile-wrapper {
    /* border: 2px solid red; */
}
.mobile-prev {
    /* border: 2px solid red; */
}

</style>