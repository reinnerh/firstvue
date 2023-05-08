<script>
export default {
    data() {
        return {
            infos: [
                {
                    id: 0,
                    hobbie: "Fotografia",
                    gif: "./src/Gifs/photo.gif",
                },
                {
                    id: 1,
                    hobbie: "Games",
                    gif: "./src/Gifs/gamer.gif",
                },
                {
                    id: 2,
                    hobbie: "Acampar",
                    gif: "./src/Gifs/camping.gif",
                },
                {
                    id: 3,
                    hobbie: "Cozinhar",
                    gif: "./src/Gifs/cooking.gif",
                }
            ]
        }
    }
}
</script>

<template>
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
</template>

<style scoped>
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