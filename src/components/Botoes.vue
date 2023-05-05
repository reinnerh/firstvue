<script>
import { useLink } from 'vue-router';


</script>
<template>
    <div class="contatos">
        <div class='github'>
            <button> 
                <a href="https://github.com/reinnerh"><img src="../Photos_Icons/github.png" alt=""></a>
            </button>
        </div>
        <div class='linkedin'>
            <button> 
                <a href="https://www.linkedin.com/in/leonardo-reinner-hubsch-a57017190/"><img src="../Photos_Icons/linkedin.webp" alt=""></a>
            </button>

        </div>
        <div class='whats'>
            <button> 
                <a href="https://wa.me/+5541998673262"><img src="../Photos_Icons/wpp.webp" alt=""></a>
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
</style>
