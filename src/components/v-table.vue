<template>
    <div class="container">
        <div class="card">
            <div class="card_select">
                <label class="form-checkbox">
                    <input 
                        type="checkbox" 
                        v-model="selectAll" 
                        @click="select"
                        class="choice_all_selected"
                    >
                        <span class="select">Выбрать всё</span>
                </label>
            </div>

            <div class="card_option">
                <select 
                    v-model="selectedStatus" 
                    :disabled="isLength" 
                    @change="changeStatus" 
                    class="option_style"
                >
                    <option 
                        v-for="status in statuses" 
                        :key="status"
                        :value="status"
                    >
                        {{status}}
                    </option>
                </select>
            </div>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Выбрать:</th>

                    <th scope="col">Номер
                        <span class="material-icons" @click="sortByNubmerToDown">
                            north
                        </span>
                        <span class="material-icons" @click="sortByNubmerToUp">
                            south
                        </span>
                    </th>

                    <th scope="col">Наименование
                        <span class="material-icons" @click="sortByNameToDown">
                             north
                        </span>
                        <span class="material-icons" @click="sortByNameToUp">
                            south
                        </span>
                    </th>

                    <th scope="col">Дата
                        <span class="material-icons" @click="sortByDataToDown">
                             north
                        </span>
                        <span class="material-icons" @click="sortByDataToUp">
                            south
                        </span>
                    </th>

                    <th scope="col">Статус</th>
                </tr>
            </thead>
            <tbody>
                <v-table-row
                    v-for="item in PRODUCTS" :key="item.number"
                    :item="item"
                    v-model="checked"
                >
                <!-- :selected-items="checked" -->
                    <!-- @qwe="onQwe" -->
                <!-- :value="checked" -->
                    <!-- @input="checked=$event" -->
                </v-table-row>
            </tbody>
        </table>        
    </div>
</template>

<script>
import vTableRow from './v-table-row'
import {mapGetters, mapActions} from 'vuex';
import {statuses} from '../const';


export default {
    name: 'v-table',
    components: {
        vTableRow
    },
    data () {
        return {
            selectAll: false,
            checked: [],
            statuses,
            selectedStatus: "disabled",
        }
    },
    methods: {
        ...mapActions([
            "UPDATE_PRODUCTS"
        ]),
        
        select() {
            this.checked = []
            if (!this.selectAll) {
                for (let i in this.PRODUCTS) {
                    this.checked.push(this.PRODUCTS[i].number)
                }
            }
        },
        // onQwe(arg1){
        //     this.checked = arg1;
        // },
        changeStatus () {
            let newProducts = this.PRODUCTS.map((product) => {
                if (this.checked.includes(product.number)) {
                    return {...product, status: this.selectedStatus}
                } else {
                    return product
                }
            })
            this.UPDATE_PRODUCTS(newProducts);
        },


        sortByNubmerToDown () {
            this.PRODUCTS.sort((a, b) => a.number - b.number)

        },

        sortByNubmerToUp () {
            this.PRODUCTS.sort((a, b) => b.number - a.number)
        },

        sortByNameToDown () {
            this.PRODUCTS.sort((a, b) => a.name.localeCompare(b.name))

        },

        sortByNameToUp () {
            this.PRODUCTS.sort((a, b) => b.name.localeCompare(a.name))
        },

        sortByDataToDown () {
            this.PRODUCTS.sort((a, b) => a.data.localeCompare(b.data))

        },
        sortByDataToUp () {
            this.PRODUCTS.sort((a, b) => b.data.localeCompare(a.data))
        },
    },

    computed: {
        ...mapGetters([
            "PRODUCTS"
        ]),

        isLength: (vm) => vm.checked.length == 0
    }
}
</script>

<style scoped>

    .container {
        background: #2c3e50;
        min-width: 100%;
        min-height: 100vh;
        padding: 30px;
    }
    table {
        margin-top: 20px;
        color: white;
    }
    .icons {
        margin-top: 30px;
        display: flex;
        justify-content: space-around; 
    }
    .card {
        display: relative;
        min-height: 100px;
        background: #2c3e50;
        border: none;
    }
    .card_select {
        margin-top: 30px
    }
    .material-icons:hover {
        cursor: pointer;
        color: red
    }
    .choice_all_selected {
        margin-left: 30px;
        cursor: pointer;
        align-items: center;
        text-align: center;
        transform:scale(1.5);
    }
    .select {
        padding-left: 15px;
        cursor: pointer;
        font-size: 25px;
        color: white;
        border: none;
    }
    .card_option {
        display: absolute;
        margin-bottom: 40px;
    }
    .option_style {
        color: black;
        margin-left: 1600px;
        border: 1px black solid;
    }
    tr:hover {
        cursor:pointer;
    }
    input {
        cursor:pointer;
    }
    select {
        cursor: pointer
    }
</style>

