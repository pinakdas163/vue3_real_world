<template>
  <div class="events">
    <h1>Events for Good</h1>
    <EventCard
      v-for="event in events"
      :key="`event-${event.id}`"
      :event="event"
    />
    <div class="pagination">
      <router-link
        id="page-prev"
        ref="prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        v-if="page > 1"
        >&#60; Previous</router-link
      >
      <router-link
        id="page-next"
        ref="next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        v-if="!isLastPage"
        >Next &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'
import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  props: ['page'],
  data() {
    return {
      totalEvents: 0,
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
      ],
    }
  },
  created() {
    watchEffect(() => {
      this.events = []
      EventService.getEvents(2, this.page)
        .then((response) => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  computed: {
    isLastPage() {
      const lastPage = Math.ceil(this.totalEvents / 2)
      return this.page >= lastPage
    },
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
