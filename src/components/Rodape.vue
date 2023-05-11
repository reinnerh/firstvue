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
  border: 1px solid rgb(0, 0, 0);
  background-color: rgba(146, 146, 146, 0.178);
  height: 40px;
  width: 125px;
  color: rgb(0, 113, 189);
  font-size: 17px;
  box-shadow: 0 6px 6px rgba(129, 129, 129, 0.438);
}
</style>
