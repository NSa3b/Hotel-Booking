import { createStore } from 'vuex'
import {Hotels} from './modules/Hotels'
import {Bookings} from './modules/Bookings'


const store=createStore({
    modules:{
        Hotels,
        Bookings
    },
})

export default store;