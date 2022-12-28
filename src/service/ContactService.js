import axios from "axios";
export default class ContactService
{
   getAll(){
      return axios.get('http://localhost:8080/addressBook/all');
   }

   add(data){
      return axios.post('http://localhost:8080/addressBook/add', data);
   }

   update(data,token){
      return axios.put('http://localhost:8080/addressBook/edit/'+token, data);
   }

   delete(token){
      return axios.delete('http://localhost:8080/addressBook/remove/'+token);
   }
   getContactById(token){
      return axios.get('http://localhost:8080/addressBook/get/'+token);
   }

   getContactsBySort(sortOrder,sortBy){
      return axios.get('http://localhost:8080/addressBook/allByOrder/'+sortBy+'/'+sortOrder);
   }

   getContactBySearchString(searchString){
      return axios.get('http://localhost:8080/addressBook/searchContact/'+searchString);
   }
}