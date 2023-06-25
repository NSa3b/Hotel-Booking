export const Bookings={
    namespaced: true,
    state:()=>({
        myBookings:[]
    }),
    getters:{

    },
    mutations:{
        setBookings(state,data){
            state.myBookings=data;
        }
    },
    actions:{
        async getBookings({commit}){
            const response = await fetch("http://localhost:3000/Bookings");
            const data = await response.json();
            commit('setBookings',data);
        },
        async deleteBooking({dispatch,commit,state},id){
            let response = await fetch(`http://localhost:3000/Bookings/${id}`,{method:'Delete'});
            let data = await response.json();
           dispatch('getBookings');
           
        },
        async addBooking({commit,state},trip) {
            const response = await fetch("http://localhost:3000/Bookings", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(trip),
            });
            let data = await response.json();
            commit('setBookings',data);
        }

    }

}