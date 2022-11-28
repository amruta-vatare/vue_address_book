<template>
  <div class="main-content">
    <div class="header-content">
            <div class="contact-detail-text">
                Contact Details <div v-text="contactData.length" class="contact-count">10</div>
            </div>
             <router-link to="/addContact" class="add-button">
                <img src="../assets/plus-math.png"  height="20px" width="20px" alt="">Add Contact
            </router-link> 
    </div>
    <table id="display" class="table">
            <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>ZipCode</th>
                <th></th>
            </tr>
            <tr v-for="contact in contactData" :key="contact">
                <td>{{contact.fullName}}</td>
                <td>{{contact.email}}</td>
                <td>{{contact.phoneNumber}}</td>
                <td>{{contact.address}}</td>
                <td>{{contact.city}}</td>
                <td>{{contact.state}}</td>
                <td>{{contact.zipCode}}</td>
                <td>
                    <span  @click="updateContact(contact.id)">
                        <img src="../assets/edit.png" height="15px" width="15px"/>
                    </span>
                    <span @click="deleteContact(contact.id)">
                        <img src="../assets/delete.png" height="15px" width="15px"/>
                    </span>
                </td>
            </tr>
      </table>
  </div>
</template>
<script>
    import router from '@/router';
    import ContactService from '../service/ContactService'
    export default {
        name:'ContactList',
        data(){
            return{
                contactData : [],
                contactService: new ContactService()
            }
        },
        methods:{
            getContactList(){
                this.contactService.getAll()
                .then(
                    res => {
                        this.contactData = res.data;
                        this.contactData.forEach(contactItem => {
                            localStorage.setItem(contactItem.id, contactItem.token);
                        });
                })
            },
            updateContact(id){
                router.push({name:"ContactUpdate",params: { id: id }});                
            },
            deleteContact(id){
                let token = this.getTokenFromLocalStorage(id);
                this.contactService.delete(token)
                .then(
                    (res)=>{
                        alert("Contact deleted successfully " + res.status);
                        localStorage.removeItem(id);
                        location.reload();
                    }       
                )
                .catch(error => {
                    alert('Error deleting Contact ' + error.message )
                    this.response = 'Error: ' + error.response.status
                });
            },
            getTokenFromLocalStorage(id){
                return localStorage.getItem(id);
            }
        },
        created(){
            this.getContactList()
        }
    }
</script>
<style scoped>
.main-content {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 80px);
    background-color: #f7f7f7;
    padding: 30px 0 10px;
    box-sizing: border-box;
}
.header-content{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 25px;
}
.contact-detail-text{
    font-family: system-ui;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
}
.contact-count{
    background-color: #82a70c;
    color: #ffffff;
    border-radius: 42%;
    font-size: 16px;
    width: 26px;
    text-align: center;
    display: inline-block;
}
.add-button{
    font-family: system-ui;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    background: #82a70c 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 5px;
    padding: 5px 18px;
    outline: none;
    cursor: pointer;
    text-decoration: none;
}
.table-main{
    width: 80%;
    margin: 0 auto;
    overflow: auto;
}
.table{
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
    min-width: 800px;
}
td,th{
    text-align: left;
    padding: 5px 8px;
}
th{
    background: #42515f 0% 0% no-repeat padding-box;
    border-radius: 3px 3px 0px 0px;
    text-align: left;
    font-family: system-ui;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 1;
    border: 0px solid #dddddd;
}
tr:not(:first-child){
    background: #ffffff 0px 0px no-repeat padding-box;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
}
td{
    font-family: system-ui;
    letter-spacing: 0px;
    color: #3d3d3d;
    opacity: 1;
}
td:first-child{
    display: flex;
    align-items: center;
}
td img:first-child{
    margin-right: 10px;
}
td img{
    cursor: pointer;
}
</style>