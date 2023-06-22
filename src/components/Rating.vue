<script>
export default {
    name: 'rating',
    data() {
        return {
            full_circle: 0,
            half_circle: 0,
            empty_circle: 0

        }
    },
    props: {
        rating: Number
    },
    methods: {
        RateToCircle() {
            for (let i = 1; i <= this.rating; i++) {
                this.full_circle += 1;
            }
            for (let i = 1; i <= (5 - this.rating); i++) {
                this.empty_circle += 1;
            }
            if (this.full_circle + this.empty_circle != 5) {
                this.half_circle = 1;
            }
        }
    },
    mounted() {
        this.RateToCircle();
    }

}
</script>

<template>
    <div>
        <font-awesome-icon class="circle" v-for="n in full_circle" icon="fa-solid fa-circle" />
        <font-awesome-icon class="circle" v-if="half_circle" icon="fa-solid fa-circle-half-stroke" />
        <font-awesome-icon class="circle" v-for="n in empty_circle" icon="fa-regular fa-circle" />

    </div>
</template>

<style scoped>
.circle {
    margin: 0.05em;
    color: var(--main-green);
}
</style>