<script>
import Rating from '../components/Rating.vue'
export default {
    name: 'Hotel_Card',
    components: {
        Rating
    },
    data(){
        return{
           
        }
    },
    props: {
        hotel:Object
    },
    computed:{
        HotelPrice(){
            return (this.hotel.price).toLocaleString();
        }
    }
 
}
</script>

<template>
    <div class="wrapper">
        <div class="card">
            <div class="card-img">
                <img
                    :src=hotel.imgSrc>
            </div>
            <div class="card-body">
                <div>
                    <p class="headline">{{hotel.name}}</p>
                    <div class="loc">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                        <p class="sub">{{hotel.location}}</p>
                    </div>
                </div>
                <div class="ratings">
                    <Rating :rating=hotel.rating></Rating>
                    <p class="sub"> {{hotel.reviews}} reviews</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, consequatur itaque, modi ipsum sed
                        rerum, facere nemo animi iste hic perspiciatis ad! Minima quae excepturi, assumenda dignissimos
                        animi non tenetur.</p>
                </div>
                <div class="book">
                    <div class="price">
                        <p class="headline">{{HotelPrice}}</p>
                        <p class="sub">EGP/night</p>
                    </div>
                    <button @click="$emit('OpenUserInfo')" class="moving-btn">Book Now!</button>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
.wrapper {
    font-size: 1rem;
}

.card {
    display: flex;
    justify-content: center;
    border: solid 0.05em black;
    border-radius: 1em;
    overflow: hidden;
    margin: 2em 0;
}

.card-img {
    width: 40%;
    height: 20em;
    overflow: hidden;
}

.card-img img {
    object-fit: cover;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: rgb(0, 0, 0);
    padding: 2em;
    width: 60%;
}

.loc,
.ratings {
    display: flex;
    justify-content: start;
    align-items: center;
}

.moving-btn {
    color: #000000;
    background-color: var(--main-yellow);
}

.moving-btn:hover {
    background-color: var(--main-yellow);
}

.book {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price{
    display: flex;
    flex-wrap: wrap;
    align-items:baseline;
}

.headline{
    font-size: 2em;
    font-weight: 700;
}
.sub{
    color: rgb(73, 73, 73);
    margin: 0 0.4em;
    font-size: small;
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
    }

}

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 600px) and (max-width: 800px) {
    .wrapper {
        font-size: 0.8rem;
    }
}</style>