<script >
import { RouterLink } from 'vue-router';
import Hotel_Card from '../components/Hotel_Card.vue'
import UserInfo from '../components/UserInfo_Modal.vue'
import Thankyou from '../components/Thankyou_Modal.vue';

export default {
  name: 'Home',
  components: {
    Hotel_Card,
    UserInfo,
    Thankyou
  },
  data() {
    return {
      UserInfoModal: false,
      ThankyouModal: false,
      hoteltoBook: {},
    }
  },
  computed:{
    Hotels(){
      return this.$store.state.Hotels.Hotels;
    },
  },
  methods: {
    OpenUserInfo(hotel) {
      this.hoteltoBook = hotel;
      this.UserInfoModal = true;
    },
    async Booked(trip) {
      this.$store.dispatch('Bookings/addBooking',trip);
      this.UserInfoModal = false;
      this.ThankyouModal = true;

    }
  },
  created() {
    this.$store.dispatch('Hotels/getHotels');
  }

}

</script>

<template>
  <div class="page">
    <section class="cover">
      <img class="coverPhoto" src="../assets/Pics/coverphoto.png" />
      <div class="caption">
        <p class="subtitle">Explore more travel vacation Hotels</p>
        <h1 class="title">Find your next stay</h1>
      </div>
    </section>
    <section class="Hotels">
      <div v-for="hotel in Hotels" :key="hotel.id">
         <Hotel_Card :hotel="hotel" @OpenUserInfo="OpenUserInfo(hotel)"></Hotel_Card>
      </div>
    </section>
    <Teleport to="body">
      <UserInfo :show="UserInfoModal" :hotel="hoteltoBook" @close="UserInfoModal = false" @booked="Booked($event)">
      </UserInfo>
    </Teleport>
    <Teleport to="body">
      <Thankyou :show="ThankyouModal" @close="ThankyouModal = false"></Thankyou>
    </Teleport>

  </div>
</template>


<style scoped>
.cover {
  font-size: 1rem;
  margin-top: 4.5em;
  position: relative;
}

.coverPhoto {
  width: 100%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
}


.caption {
  position: absolute;
  bottom: 10%;
  left: 10%;
  color: rgb(255, 255, 255);
}

.title {
  font-size: 4em;
  font-weight: 900;
}

.subtitle {
  font-size: 1.5em;
  font-weight: 500;
}

.Hotels {
  padding: 2em 5em;
}

/* Extra small devices (phones, 600px and down) */
@media (max-width: 600px) {
  .cover {
    font-size: 0.7rem;
  }

  .Hotels {
    padding: 1em 2em;
  }

}

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 600px) and (max-width: 800px) {
  .cover {
    font-size: 0.8rem;
  }

  .Hotels {
    padding: 2em 3em;
  }

}</style>
