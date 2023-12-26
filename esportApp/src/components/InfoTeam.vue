<template>
    <h1 class="text-center py-3 my-3">Information de l'équipe</h1>
    <div class="container d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
            <img :src="logo" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title"> Nom de l'équipe : {{ name }}</h5>
                <p class="card-text">Numéro de l'équipe : {{ teamid }}</p>
            </div>

            <div class="card-body">
                <h5 class="card-text">Les joueurs :</h5>
                <ul class="list-group list-group-flush" v-for="player in players">
                    <li class="list-group-item">{{ player }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    inject: ['teams'],
    data() {
        return {
            teamid: this.$route.params.id,
            name: "",
            logo: "",
            players: []



        }
    },
    mounted() {
        for (let i = 0; i < this.teams.length; i++) {
            if (this.teams[i].id == this.teamid) {
                this.name = this.teams[i].name
                this.logo = this.teams[i].logo
                this.players = this.teams[i].players
                break;
            }

        }
    }

}

</script>

<style></style>