import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import{faSuitcaseRolling} from '@fortawesome/free-solid-svg-icons'
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons';
import {faCircle as faRcircle} from '@fortawesome/free-regular-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {faBed} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret,faSuitcaseRolling,faPen,faLocationDot,faCircle,faRcircle,faCircleHalfStroke,faXmark,faCalendar,faBed,faUser,faEnvelope,faPhone)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
