<script >

export default {
  props: {
    msg: String,
  }
}

/* defineProps({
  msg: {
    type: String,
    required: true
  }
}) */

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h4>
      Meu nome é Leonardo Reinner Hübsch.
    </h4>
    <h3>Conheça um pouco mais sobre mim!
    </h3>
    <br>
  </div>
    <img src="../Photos_Icons/fotoperfil.jpeg" alt="">
    <div class="cargo">
      <br>
      <h4>Consultor de Infraestrutua</h4>
      <h3>24 anos</h3>
      <h3>Cursando Gestão em Tecnologia da Informação</h3>
    </div>
</template>

<style scoped>

img {
  border-radius: 50%;
  height: 250px;
  text-shadow: 5px;
  border: 4px solid rgb(0, 113, 189);
  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;
}

img :hover {
  -webkit-transform:scale(1.2);
  transform:scale(1.2);
}


h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

h4 {
  font-size: 1.3rem;
  font-weight: bold;
}

h3 {
  font-size: 1rem;
}
</style>
