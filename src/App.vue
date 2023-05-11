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
        <HelloWorld msg="Bem-vindo!" />
        <div>
        <label class="switch">
          <input type="checkbox">
          <span class="slider"></span>
        </label>
      </div>
      </div>

      <div class="wrapper">
        <nav>
<br>
          <RouterLink to="/">Experiência profissional</RouterLink>
          <RouterLink to="/Hobbies">Hobbies</RouterLink>
          <RouterLink to="/Gatos">Meus gatos</RouterLink>
        </nav>
      </div>
    </header>

<br>

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
  background-color: rgba(146, 146, 146, 0.178);
  width: 750px;
  padding: 50px;
  margin: 20px;
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
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
  border-color: grey;
}

hr {
  border-top: 2px solid #ffffff;
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
