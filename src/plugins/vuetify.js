import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify)

export default new Vuetify({
    // icons: {
    //     iconfont: 'mdi',
    // },
    // theme: {
    //     primary:'#5E2CB0',
    //     success: '#3CD1C2',
    //     info:'#FFAA2C',
    //     error: '#F83E70'
    // }
})
