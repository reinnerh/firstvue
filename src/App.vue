<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Rodape from "./components/Rodape.vue";
import Botoes from "./components/Botoes.vue";

import lua from "@/Photos_Icons/moon.png";
import sol from "@/Photos_Icons/sun.png";

export default {
  components: {
    Rodape,
    Botoes,
    HelloWorld,
  },
  data() {
    return {
      darkModeState: false,
      mode: 0,
      img: [lua, sol],
      index: 0,
    };
  },
  methods: {
    toggleDarkMode(state) {
      document.documentElement.classList.toggle("dark-mode", state);
      document.documentElement.classList.toggle("light-mode", !state);

      this.darkModeState = state;
    },
    handleClick() {
      this.toggleDarkMode(!this.darkModeState);
      this.index == 0 ? (this.index = 1) : (this.index = 0);
    },
  },

  mounted() {
    const useDark = window.matchMedia("(prefers-color-scheme: dark)");
    useDark.addListener((evt) => {
      this.toggleDarkMode(evt.matches);
    });

    const isUsingDark = useDark.matches;
    document.documentElement.classList.toggle("dark-mode", isUsingDark);
    document.documentElement.classList.toggle("light-mode", !isUsingDark);
  },
};
</script>

<template>
  <body id="main">
    <header>
      <div class="wrapper">
        <HelloWorld msg="Bem-vindo!" />
      </div>

      <br /><br />

      <button @click="handleClick" id="Botao">
        <div>
          <img :src="img[index]" />
        </div>
      </button>

      <div class="wrapper">
        <nav>
          <br />
          <RouterLink to="/">Experiência profissional</RouterLink>
          <RouterLink to="/Hobbies">Hobbies</RouterLink>
          <RouterLink to="/Gatos">Meus gatos</RouterLink>
        </nav>
      </div>
    </header>

    <br />

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
#Botao {
  cursor: pointer;
  border: 1px solid rgb(0, 0, 0);
  background-color: transparent;
  height: 40px;
  width: 100px;
  color: rgb(0, 113, 189);
  font-size: 17px;
  box-shadow: 0 6px 6px rgba(129, 129, 129, 0.438);
}

#Botao{
  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;
}
#Botao:hover {
  -webkit-transform:scale(1.2);
  transform:scale(1.2);
}

#Botao img {
  height: 30px;
  background-color: transparent;
  border-bottom: none;
}

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
