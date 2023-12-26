<template>
    <div class="container py-5 my-5">
        <h1 class="text-center">Bienvenue sur eSport ! </h1>
        <p class="text-center fs-2 py-5">Plongez dans un univers captivant où l'amusement est roi ! eSport vous offre une expérience de jeu en
            ligne exceptionnelle, alliant divertissement, compétition et communauté. Que vous soyez un joueur occasionnel ou
            un passionné, notre plateforme a quelque chose à offrir à tous les niveaux.</p>
        <h2 class="text-center py-2">Découvrez nos jeux</h2>
        <p class="text-center fs-5 fst-italic">(Utiliser les flèches dans le carrousel d'images)</p>
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src=" ../assets/img/league-of-legends.png" class="d-block w-100">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/hyrulewarriors.png" class="d-block w-100">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/smashbros.png" class="d-block w-100">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/genshin.png" class="d-block w-100">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/diablo4.png" class="d-block w-100">
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>
  
  
<script>
export default {
    data() {
        return {

        }
    }
}

</script>
  
<style></style>