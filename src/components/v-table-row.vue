<template>
    <tr>
        <td>
            <label>
                <input 
                    type="checkbox" 
                    v-model="myChecked"
                    :value="item.number"
                >
            </label>
        </td>
        <td @click="editNumber">
            {{item.number}}
            <div v-if="formChange.number === true">
                <input type="text" v-model="newTextNumber">
                <button 
                    @click.stop="changeNumber" 
                    class="btn btn-primary"
                >
                    Изменить
                </button>
            </div>
        </td>

        <td @click="editTaskName">
            {{item.name}}
            <div v-if="formChange.name === true">
                <input type="text" v-model="newTextName">
                <button 
                    @click.stop="changeName" 
                    class="btn btn-primary"
                >
                    Изменить
                </button>
            </div>
        </td>

        <td @click="editData">{{item.data}}
            <div v-if="formChange.data === true">
                <input type="text" v-model="newTextData">
                <button 
                    @click.stop="changeData" 
                    class="btn btn-primary"
                >
                    Изменить
                </button>
            </div>
        </td>

        <td>
            {{item.status}}
        </td>
    </tr>
</template>

<script>
export default {
    name: 'v-table-row',
    props: ['value','item'],
    data () {
        return {
            myChecked: this.value,
            selected: 'false',
            newTextNumber: '',
            newTextName: '',
            newTextData: '',
            formChange: {
                number: false,
                name: false,
                data: false
            }
        }
    },  
    watch: {
        myChecked (newValue){
            this.$emit('input', newValue)
        },

        value (newValue) {
            this.myChecked = newValue;
        }
    },
    // computed: {
    //     checked: {
    //         get() {
    //             return this.selectedItems
    //         },
    //         set(val) {
    //             this.$emit('qwe', val);
    //         }
    //     },
    // },
    methods: {
        editNumber () {
            this.newTextNumber = this.item.number
            this.formChange.number = true

        },

        changeNumber () {
            this.item.number = this.newTextNumber
            this.formChange.number = false
        },

        editTaskName () {
            this.newTextName = this.item.name
            this.formChange.name = true
        },

        changeName () {
            this.item.name = this.newTextName
            this.formChange.name = false
        },

        editData () {
            this.newTextData = this.item.data
            this.formChange.data = true
        },

        changeData () {
            this.item.data = this.newTextData
            this.formChange.data = false
        },
    },

}
</script>

<style scoped>
    td:hover {
        cursor: pointer;
        color: red;
    }
</style>