<template>
    <div>
        <Sidebar />
            <div class="contact-us">
                <div class="contact-us-container">
                    <v-img
                    src="../assets/images/img_bg_contact_us.png"
                    width="100%"
                    height="100%"
                    ></v-img>
                    <div class="contact-us-content">
                        <div class="contact-us-title">
                            <h1>HELLO!</h1>
                            <h2>Drop us a line</h2>
                        </div>
                        <div class="contact-us-wrapper">
                            <v-text-field
                            label="Company"
                            placeholder="Your company name"
                            class="text-field"
                            ></v-text-field>
                            <v-text-field
                            label="Name"
                            placeholder="Your name"
                            class="text-field"
                            ></v-text-field>
                            <v-text-field
                            label="Phone"
                            placeholder="Your phone name"
                            class="text-field"
                            ></v-text-field>
                            <v-text-field
                            label="E-mail"
                            placeholder="Your e-mail"
                            class="text-field"
                            ></v-text-field>
                            <v-textarea
                            label="What do you want to tell us?"
                            placeholder="type here"
                            class="text-field textarea"
                            height="170px"
                            filled
                            ></v-textarea>
                            <a href="/service" class="learn-more button-submit"><span class="text-learn-more">Submit</span></a>
                        </div>
                    </div>
                </div>
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

.contact-us {
    font-family: 'Roboto';
    position: relative;
    left: 70px;
}

.contact-us-content {
    position: absolute;
    top: 0;
    color: #ffffff;
}

.contact-us-title {
    margin: 150px 0px 0px 85px;
    font-size: 22px;
}

.contact-us-title > h2 {
    font-weight: normal;
}

/*-------------------- TEXTAREA CONTACT US WRAPPER-------------------- */
.contact-us-wrapper {
    position: absolute;
    margin-top: -90px;
    margin-left: 800px;
    width: 145%;
    height: 100%;
}

.text-field >>> label {
    font-size: 34px;
    font-weight: bold;
    font-style: normal;
    color: #ffffff;
    top: -18px;
    margin-left: -52px;
    padding-top: 5px;
    text-align: left;
    width: 100%;
    height: 120%;
}

.text-field {
    font-style: italic;
    font-size: 12px;
    padding-bottom: 50px;
}

.textarea >>> label {
    margin-top: -40px;
    margin-left: -70px;
    width: 450px;
}

.textarea {
    font-style: normal;
    color: #ffffff;
    border-radius: 16px;
}

.button-submit{
    position: absolute;
    background-color: white;
    text-decoration: none;
}

.learn-more {
    width: 200px;
    height: 60px;
    margin: 25px 0px 0px 210px;
    border-radius: 25px;
}

.text-learn-more {
    position: absolute;
    font-size: 22px;
    line-height: 42px;
    padding: 8px 0px 0px 65px;
    color: #5E2CB0;
}
</style>