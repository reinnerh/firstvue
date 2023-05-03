<script>
export default {
  methods: {
    backtotop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>
<template>

<footer>

<button @click="backtotop()">Voltar a</button>

</footer>

</template>
