
<template>
  <div class="body">
     <header class="header-content header">
       <div class="logo-content">
           <img src="./assets/logo3.png">
           <div>
               <span class="emp-text">ADDRESS</span>
               <span class="emp-text emp-payroll">BOOK</span>
           </div>
       </div>
     </header>
     <div id="app">
      <router-view/>
     </div>       
   </div>
</template>
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
.header {
    padding: 15px 0;
    background-color: #ffffff;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 80%;
}

.logo-content>img {
    height: 40px;
    width: 35px;
    border: solid 0px #42515f;
}

.logo-content>div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}

.emp-text {
    font-family: system-ui;
    letter-spacing: 0px;
    color: #82a70c;
    text-transform: capitalize;
}
</style>

