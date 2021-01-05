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
                            height="100px"
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
    left: 80px;
}

.contact-us-content {
    position: absolute;
    top: 0;
    color: #ffffff;
}

.contact-us-title {
    /* border: 2px solid red; */
    margin: 150px 0px 0px 120px;
    font-size: 22px;
}

.contact-us-title > h2 , .contact-us-title > h1 {
    font-weight: normal;
    margin: 0px;
}

/*-------------------- TEXTAREA CONTACT US WRAPPER-------------------- */
.contact-us-wrapper {
    position: absolute;
    margin-top: -70px;
    margin-left: 760px;
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
    color: #C4C4C4;
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
    margin: 25px 0px 0px 260px;
    border-radius: 25px;
}

.text-learn-more {
    position: absolute;
    font-size: 22px;
    line-height: 42px;
    padding: 8px 0px 0px 65px;
    color: #5E2CB0;
}


@media (min-width: 200px) and (max-width: 960px) {
    .contact-us {
        left: 0px;
    }
    .contact-us-title {
        margin: 28px;
        font-size: 12px;
    }
    .contact-us-wrapper {
        /* border: 2px solid red; */
        margin-left: 275px;
        width: 70%;
        height: 80%;
        margin-top: -85px;
    }
    .text-field >>> label {
        font-size: 12px;
        height:80%;
        margin: 0px;
        margin-top: 12px;
        margin-left: -13px;
        top: 0px;
        padding-top: 0px;
    }

    .text-field  {
        height: 30%;
        padding-bottom: 30px;
        font-size: 8px;
    }
    .textarea >>> label {
        height:30%;
        width: 250px;
        font-size: 9px;
        margin-left: -26px;
    }
    .textarea {
        height: 40%;
        margin-top: 100px;
    }
    .button-submit {
        margin: 0px;
        margin-top: 62px;
        width: 100%;
        height: 25%;
    }
    .text-learn-more {
        font-size: 10px;
        padding: 0px;
        margin-top: -10px;
        margin-left: 40px;
    }
}

</style>