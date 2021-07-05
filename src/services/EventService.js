import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents(perPage, page) {
    return axiosClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },

  getEventDetails(id) {
    return axiosClient.get('/events/' + id)
  },
}
