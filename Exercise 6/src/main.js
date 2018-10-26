import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import ServerList from './ServerList.vue'
import ServerDetails from './ServerDetails.vue'
import Footer from './Footer.vue'

Vue.component('my-header', Header);
Vue.component('my-server-list', ServerList);
Vue.component('my-server-details', ServerDetails);
Vue.component('my-footer', Footer);
new Vue({
  el: '#app',
  render: h => h(App)
})
