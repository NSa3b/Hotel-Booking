<script>
export default{
    name:'Thankyou',
    data(){
        return{

        }
    },
    props: {
        show: Boolean
    },

}
</script>

<template>
      <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <p class="headline">Thank you for Booking with us !</p>
                <div class="navigate">
                    <routerLink to="/myBookings">
                        <button class="fixed-btn">See all your trips</button>
                    </routerLink>
                    <button class="fixed-btn" @click="$emit('close')">Countinue checking Hotels</button>
                </div>
            </div>
            
        </div>
    </Transition>

</template>

<style scoped>
.modal-mask {
    font-size: 1rem;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
}

.modal-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: auto;
    padding: 1.2em;
    background-color: #fff;
    border-radius: 0.5em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.navigate {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
}

.headline {
    text-align: center;
    margin: 1em;
    font-size: 2em;
    font-weight: 700;
}

/* Extra small devices (phones, 600px and down) */
@media (max-width: 600px) {
    .modal-container {
        width: 80%;
    }
    .modal-mask {
    font-size: 0.6rem;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 600px) and (max-width: 800px) {
    .modal-container {
        width: 70%;
    }
    .modal-mask {
    font-size: 0.8rem;
    }

}

</style>