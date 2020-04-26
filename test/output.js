import _ButtonGroup2 from "@cmiot/onenet-ui/lib/button-group";
import _ButtonGroup from "@cmiot/onenet-ui/lib/button-group";
import _Button2 from "@cmiot/onenet-ui/lib/button";
import _Button from "@cmiot/onenet-ui/lib/button";
import _Switch2 from "element-ui/lib/theme-chalk/switch.css";
import "element-ui/lib/theme-chalk/base.css";
import _Switch from "element-ui/lib/switch";
import _OnenetUI2 from "@cmiot/onenet-ui/lib/theme-chalk/index.css";
import _OnenetUI from "@cmiot/onenet-ui/lib";
import Vue from 'vue';
import { Icon } from "element-ui";
import utils from "@cmiot/onenet-ui/lib/utils";
import App from './App.vue';
import router from './router';
import store from './store';
Vue.config.productionTip = false;
Vue.use(_OnenetUI);
Vue.use(_Switch);
Vue.use(_Button);
Vue.use(_ButtonGroup);
Vue.use(Icon);
Vue.use(utils);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
