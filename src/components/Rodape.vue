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
        <div class="back-to-top">
            <button @click="backtotop()">Voltar ao topo!</button>
        </div>
    </footer>

</template>

<style scoped>

/* .back-to-top {
        cursor: pointer;
        border: 1px solid #3498db;
        background-color: transparent;
        height: 50px;
        width: 140px;
        font-size: large;
        color: #3498db;
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
} */
</style>
