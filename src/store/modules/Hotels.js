export const Hotels={
    namespaced: true,
    state:()=>({
        Hotels:[],
    }),
    getters:{
        getHotelbyId:(state)=>(id)=>{
            return state.Hotels.find(hotel => hotel.id === id);
        }
    
    },
    mutations:{
        setHotels(state,data){
            state.Hotels=data;
        }
   
    
    },
    actions:{
        async getHotels({state,commit}){
            const response = await fetch("http://localhost:3000/Hotels");
            const data = await response.json();
            commit('setHotels',data);
        }
 
    }

}

