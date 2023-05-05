<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Rodape from './components/Rodape.vue';
import Botoes from './components/Botoes.vue';
</script>
<template>
  <body>
    <header>
      <div class="wrapper">
        <HelloWorld msg="Bem Vindo!" />

      </div>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Experiência Profisional</RouterLink>
          <RouterLink to="/Hobbies">Hobbies</RouterLink>
          <RouterLink to="/Gatos">Meus Gatos!</RouterLink>
        </nav>
      </div>
    </header>

    <main id="teste">
      <RouterView />
    </main>


    <footer>
      <Rodape />
    </footer>
  </body>
  <Botoes />
</template>

<style scoped>
body {
  margin: auto;
  display: flex;
  max-width: 1280px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

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
