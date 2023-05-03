<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Meu nome é Leonardo, selecione abaixo para conhecer um pouco mais de mim!
    </h3>
  </div>
    <img src="../Photos_Icons/fotoperfil.jpeg" alt="">
    <div class="cargo">
      <h3>Consultor de Infraestrutua</h3>
    </div>
</template>

<style scoped>

img {
  border-radius: 50%;
  height: 250px;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
