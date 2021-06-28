import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return axiosClient.get('/events')
  },

  getEventDetails(id) {
    return axiosClient.get('/events/' + id)
  },
}
