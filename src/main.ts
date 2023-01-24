import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Tab, Tabs } from 'vant';
import { Swipe, SwipeItem } from 'vant';

// import 'vant/lib/index.css';

import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
import '@/mock/index.ts'


const app = createApp(App)
app.use(router)
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)
app.mount('#app')
