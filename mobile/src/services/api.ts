import axiox from 'axios';

const api = axiox.create({
  baseURL: 'http://192.168.1.9:3333'
})

export default api;