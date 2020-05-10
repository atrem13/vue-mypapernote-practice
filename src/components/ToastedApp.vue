<template>
  <form v-on:submit.prevent="callToasted">
    <input type="text" v-model="text" placeholder="Type Something...">
    <button type="submit">Call Toasted</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    // reference https://www.npmjs.com/package/vue-toasted#usage
    callToasted () {
      this.$toasted.success(`you entering ${this.text} in input form`)
    }
  }
}
</script>
