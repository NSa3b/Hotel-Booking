<script>
export default {
    name: 'myNav'

}
</script>
<template>
    <nav>
        <routerLink routerLink class="link" to="/">
            <div class="flex">
                <img class="logo" src="../assets/Pics/logo2.png">
                <p class="name">Explore</p>
            </div>
        </routerLink>
        <div class="navItems">
            <routerLink class="link" to="/myBookings">
                <div class="fixed-btn flex">
                    <font-awesome-icon icon="fa-solid fa-suitcase-rolling" />
                    <p>My Trips</p>
                </div>
            </routerLink>

            <div class="fixed-btn flex">
                <font-awesome-icon icon="fa-solid fa-pen" />
                <p>Review</p>
            </div>
            <button class="moving-btn">Sign in</button>
        </div>
    </nav>
</template>

<style scoped>
nav {
    font-size: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    padding: 0.5em 4em;
    z-index: 9;
}

.navItems {
    font-size: 1em;
    font-weight: 700;
    display: flex;
    justify-content: space-around;
    align-items: center;
    white-space: nowrap;

}

.name {
    font-size: 1.8em;
    font-weight: 800;
    margin: 0 0.5em;
}

.logo {
    height: 3.5em;
    width: auto;
}

.moving-btn {
    color: #ffffff;
    background-color: #000000;
}

.moving-btn:hover {
    background-color: var(--main-green);
}

.fixed-btn p {
    font-size: 1em;
    font-weight: 700;
    margin: 0 0 0 0.3rem;
}

/* Extra small devices (phones, 600px and down) */
@media (max-width: 600px) {
    nav {
        padding: 0.2em 0.5em;
        font-size: 0.8rem;
        flex-wrap: wrap;
    }

}

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 600px) and (max-width: 800px) {
    nav {
        padding: 0.3em 1em;
        font-size: 0.9rem;
    }

}
</style>