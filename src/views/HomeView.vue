<template>
  <div>
    {{
      pokemons
    }}
  </div>
</template>

<script>
import PokemonServices from '@/services/PokemonServices';

export default {
  name: 'HomeView',
  data() {
    return {
      pokemons: [

      ], 
    }
  },
  async created(){
   this.pokemons= await PokemonServices.getPokemons();
  }
}
</script>
