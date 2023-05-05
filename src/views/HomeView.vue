<script>
export default {
  data() {
    return {
      infos: [
        {
          nome: "Leonardo Reinner Hubsch",
          idade:"24 Anos",
          infadd: "teste",
          infadd2: "teste 2",
        },
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="infpe" v-for="x in infos">
      <ul>
        <li class="nome">{{ x.hobbie }}</li>
        <li class="idade">{{ x.nome }}</li>
        <li class="infadd">{{ x.infadd }}</li>
        <li class="infadd">{{ x.infadd2 }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

li {
  list-style-type: none;
}
.container {
    display: flex;
}
.nome {
  font-weight: 800;
  font-size: 25px;
  color: rgb(0, 113, 189);
}
.infadd {
  font-weight: 200;
}

</style>