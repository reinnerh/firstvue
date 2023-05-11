<script>
import giffoto from "@/Gifs/photo.gif"
import gifgames from "@/Gifs/gamer.gif"
import gifcamp from "@/Gifs/camping.gif"
import gifcooking from "@/Gifs/cooking.gif"
export default {
    data() {
        return {
            infos: [
                {
                    id: 0,
                    hobbie: "Fotografia",
                    gif: giffoto,
                },
                {
                    id: 1,
                    hobbie: "Games",
                    gif: gifgames,
                },
                {
                    id: 2,
                    hobbie: "Acampar",
                    gif: gifcamp,
                },
                {
                    id: 3,
                    hobbie: "Cozinhar",
                    gif: gifcooking,
                }
            ]
        }
    }
}
</script>

<template>
<div id="box">
    <div class="container">
        <div class="hobbies" v-for="x in infos">
            <ul>
                <li class="hobbie">{{ x.hobbie }}</li>
                <br>
                <li class="img"><img :src="x.gif" alt=""></li>
                <br>
            </ul>
        </div>
    </div>
</div>
</template>

<style scoped>

div#box {
  background-color: rgba(146, 146, 146, 0.178);
  width: 750px;
  padding: 45px;
  margin: 15px;
  
}


li {
    list-style-type: none;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hobbie {
    font-weight: 800;
    font-size: 25px;
    color: rgb(0, 113, 189);
    display: flex;
    text-align: center;
    justify-content: center;
}

img {
    width: 400px;

}

.atv {
    font-weight: 200;
}
</style>