<template>
  <h1 v-if="event">{{ event.title }}</h1>
  <div id="nav">
    <router-link :to="{ name: 'EventDetails' }">Details</router-link>
    |
    <router-link :to="{ name: 'EventRegister' }">Register</router-link>
    |
    <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
  </div>
  <router-view :event="event"></router-view>
</template>

<script>
import EventService from '@/services/EventService'

export default {
  name: 'EventLayout',
  props: ['id'],
  data() {
    return {
      event: Object,
    }
  },
  created() {
    EventService.getEventDetails(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
</script>
