<script>
import Booking_Card from '../components/Booking_Card.vue';
import { RouterLink } from 'vue-router';
export default {
    name: 'myBookings',
    data() {
        return {
        }
    },
    components: {
        Booking_Card,
    },
    computed:{
        myBookings(){
            return this.$store.state.Bookings.myBookings;
        }
    },
    created() {
        this.$store.dispatch("Bookings/getBookings");
    }
}
</script>

<template>
    <div class="bookings">
        <div v-if="myBookings.length != 0">
            <div v-for="trip in myBookings" :key="trip.id">
                <Booking_Card @deleteBooking="deleteBooking($event)" :trip="trip"></Booking_Card>
            </div>
        </div>
        <div v-else>
            <h1 class="headline">You didn't book any trips yet ..</h1>
            <routerLink to="/">
                <button class="moving-btn">check Hotels</button>
            </routerLink>
            

        </div>
    </div>
</template>


<style scoped>
.bookings {
    margin-top: 4.5em;
    padding: 2em 5em;
}
.headline {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 1em;
}
.moving-btn {
    color: #000000;
    background-color: var(--main-yellow);
}

.moving-btn:hover {
    background-color: var(--main-yellow);
}

/* Extra small devices (phones, 600px and down) */
@media (max-width: 600px) {
    .bookings {
        padding: 2em 2em;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 600px) and (max-width: 800px) {
    .bookings {
        padding: 2em 3em;
    }
}
</style>