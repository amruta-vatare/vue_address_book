<template>
    <!-- <form @submit.prevent="Login()">
        <div class="row-content">
          <input type="text" name="email" id="email" v-model="email" placeholder="Email"/>
        </div>
        <div class="row-content">
          <input type="password" name="password" id="password" v-model="password" placeholder="Password"/>
        </div>
        <button type="submit">Login</button>
    </form> -->

    <v-container>
    <v-form ref="form"  @submit.prevent="Login()">
        <v-row justify="center">
          <v-col cols="8">
                <v-app-bar class="pa-4 text-center primary rounded-lg rounded-b-0">
      </v-app-bar>
            </v-col>
            <v-col cols="8">
                <h3>Sign in to your Address book account</h3>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="email" label="E-mail" @blur="$v.email.$touch()"></v-text-field>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="password" label="Password" @blur="$v.password.$touch()">
                        </v-text-field>
            </v-col>
            <v-col cols="8">
                <v-btn class="mr-4" type="submit">Login</v-btn>
                <v-btn class="mr-4" @click="goToSignUp()">Sign Up</v-btn>
            </v-col>
        </v-row>
      </v-form>
    </v-container>
</template>
<script>
import UserService from '../service/UserService'
import router from '@/router'
export default{
    name:"LoginUser",
    data(){
      return{
        email : "Pawar@gmail.com",
        password : "sumit@123",
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
      },
      goToSignUp(){
        router.push({ name: 'UserRegistration' })
      }
    }
}
</script>
<style>
</style>