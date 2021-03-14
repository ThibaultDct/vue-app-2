import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        city_data: {},
        city_id: {},
        rates: {},
        stock: {}
    },
    // MUTATIONS
    mutations: {
        // Name
        set_name (state, payload){
            return state.name = payload;
        },
        reset_name (state){
            return state.name = '';
        },
        // User
        set_user (state, payload){
            return state.user = payload.user;
        },
        reset_user (state){
            return state.user = {};
        },
        // City data
        set_city_data (state, payload){
            return state.city_data = payload.city;
        },
        reseet_city_data (state){
            return state.city_data = {};
        },
        // Stock
        set_stock (state, payload){
            return state.stock = payload.stock;
        },
        reset_stock (state){
            return state.stock = {};
        }

    },
    // ACTIONS
    actions: {
        // Name
        set_name (context, payload){
            context.commit('set_name', payload)
        },
        reset_name (context){
            context.commit('reset_name')
        },
        // User
        set_user (context, payload){
            context.commit('set_user', payload)
        },
        reset_user (context){
            context.commit('reset_user')
        },
        // City data
        set_city_data (context, payload){
            context.commit('set_city_data', payload)
        },
        reset_city_data (context){
            context.commit('reset_city_data')
        },
        // Stock
        set_stock (context, payload){
            context.commit('set_stock', payload)
        },
        reset_stock (context){
            context.commit('reset_stock');
        }
    }
});