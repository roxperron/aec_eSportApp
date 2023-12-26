<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <h2 class="navbar-brand" href="#">eSport</h2>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link active">Accueil</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/equipes" class="nav-link">Équipes</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
  
<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {

        }
    }
}

</script>
  
<style></style>