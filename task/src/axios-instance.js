import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-task-cf9bb.firebaseio.com/'
})

export default instance;