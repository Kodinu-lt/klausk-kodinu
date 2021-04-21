import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import App from "./App.vue";
import "./registerServiceWorker";
import { firestorePlugin } from "vuefire";

import { db } from "./db";

Vue.use(Buefy);
Vue.use(firestorePlugin);

Vue.config.productionTip = false;
Vue.prototype.$db = db;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
