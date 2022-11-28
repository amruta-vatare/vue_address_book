<template>
    <div class="body">
        <div class="form-content">
        <form class="form" @submit.prevent="updateContact()">
            <div class="form-head">Update Contact</div>
            <div class="row-content">
                <label class="label text label-fields">Full Name</label>
                <input v-model="fullName" class="input" type="text" id="fullName" name="fullName" placeholder="Your full name..">
            </div>
            <div class="row-content">
                <label class="label text label-fields">Email</label>
                <input v-model="email" class="input" type="text" id="email" name="email" placeholder="Email">
            </div>
            <div class="row-content">
                <label class="label text label-fields">Phone Number</label>
                <input v-model="phoneNumber" class="input" type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number">
            </div>
            <div class="row-content">
                <label class="label text label-fields">Address</label>
                <input v-model="address" class="input" type="text" id="address" name="address" placeholder="Address">
            </div>
            <div class="row-content">
                <label class="label text label-fields">City</label>
                <input v-model="city" class="input" type="text" id="city" name="city" placeholder="City">
            </div>
            <div class="row-content">
                <label class="label text label-fields">State</label>
                <input v-model="state" class="input" type="text" id="state" name="state" placeholder="State">
            </div>
            <div class="row-content">
                <label class="label text label-fields">ZipCode</label>
                <input v-model="zipCode" class="input" type="text" id="zipCode" name="zipCode" placeholder="ZipCode">
            </div>
            <div class="buttonParent">
                <a href="#" class="resetButton button cancelButton">Cancel</a>
                <div>
                    <button type="submit" class="button submitButton" id="submitButton">Update</button>
                    <button type="reset" class="resetButton button">Reset</button>
                </div>
            </div>
        </form>>
        </div>
    </div>
</template>
<script>
import ContactService from '../service/ContactService'
export default{
    name:'ContactUpdate',
    data(){
        return{
                fullName:'',
                email:'',
                phoneNumber:'',
                address:'',
                city:'',
                state:'',
                zipCode:'',
                response:'',
                token: '',
                contactService: new ContactService()
            }
    },
    methods:{
        updateContact(){
                this.contactService.update({
                    fullName:this.fullName,
                    phoneNumber:this.phoneNumber,
                    email:this.email,
                    city:this.city,
                    state: this.state,
                    zipCode:this.zipCode,
                    address: this.address,
                }, this.token)
                .then(response => {
                    this.response = JSON.stringify(response, null, 2)
                    alert('Contact ' + this.fullName + ' updated successfully')
                    location.href = location.hostname;
                })
                .catch(error => {
                    alert('Error updating Contact ' + this.fullName + ' ' + error.message )
                    this.response = 'Error: ' + error.response.status
                });
        },
        getTokenFromLocalStorage(id){
            return localStorage.getItem(id);
        },
        getContactById(token){
            this.contactService.getContactById(token)
        .then((response)=>{
            let contact = response.data;
            this.fullName = contact.fullName;
            this.phoneNumber = contact.phoneNumber;
            this.email = contact.email;
            this.address = contact.address;
            this.city = contact.city;
            this.state = contact.state;
            this.zipCode = contact.zipCode;
        })
        .catch((error)=>{
            alert('Error getting Contact'+error.message)
            this.response = 'Error: '+error.response.status
        });
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.token =  this.getTokenFromLocalStorage(this.id);
        this.getContactById(this.token)        
    }
}
</script>
<style>
.emp-payroll {
    color: #42515f;
}

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

.lable {
    min-width: 200px;
}

label {
    padding: 12px 12px 12px 0px;
}

.label-fields {
    min-width: 110px;
}

.text {
    font-size: 16px;
    color: #42515f;
    opacity: 1;
    font-family: system-ui;
}

.input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}

.profile-radio-content {
    display: flex;
    flex-direction: row;
}

.profile-radio-content {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.profile {
    width: 40px;
    border-radius: 50%;
    margin-left: 12px;
}

select {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    font-family: system-ui;
    letter-spacing: 0px;
    color: #42515f;
    background-color: transparent;
}

.buttonParent {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    margin-top: 20px;
}

.button {
    font-size: 20px;
    font-family: system-ui;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
    background: transparent;
    border: none;
    font-weight: 400;
    min-width: 140px;
    padding: 7px 7px;
    border: 1px solid #707070;
    cursor: pointer;
}

.submitButton {
    border: none;
    background-color: #f5f5f5;
    margin-right: 30px;
}

.cancelButton {
    text-decoration: none;
    text-align: center;
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

    .row {
        flex-direction: column;
    }

    .uploadButoon {
        justify-content: flex-start;
    }

    .profile-radio-button {
        flex-flow: wrap;
    }

    .submitButton {
        margin: 0px;
    }

    .buttonParent {
        flex-direction: column-reverse;
        align-items: flex-start;
    }
    .error-output{
        margin-left: 10px;
        font-size: 12px;
        font-style: italic;
        color: red;
    }
}
</style>