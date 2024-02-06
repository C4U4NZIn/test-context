import axios from 'axios'
import Config from '../config.json'


const api = axios.create({


    baseURL:'http://localhost:3333/user',

    headers:{
        "Content-Type":'application/json'
    }

})

{/**

const token = localStorage.getItem(Config.TOKEN);

if(token){
   api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}else{
    
}

*/}

export default api;