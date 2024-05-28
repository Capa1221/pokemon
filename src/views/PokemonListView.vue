<template>
  <div>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <h3 class="text-primary">Listado de Pokemons</h3>
      </div>
    </div>
    <div class="row p-3 mt-3 mb-3 d-flex justify-content-center">
      <div v-for="pokemon in pokemons" :key="pokemon.name" class="col-sm-10">
        <div @click="watchDetails(pokemon.name)" class="card d-flex justify-content-center align-items-center mb-3">
          <div class="card-title">
            <h4>{{ pokemon.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonServices from '@/services/PokemonServices';

export default {
  name: 'PokemonListView',
  data() {
    return {
      pokemons: [], 
    }
  },
  async created() {
    this.pokemons = await PokemonServices.getPokemons();
  },
  methods: {
    watchDetails(name) {
      this.$router.push({ name: 'PokemonDetail', params: { name } });
    }
  },
}
</script>
