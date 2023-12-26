
<template>
  <Navbar />

  <RouterView />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { computed } from 'vue'


export default {
  components: {
    Navbar
  },
  provide() {
    return {
      teams: computed(() => this.teams),
      addTeams: this.addTeams
    }
  },
  data() {
    return {
      teams: [
        { id: 1, name: 'Ultimate Badass', logo: 'https://images.unsplash.com/photo-1559969143-b2defc6419fd?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', players: ['Jonathan Turcotte ', 'Sylvain Le Van', 'Sylvain Castonguay', 'Nicolas Landry', 'Tony Stark'] },
        { id: 2, name: 'Gamer Cats', logo: 'https://images.unsplash.com/photo-1607034071833-18a5b64047ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', players: ['Roxanne Perron', 'Catherine-Ann  Bourget-Gaul', 'Nezoku Kamado', 'Mélissa Veuilleux', 'Lucie Laperle'] }
      ],
    }

  },

  methods: {
    addTeams(team) {
      this.teams.push(team)
    },
  }
}

</script>

<style></style>
