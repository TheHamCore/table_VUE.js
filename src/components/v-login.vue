<template>
    <div>
        <form class="card" @submit.prevent="submit">
            <div class="form-floating mb-3">
                <input 
                    type="text" 
                    class="form-control" 
                    v-model="login"
                >
                <label for="floatingInput">Login</label>
            </div>
            
            <div class="form-floating">
                <input 
                    type="password" 
                    class="form-control" 
                    v-model="password"
                >
                <label for="floatingPassword">Password</label>
            </div>
                <button  class="btn btn-primary" type="submit">Войти</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'v-login',
    data () {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        submit () {
            if (this.isValid) {
                this.$router.push('/table')
            }
        }
    },
    computed: {
        isValid: (vm) => vm.login == 'admin' && vm.password == "admin"
    }
}
</script>

<style scoped>
    
  .card {
      margin: 0 auto;
      margin-top: 300px;
      width: 30%;
      overflow: hidden;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 10px;
      box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
      background: #fff;
  }
  .btn {
      margin-top: 20px;
  }
</style>