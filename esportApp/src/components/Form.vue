<template>
  <div class="container">
    <h1 class="text-center">Ajouter une équipe</h1>
    <p class="text-center fs-2">Compléter vos informations</p>
    <form @submit="checkInfo">

      <div class="row g-3">
        <fieldset>
          <legend>Information de l'équipe</legend>
          <div class="col py-2">
            <input type="text" class="form-control" placeholder="Nom identifiant de l'équipe" v-model="formData.id">
            <span v-if="errors.id">Veuillez remplir ce champ</span>
          </div>
          <div class="col py-2">
            <input type="text" class="form-control" placeholder="Nom de l'équipe" v-model="formData.name">
            <span v-if="errors.name">Veuillez remplir ce champ</span>
          </div>
          <div class="col py-2">
            <input type="text" class="form-control" placeholder="Logo de l'équipe" v-model="formData.logo">
            <span v-if="errors.logo">Veuillez remplir ce champ</span>
          </div>
        </fieldset>


        <fieldset>
          <legend>Information des joueurs</legend>
          <div class="col">
            <input type="text" class="form-control my-2" placeholder="Nom complet du joueur 1"
              v-model="formData.players.joueur1">
            <span v-if="errors.joueur1">Veuillez remplir ce champ</span>

            <input type="text" class="form-control  my-2" placeholder="Nom complet du joueur 2"
              v-model="formData.players.joueur2">
            <span v-if="errors.joueur3">Veuillez remplir ce champ</span>

            <input type="text" class="form-control  my-2" placeholder="Nom complet du joueur 3"
              v-model="formData.players.joueur3">
            <span v-if="errors.joueur3">Veuillez remplir ce champ</span>

            <input type="text" class="form-control  my-2" placeholder="Nom complet du joueur 4"
              v-model="formData.players.joueur4">
            <span v-if="errors.joueur4">Veuillez remplir ce champ</span>

            <input type="text" class="form-control  my-2" placeholder="Nom complet du joueur 5"
              v-model="formData.players.joueur5">
            <span v-if="errors.oueur5">Veuillez remplir ce champ</span>
          </div>
        </fieldset>

      </div>

    
      <button type="submit" class="btn btn-primary mb-3">Ajouter</button>
      

    </form>
  </div>
</template>
  
  
<script>
import { RouterLink } from 'vue-router';
export default {
  inject: ['teams', 'addTeams'],
  components: { RouterLink },
  data() {
    return {
      validForm: false,
      formData: {
        id: '',
        name: '',
        logo: '',
        players: { joueur1: '', joueur2: '', joueur3: '', joueur4: '', joueur5: '' }
      },
      errors: {
        id: false,
        name: false,
        logo: false,
       joueur1: false, 
       joueur2: false, 
       joueur3: false, 
       joueur4:false, 
       joueur5: false,

      }

    }

  },
  methods: {
    checkInfo(e) {

      e.preventDefault();

      this.resetErrors();

      let valid = true

      if (this.formData.id === "") {
        this.errors.id = true
        valid = false
      }

      if (this.formData.name === "") {
        this.errors.name = true
        valid = false
      }

      if (this.formData.logo === "") {
        this.errors.logo = true
        valid = false
      }

      if (this.formData.players.joueur1 === "") {
        this.errors.joueur1 = true
        valid = false
      }

      if (this.formData.players.joueur2 === "") {
        this.errors.joueur2 = true
        valid = false
      }

      if (this.formData.players.joueur3 === "") {
        this.errors.joueur3 = true
        valid = false
      }

      if (this.formData.players.joueur4 === "") {
        this.errors.joueur4 = true
        valid = false
      }

      if (this.formData.players.joueur5 === "") {
        this.errors.joueur5 = true
        valid = false
      }

      if(valid == true){
        this.addTeams(this.formData)
        this.$router.push('/equipes')
      }
    },
    resetErrors() {
      this.errors.id = false
      this.errors.name = false
      this.errors.logo = false
      this.errors.joueur1 = false
      this.errors.joueur2 = false
      this.errors.joueur3 = false
      this.errors.joueur4 = false
      this.errors.joueur5 = false


    }

  }
}


</script>
  
<style>
span{
  color:crimson;
}

</style>