<script>
import { useLink } from 'vue-router';


</script>
<template>
    <div class="contatos">
        <div class='github'>
            <button> 
                <a href="https://github.com/reinnerh"><img src="../Photos_Icons/Git.png" alt=""></a>
            </button>
        </div>
        <div class='linkedin'>
            <button> 
                <a href="https://www.linkedin.com/in/leonardo-reinner-hubsch-a57017190/"><img src="../Photos_Icons/Linkedin.png" alt=""></a>
            </button>

        </div>
        <div class='whats'>
            <button> 
                <a href="https://wa.me/+5541998673262"><img src="../Photos_Icons/Whatsapp.png" alt=""></a>
            </button>
        </div>

        
    </div>
</template>

<style scoped>  

button {
    background-color: transparent;
    border-color: transparent;
}

.contatos img {
    width: 50px;
    border-radius: 20px;
}

.contatos {
    background-color: transparent;
      position: fixed;
      bottom: 100px;
      right: 100px;
  }

img{
  max-width: 100%;
}

.github img{
  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;
}

.github img:hover {
  -webkit-transform:scale(1.2);
  transform:scale(1.2);
}

.linkedin img{
  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;
}

.linkedin img:hover {
  -webkit-transform:scale(1.2);
  transform:scale(1.2);
}

.whats img{
  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;
}

.whats img:hover {
  -webkit-transform:scale(1.2);
  transform:scale(1.2);
}

</style>
