import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: []
    },
    getters: {
        PRODUCTS: (state) => state.products
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios("https://api.jsonbin.io/b/601529bdaafcad2f596180c2/latest", {
                headers: {
                    'secret-key':'$2b$10$u2CUREVy8nIh.Z0iscwiouPeRgnqUEzSYrp3Z55C.G4HcuZDRNgBe'
                }
            })
            .then(({data}) => {
                commit('SET_PRODUCTS_TO_STATE', data);
                console.log(data);
                return data;
            });
        },

        UPDATE_PRODUCTS({commit}, data) {
            return axios("https://api.jsonbin.io/b/601529bdaafcad2f596180c2", {
                method: "PUT",
                data: data,
                headers: {
                    'secret-key':'$2b$10$u2CUREVy8nIh.Z0iscwiouPeRgnqUEzSYrp3Z55C.G4HcuZDRNgBe',
                }
            })
            .then(() => {
                commit('SET_PRODUCTS_TO_STATE', data);
            });
        }

    },
    mutations: {
        SET_PRODUCTS_TO_STATE(state, products) {
            state.products = products;
        }
    },
    
});

export default store;