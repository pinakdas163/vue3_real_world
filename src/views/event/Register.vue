<template>
  <div v-if="event">
    This page is to register
    <button @click="register">Register me</button>
  </div>
</template>

<script>
export default {
  name: 'EventRegister',
  props: ['event'],
  methods: {
    register() {
      this.$router.push({
        name: 'EventDetails',
      })
    },
  },
}
</script>
