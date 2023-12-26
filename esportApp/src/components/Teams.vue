<template>
  <div class="container">
    <h1 class="text-center py-5 my-5">Les équipes</h1>
    <div class="d-flex justify-content-end py-2 my-2">
      <RouterLink to="/formulaire">
        <button type="button" class="btn btn-primary">Ajouter une équipe</button>
      </RouterLink>
    </div>

    <table class="table fs-2">
      <thead>
        <tr>
          <th scope="col">Nom de l'équipe</th>
          <th scope="col">Logo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="team in teams" :key="team.id">
          <RouterLink :to="{ name: 'infos', params: { id: team.id } }">
            <td>{{ team.name }}</td>
          </RouterLink>
          <td scope="row"><img class="w-25" :src="team.logo" alt=""></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  
<script>
import { RouterLink } from 'vue-router';
export default {
  inject: ['teams'],
  components: { RouterLink }
}


</script>
  
<style></style>