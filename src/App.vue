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
        <RouterLink to="/Hobbies">Hobbies</RouterLink>
        <RouterLink to="/Gatos">Meus Gatos!</RouterLink>
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
  text-align: center;
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

main {
  min-height: 150vh;

}

footer {
  text-align: center;
}

</style>
