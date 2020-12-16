<template>
    <div>
        <Sidebar />
            <div class="portfolio-container">
                <h1>This is Portfolio page</h1>
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
.portfolio-container {
    position: relative;
    left: 70px;
}
</style>