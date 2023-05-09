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
  <div class='back-to-top'>
    <button @click="backtotop()">Voltar ao topo</button>
  </div>
  <br>
</template>

<style scoped>
template {
  justify-content: center;
}

.back-to-top button {
  cursor: pointer;
  border: 1px solid rgb(0, 113, 189);
  background-color: transparent;
  height: 40px;
  width: 125px;
  color: rgb(0, 113, 189);
  font-size: 17px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
}
</style>
