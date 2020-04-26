import Vue from 'vue';
import OnenetUI from '@cmiot/onenet-ui';
import { Switch, Button } from '@cmiot/onenet-ui';
import { ButtonGroup } from "@cmiot/onenet-ui";
import { Icon } from "element-ui";
import utils from "@cmiot/onenet-ui/lib/utils"
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(OnenetUI)
Vue.use(Switch);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Icon);
Vue.use(utils)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
