<template>
  <button v-on:click="callSweetAlert" type="button">
    call sweet alert
  </button>
</template>

<script>
export default {
  methods: {
    // reference https://sweetalert2.github.io/
    callSweetAlert () {
      this.$swal({
        icon: 'success',
        title: 'Sukses',
        text: 'Sweet Alert Berhasil Dipanggil',
        showCloseButton: true
      })
    }
  }
}
</script>

<style>
</style>
