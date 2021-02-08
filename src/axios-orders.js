import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-4bd23-default-rtdb.firebaseio.com/'
})

export default instance;