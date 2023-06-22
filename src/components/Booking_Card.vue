<script>
export default {
    name: 'Booking_Card',
    components: {},
    data() {
        return {
            hotel: {}
        }
    },
    props: {
        trip: Object
    },
    methods: {
        async getHotelsDetails() {
            let hotelId = this.trip.hotelId;
            let response = await fetch(`http://localhost:3000/Hotels/${hotelId}`);
            let data = await response.json();
            this.hotel = data;
        }
    },
    async created() {
        await this.getHotelsDetails();
    }


}
</script>

<template>
    <div class="wrapper">
        <div class="card">

            <div class="card-img">
                <img :src=hotel.imgSrc>
            </div>

            <div class="card-body sec1">
                <div>
                    <p class="headline">{{ hotel.name }}</p>
                    <div class="icontitle">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                        <p class="sub">{{ hotel.location }}</p>
                    </div>
                </div>
                <div class="dates">

                    <div class="check in">
                        <p class="sub">Check In</p>
                        <div class="icontitle">
                            <font-awesome-icon icon="fa-regular fa-calendar" />
                            <p>{{ trip.checkIn }}</p>
                        </div>
                    </div>

                    <div class="check out">
                        <p class="sub">Check Out</p>
                        <div class="icontitle">
                            <font-awesome-icon icon="fa-regular fa-calendar" />
                            <p>{{ trip.checkOut }}</p>
                        </div>
                    </div>

                    <div class="room">
                        <p class="sub">Rooms</p>
                        <div class="icontitle">
                            <font-awesome-icon icon="fa-solid fa-bed" />
                            <p>{{ trip.rooms }} </p>
                        </div>
                    </div>

                </div>
                <div class="">
                    <p class="guest">Guest Info</p>
                    <div class="icontitle">
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <p class="userInfo">{{ trip.fullName }}</p>

                    </div>
                    <div class="contact">
                        <div class="icontitle">
                            <font-awesome-icon icon="fa-solid fa-envelope" />
                            <p class="userInfo">{{ trip.email }}</p>
                        </div>
                        <div class="icontitle">
                            <font-awesome-icon icon="fa-solid fa-phone" />
                            <p class="userInfo">{{ trip.phone }}</p>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div class="card-body sec2">
                <div class="price">
                    <p class="headline">{{ trip.totalPrice }}</p>
                    <p class="sub">EGP</p>
                </div>
                <button @click="$emit('deleteBooking',trip.id)" class="moving-btn">Cancel Trip</button>
            </div>

        </div>
        <hr>
    </div>
</template>

<style scoped>
.wrapper {
    font-size: 1rem;
}

.card {
    display: flex;
    /* border-bottom: solid 0.05em black; */
    overflow: hidden;
    margin: 2em 0;
}

.card-img {
    width: 33%;
    /* height: 17em; */
    overflow: hidden;
}

.card-img img {
    border-radius: 1em;
    object-fit: cover;
    max-width: 100%;
}

.card-body {
    display: flex;
    flex-direction: column;
    color: rgb(0, 0, 0);
    padding:1em;
}
.sec1 {
    width: 42%;
    border-right: solid 0.05em black;
    justify-content: space-between;
}

.sec2 {
    width: 25%;
    justify-content: space-around;
}


.moving-btn {
    color: #ffffff;
    background-color: rgb(229, 0, 0);
}

.moving-btn:hover {
    background-color: rgb(229, 0, 0);
}

.price {
    display: flex;
    align-items: baseline;
    justify-content: center;
}

.headline {
    font-size: 2em;
    font-weight: 700;
}
.guest{
    font-size: 1.5em;
    font-weight: 600;
}
.userInfo{
    font-size: 1em;
    font-weight: 500;
    margin:0.1em 1em 0.1em 0;
    
}
.contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
}


.sub {
    color: rgb(73, 73, 73);
    margin: 0 0.3em;
    font-size: 0.8em;
}
.dates {
    display: flex;
}
.check,
.room{
    width: 100%;
    position: relative;
    padding: 0.2em;
    margin-right: 1em;
    /* background-color: var(--secondary-beige); */
    border: solid 0.005em #e0e0e0;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    border-radius: 0.15em;
}
.check::before{
    content: "";
    position: absolute;
    width: 0.4em;
    height: 100%;
    top: 0%;
    right: 100%;
    border-top-left-radius: 0.2em;
    border-bottom-left-radius: 0.2em;
}
.in::before{
    background-color:#00aa6c;
}
.out::before{
    background-color:#c00;
}
.icontitle{
    display: flex;
    margin: 0.1em;
}
.icontitle p{
    font-weight: 500;
    font-size: 0.9em;
    margin:0 0.3em;
}

/* Extra small devices (phones, 600px and down) */
@media (max-width: 600px) {
    .wrapper {
        font-size: 0.7rem;
    }
    .card {
        flex-direction: column;
    }
    .card-img {
        width: 100%;
    }
    .card-body {
        width: 100%;
        height: 60%;
        padding: 0.5em;
    }
    .sec1 {
        border-right: none;
    }
    .sec2 {
        display: flex;
        flex-direction: row;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 600px) and (max-width: 800px) {
    .wrapper {
        font-size: 0.8rem;
    }
    .card-body {
        padding: 0.5em;
    }
}
</style>