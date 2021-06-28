<template>
  <div class="events">
    <h1>Events for Good</h1>
    <EventCard
      v-for="event in events"
      :key="`event-${event.id}`"
      :event="event"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        // {
        //   id: 3456,
        //   category: 'animal welfare',
        //   title: 'Cat Adoption Day',
        //   description: 'Find your new feline friend',
        //   location: 'Meow Town',
        //   date: 'January 28, 2022',
        //   time: '12:00',
        //   petsAllowed: true,
        //   organizer: 'Kat Laydee',
        // },
        // {
        //   id: 3457,
        //   category: 'food',
        //   title: 'Community Gardening',
        //   description: 'Join us as we tend to community edible plants',
        //   location: 'Flora Town',
        //   date: 'March 14, 2022',
        //   time: '10:00',
        //   petsAllowed: true,
        //   organizer: 'Fern Pollin',
        // },
        // {
        //   id: 3458,
        //   category: 'sustainability',
        //   title: 'Beach Cleanup',
        //   description: 'Help pick up trash along the beach shore',
        //   location: 'Playa Del Carmen',
        //   date: 'July 22, 2022',
        //   time: '11:00',
        //   petsAllowed: false,
        //   organizer: 'Carey Wales',
        // },
      ],
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
