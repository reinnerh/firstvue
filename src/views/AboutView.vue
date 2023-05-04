<script>
export default {
  data() {
    return {
      infos: [
        {
          id: 0,
          empresa: "4network",
          cargo: "Consultor de Infraestrutura",
          atividade1: "Manutenção e acompanhamento da infra da empresa",
          atividade2: "Controle de e-mails e usuarios",
          atividade3: "Auxilio nos ambientes da empresa"
        },
        {
          id: 1,
          empresa: "Premisse Indústria de Cosméticos",
          cargo: "Gestor de Tecnologia da Informação",
          atividade1: "Coordenação de todos assuntos relacionados a tecnologia da empresa",
          atividade2: "Controle e documentação dos processos referentes a tecnologia",
          atividade3: "Manutenção de equipamentos e auxilio aos colaboradores"
        },
        {
          id: 2,
          empresa: "Grupo Bellinati Perez",
          cargo: "Analista de suporte",
          atividade1: "Auxilio aos colaboradores",
          atividade2: "suporte variado relacionado a hardware, software e telecom",
          atividade3: "Manutenção de hardware"
        },
        {
          id: 3,
          empresa: "Grupo Alcatraz Segurança",
          cargo: "Assisdente administrativo e suporte",
          atividade1: "Manutenção e programação de rastreadores",
          atividade2: "Cadastro de usuarios e controle de estoque de equipamentos",
          atividade3: "auxílio a equipe de T.I"
        },
        {
          id: 4,
          empresa: "Cerise Restaurante & Café",
          cargo: "Garçom e T.I",
          atividade1: "Atendimento ao cliente",
          atividade2: "Manutenção dos equipamentos e software relacionado a tecnologia",
          atividade3: "cuidado com estoque e notas"
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="expp" v-for="x in infos">
      <li>{{ infos[x.id].empresa }}</li>
      <li>{{ infos[x.id].cargo }}</li>
      <li>{{ infos[x.id].atividade1 }}</li>
      <li>{{ infos[x.id].atividade2 }}</li>
      <li>{{ infos[x.id].atividade3 }}</li>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: red;
  color: wheat;
}

.h2 {
  color: rgb(0, 113, 189);
}
</style>