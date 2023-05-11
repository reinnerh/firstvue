<script>
export default {
  data() {
    return {
      infos: [
        {
          id: 0,
          empresa: "4Network ",
          cargo: "Consultor de Infraestrutura",
          atividade1: "Manutenção e acompanhamento da infra da empresa;",
          atividade2: "Controle de e-mails e usuários;",
          atividade3: "Auxílio nos ambientes de desenvolvimento;"
        },
        {
          id: 1,
          empresa: "Premisse Indústria de Cosméticos",
          cargo: "Gestor de Tecnologia da Informação",
          atividade1: "Coordenação de todos os assuntos relacionados à tecnologia da empresa;",
          atividade2: "Controle e documentação dos processos referentes à tecnologia;",
          atividade3: "Manutenção de equipamentos e auxílio aos colaboradores;"
        },
        {
          id: 2,
          empresa: "Grupo Bellinati Perez",
          cargo: "Analista de suporte",
          atividade1: "Auxílio aos colaboradores;",
          atividade2: "Suporte variado relacionado à hardware, software e telecom;",
          atividade3: "Manutenção de hardware;"
        },
        {
          id: 3,
          empresa: "Grupo Alcatraz Segurança",
          cargo: "Assistente administrativo e suporte;",
          atividade1: "Manutenção e programação de rastreadores;",
          atividade2: "Cadastro de usuários e controle de estoque de equipamentos;",
          atividade3: "Auxílio à equipe de T.I;"
        },
        {
          id: 4,
          empresa: "Cerise Restaurante & Café",
          cargo: "Garçom e T.I",
          atividade1: "Atendimento ao cliente;",
          atividade2: "Manutenção dos equipamentos e softwares relacionados à tecnologia;",
          atividade3: "Responsável pelo estoque e emissão de notas;"
        },
        {
          id: 5,
          empresa:"Cursos complementares",
          cargo:"",
          atividade1: "Linguagens: Ruby, GO, JS, C, C++, C#",
          atividade2: "AWS Cloud Practitioner, SysOps Administrator",
          atividade3: "Vue JS, DevOps Enginner"
        },
        {
          id: 6,
          empresa:"Projetos",
          cargo:"",
          atividade1: "Finalizados: Migração de domínio 4Network, Exclusive Lounge",
          atividade2: "Em processo: CI/CD Dev 4Network, Azure DevOps, Controle de SMTP",
          atividade3: ""
        }
      ]
    }
  }
}
</script>

<template>
<div id="box">

  <div class="container"> 
    <div class="expp" v-for="x in infos">
      <ul>
        <hr><br>
        <li class="title">{{ x.empresa }}</li>
        <li class="subtitle">{{ x.cargo }}</li>
        <li class="atv">{{ x.atividade1 }}</li>
        <li class="atv">{{ x.atividade2 }}</li>
        <li class="atv">{{ x.atividade3 }}</li>
        <br>
      </ul>
    </div>
  </div>
  <hr class="end">
</div>
</template>

<style scoped>

div#box {
  background-color: rgba(146, 146, 146, 0.178);
  width: 750px;
  padding: 50px;
  margin: 20px;
}

hr.end {
  margin-left: 2vw;
}

li {
  list-style-type: none;
}
.title {
  font-weight: 800;
  font-size: 30px;
  color: rgb(0, 113, 189);
}
.subtitle {
  font-weight: 400;
  font-size: 23px;
  font-weight: bold;
  
}
.atv {
  font-weight: 200;
  font-size: 20px;
}

</style>