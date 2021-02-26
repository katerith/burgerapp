import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-hooks-ingredientha-e2238-default-rtdb.firebaseio.com/'
});

export default instance;