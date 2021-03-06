// Import main css
import '~/assets/style/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'
import VueCarousel from 'vue-carousel/src/index';

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(BootstrapVue);
  if (process.isClient){
    Vue.use(VueCarousel);
  }
}
