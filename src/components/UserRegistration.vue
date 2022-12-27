<template>
  <!-- <div class="body">
    <div class=".form-content">
      <form @submit.prevent="Registration()" class="form">
        <div class="form-head">User Login</div>
          <div class="row-content">
            <input type="text" name="userName" id="userName" v-model="userName" placeholder="User Name"/>
          </div>
          <div class="row-content">
            <input type="text" name="email" id="email" v-model="email" placeholder="Email"/>
          </div>
          <div class="row-content">
            <input type="password" name="password" id="password" v-model="password" placeholder="Password"/>
          </div>
          <div class="row-content">
            <input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm Password"/>
          </div>
          <button type="submit">Register</button>      
      </form>
    </div>
  </div> -->
  <v-container>
    <v-form ref="form">
        <v-row justify="center">
            <v-col cols="8">
                <v-app-bar class="pa-4 text-center primary rounded-lg rounded-b-0">
      </v-app-bar>
            </v-col>
            <v-col cols="8">
                <v-row justify="center">
                    <v-col>
                        <v-text-field type="text" name="userName" id="userName" v-model="userName" placeholder="User Name" @blur="$v.first_name.$touch()">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="8">
                <v-row>
                    <v-col>
                        <v-text-field type="text" name="email" id="email" v-model="email" placeholder="Email" @blur="$v.email.$touch()"></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="8">
                <v-row justify="center">
                    <v-col>
                        <v-text-field type="password" name="password" id="password" v-model="password" placeholder="Password"  @blur="$v.password.$touch()">
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm Password"  @blur="$v.confirmPass.$touch()">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="8">
                <v-btn class="mr-4" @click="Registration()">submit</v-btn>
                <v-btn @click="clear()">clear</v-btn>
                <v-btn class="ml-4" @click="signIn()">Sign In</v-btn>
            </v-col>
        </v-row>
      </v-form>
    </v-container>
</template>
<script>
  import UserService from '../service/UserService'
  import router from '@/router'
export default{
    name:"UserRegistration",
    data(){
        return {
        userName:"",
        email : "",
        password : "",
        confirmPassword : "",
        userService : new UserService() 
        }
    },
    methods:{
        Registration(){
          if(this.email == null || this.email == undefined || this.email.length == 0)
            {
              alert('Invalid email address')
            }else if(this.userName == null || this.email == undefined || this.userName.length == 0){
              alert('Invalid User Name')
            }else if( this.password != this.confirmPassword){
              alert('Password and confirmPassword must same! ')
            }else{
              this.userService.registration({
                userName:this.userName,
                email:this.email,
                password:this.password
              }).then( (response) => {
                    console.log(response);
                    alert('Registration success for ' + this.userName)
                    localStorage.setItem(response.data.email, response.data.token);
                    router.push({ name: 'LoginUser' })
                })
                .catch(error => {
                    alert('Registration failed for ' + this.userName + ' ' + error.message )
                }); 
            }
        },
    clear () {
      this.$refs.form.reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
    }
}
</script>
<style>
.form-content {
    display: flex;
    min-height: calc(100%-80px);
    background-color: #f7f7f7;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.form-head {
    font-family: system-ui;
    letter-spacing: 0px;
    color: #42515f;
    text-transform: capitalize;
    opacity: 1;
    padding-bottom: 20px;

}

.form {
    padding: 50px;
    width: 65%;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    opacity: 1;
}

.row-content {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    border: 0px solid green;
}
.submitButton {
    border: none;
    background-color: #f5f5f5;
    margin-right: 30px;
}
@media only screen and(max-width:960px) {
    .cancelButton {
        margin-left: 0px;
    }

    .form {
        width: 85%;
        padding: 44px 20px;
    }
}

@media only screen and(max-width:600px) {
    .form {
        margin-top: 10px;
    }

    .submitButton {
        margin: 0px;
    }
  }
</style>