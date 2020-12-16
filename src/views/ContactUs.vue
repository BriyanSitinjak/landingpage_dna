<template>
    <div>
        <Sidebar />
            <div class="contact-us-container">
                <h1>This is Contact Us page</h1>
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

.contact-us-container {
    position: relative;
    left: 70px;
}

</style>