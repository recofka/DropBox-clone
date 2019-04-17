import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hidden-shore-25474.herokuapp.com'
});

export default api