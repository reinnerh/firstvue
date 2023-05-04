<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Rodape from './components/Rodape.vue';

</script>
<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Bem Vindo!" />

    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Informações Pessoais</RouterLink>
        <RouterLink to="/about">Experiência Profisional</RouterLink>
        <RouterLink to="/carrossel">Carrossel de fotos</RouterLink>
      </nav>
    </div>
  </header>

  <main id="teste">
  <RouterView />
  </main>

  <footer>
      <Rodape/>
  </footer>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

#fotoperfil {
  border-radius: 50%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}


nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  nav {
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
    padding: 1rem 0;
    margin-top: 1rem;
  }
}

main {
  min-height: 150vh;
}
</style>
