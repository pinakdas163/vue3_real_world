<template>
  <div v-if="event">This page is to edit</div>
</template>

<script>
export default {
  name: 'EventRegister',
  props: ['event'],
}
</script>
