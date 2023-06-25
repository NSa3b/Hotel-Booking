<script>
export default {
    nme: 'UserInfo',
    data() {
        return {
            trip: {
                email: "",
                fullName: "",
                phone: "",
                checkIn: "",
                checkOut: "",
                rooms: 1,
                totalPrice: this.hotel.price,
                hotelId: this.hotel.id
            },
            errors: {},
            today: new Date().toISOString().slice(0, 10),
            checkIn_date: new Date().toISOString().slice(0, 10),
            checkOut_date: "",
            Days: 1
        }
    },
    props: {
        show: Boolean,
        hotel: Object
    },
    methods: {
        onBook() {
            this.errors = [];
            const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]*$/;
            for (const info in this.trip) {
                if (this.trip[info] == "") {
                    this.errors[info] = `Please enter your ${info}`;
                }
            }
            if (this.trip.email.length > 0 && !emailRegExp.test(this.trip.email)) {
                this.errors.email = `This is not a valid email`;
            }
            if (this.trip.phone.length > 0 && this.trip.phone.length < 11) {
                this.errors.phone = `This is not a valid mobile number`;
            }
            if (Object.keys(this.errors).length == 0) {
                console.log("Sounds Greate!");
                this.trip.totalPrice = this.trip.rooms * this.hotel.price * this.Days;
                this.trip.hotelId=this.hotel.id;
                this.$emit('booked', this.trip);
            }
            else {
                console.log(this.errors);
            }

        },
        inputChange(input) {
            this.errors[input] = "";

            if (input == "checkIn") {
                this.checkIn_date = this.trip.checkIn;
            }
            if (input == "checkOut") {
                this.checkOut_date = this.trip.checkOut;
            }
            if (input == "checkOut" || input == "checkIn") {

                if (!(this.trip.checkIn == "") && !(this.trip.checkOut == "")) {

                    let checkIn = new Date(this.trip.checkIn);
                    let checkOut = new Date(this.trip.checkOut);
                    let Difference_In_Time = checkOut.getTime() - checkIn.getTime();
                    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                    this.Days = Difference_In_Days;
                    console.log(this.Days);
                }
            }
        },
    },
    computed: {
        TotalPrice() {
            return (this.trip.rooms * this.hotel.price * this.Days).toLocaleString();
        }
    },
}
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">

            <div class="modal-container">
                <font-awesome-icon class="close-btn fixed-btn" @click="$emit('close')" icon="fa-solid fa-xmark" />
                <div>
                    <p class="headline">{{ hotel.name }}</p>
                    <div class="loc">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                        <p class="sub">{{ hotel.location }}</p>
                    </div>
                </div>
                <form>

                    <div class="column room-info">

                        <div class="check-in">
                            <label for="check-in"></label>
                            <input class="input" id="check-in" placeholder="Check In" type="date" :min="this.today"
                                :max="this.checkOut_date" v-model="trip.checkIn" @input="inputChange('checkIn')">
                            <p class="fixed-title">Check In</p>
                            <p class="errormsg">{{ errors.checkIn }}</p>
                        </div>

                        <div class="check-out">
                            <label for="phone"></label>
                            <input class="input" id="check-out" placeholder="Check Out" type="date" :min="this.checkIn_date"
                                v-model="trip.checkOut" @input="inputChange('checkOut')">
                            <p class="fixed-title">Check Out</p>
                            <p class="errormsg">{{ errors.checkOut }}</p>
                        </div>

                        <div class="rooms">
                            <label for="rooms"></label>
                            <input class="input" id="rooms" placeholder="Room numbers" type="number" min="1" max="10"
                                v-model="trip.rooms">
                            <p class="fixed-title">Rooms</p>
                        </div>
                    </div>
                    <hr>
                    <div class="column email">

                        <label for="email"></label>
                        <input class="input" id="email" placeholder="Email" type="email" v-model="trip.email"
                            @input="inputChange('email')">
                        <p v-show="trip.email" class="title">Email</p>
                        <p class="errormsg">{{ errors.email }}</p>
                    </div>

                    <div class="column user-info">

                        <div class="Fname">
                            <label for="fName"></label>
                            <input class="input" id="fName" placeholder="Full Name" type="text" v-model="trip.fullName"
                                @input="inputChange('fullName')">
                            <p v-show="trip.fullName" class="title">Full Name</p>
                            <p class="errormsg">{{ errors.fullName }}</p>
                        </div>

                        <div class="phone">
                            <label for="phone"></label>
                            <input class="input" id="phone" placeholder="Mobile number" type="tel" v-model="trip.phone"
                                @input="inputChange('phone')">
                            <p v-show="trip.phone" class="title">Mobile number</p>
                            <p class="errormsg">{{ errors.phone }}</p>
                        </div>
                    </div>

                </form>
                <hr>
                <div class="book">
                    <div class="price">
                        <p class="headline">{{ TotalPrice }}</p>
                        <p class="sub">EGP</p>
                    </div>
                    <button class="moving-btn" @click.prevent="onBook()" type="submit">Book</button>
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
    justify-content: space-between;
    width: 50%;
    margin: auto;
    padding: 1.2em;
    background-color: #fff;
    border-radius: 0.5em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.loc {
    display: flex;
    justify-content: start;
    align-items: center;
}

.book {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.price {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
}

.headline {
    font-size: 1.2em;
    font-weight: 700;
}

.sub {
    color: rgb(73, 73, 73);
    margin: 0 0.4em;
    font-size: small;
}

.close-btn {
    position: absolute;
    top: 3%;
    right: 2%;
}

.moving-btn {
    color: #000000;
    background-color: var(--secondary-beige);
    margin-top: 0.5em;
}

.moving-btn:hover {
    background-color: var(--main-yellow);
}

.errormsg {
    font-size: small;
    color: red;
    margin: 0;
}

.input {
    width: 100%;
    height: 3em;
    font-size: small;
    padding: 1em 0.5em 0 0.5em;
    border: 0.05em rgba(128, 128, 128, 0.808) solid;
    border-radius: 0.3em;
}

.Fname,
.phone {
    width: 49%;
}

.check-in,
.check-out,
.rooms {
    width: 32.3%;
}

.email,
.phone,
.Fname,
.check-in,
.check-out,
.rooms {
    position: relative;
}

.user-info,
.room-info {
    display: flex;
    align-items: start;
    justify-content: space-between;
}

.column {
    margin: 1em 0;
}

.title {
    font-size: 0.6em;
    position: absolute;
    top: 12%;
    left: 1.5%;
}

.fixed-title {
    font-size: 0.6em;
    position: absolute;
    top: 12%;
    left: 1.6%;

}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

/* Extra small devices (phones, 600px and down) */
@media (max-width: 600px) {
    .modal-container {
        width: 80%;
    }

    .modal-mask {
        font-size: 0.7rem;
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