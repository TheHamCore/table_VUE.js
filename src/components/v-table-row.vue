<template>
    <tr>
        <td>
            <label>
                <input 
                    type="checkbox" 
                    v-model="checked"
                    :value="item.number"
                    @change="onChange"
                >
            </label>
        </td>
        <td @click="editTaskNumber">
            {{item.number}}
            <div v-if="changeInputTdNumber === true">
                <input type="text" v-model="newTextNumber">
                <button 
                    @click.stop="changeTdNumber" 
                    class="btn btn-primary"
                >
                    Изменить
                </button>
            </div>
        </td>

        <td @click="editTaskName">
            {{item.name}}
            <div v-if="changeInputTdName === true">
                <input type="text" v-model="newTextName">
                <button 
                    @click.stop="changeTdName" 
                    class="btn btn-primary"
                >
                    Изменить
                </button>
            </div>
        </td>

        <td @click="editTaskData">{{item.data}}
            <div v-if="changeInputTdData === true">
                <input type="text" v-model="newTextData">
                <button 
                    @click.stop="changeTdData" 
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
            checkedP: false,
            selected: 'false',
            changeInputTdNumber: false,
            changeInputTdName: false,
            changeInputTdData: false,
            newTextNumber: '',
            newTextName: '',
            newTextData: '',
        }
    },  
    computed: {
        checked: {
            get() {
                return this.value
            },
            set(val) {
                this.checkedP = val
            }
        },
    },
    methods: {
        onChange () {
            this.$emit('input', this.checkedP)

        },

        editTaskNumber () {
            this.newTextNumber = this.item.number
            this.changeInputTdNumber = true

        },

        changeTdNumber () {
            this.item.number = this.newTextNumber
            this.changeInputTdNumber = false
        },

        editTaskName () {
            this.newTextName = this.item.name
            this.changeInputTdName = true
        },

        changeTdName () {
            this.item.name = this.newTextName
            this.changeInputTdName = false
        },

        editTaskData () {
            this.newTextData = this.item.data
            this.changeInputTdData = true
        },

        changeTdData () {
            this.item.data = this.newTextData
            this.changeInputTdData = false
        }
    }
}
</script>

<style scoped>
    td:hover {
        cursor: pointer;
        color: red;
    }
</style>