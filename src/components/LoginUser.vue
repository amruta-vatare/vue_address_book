<template>
    <form @submit.prevent="Login()">
        <div class="row-content">
          <input type="text" name="email" id="email" v-model="email" placeholder="Email"/>
        </div>
        <div class="row-content">
          <input type="password" name="password" id="password" v-model="password" placeholder="Password"/>
        </div>
        <button type="submit">Login</button>
    </form>
</template>
<script>
import UserService from '../service/UserService'
export default{
    name:"LoginUser",
    data(){
      return{
        email : "",
        password : "",
        userService : new UserService() 
      }      
    },
    methods:{
      Login()
      {
        if(this.email == null || this.email == undefined || this.email.length == 0)
        {
          alert('Invalid email address')
        }
        else
        {
          this.userService.login({
                    email: this.email,
                    password : this.password                    
                })
                .then( (response) => {
                    console.log(response);
                    alert('Login success for ' + this.email)
                    localStorage.setItem(response.data.email, response.data.token);
                })
                .catch(error => {
                    alert('Login failed for ' + this.email + ' ' + error.message )
                }); 
        }
      }
    }
}
</script>
<style>
</style>