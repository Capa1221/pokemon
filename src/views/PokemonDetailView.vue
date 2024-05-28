<template>
  <div v-if="pokemon" class="pokemon-detail">
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" :alt="'Imagen de ' + pokemon.name" class="pokemon-image"/>
    <p><strong>Altura:</strong> {{ pokemon.height }}</p>
    <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
    <p><strong>Tipo:</strong>
      <span v-for="(type, index) in pokemon.types" :key="index" class="pokemon-type">
        {{ type.type.name }}<span v-if="index < pokemon.types.length - 1">, </span>
      </span>
    </p>
    <p><strong>Habilidades:</strong>
      <span v-for="(ability, index) in pokemon.abilities" :key="index" class="pokemon-ability">
        {{ ability.ability.name }}<span v-if="index < pokemon.abilities.length - 1">, </span>
      </span>
    </p>
    <p><strong>Movimientos:</strong>
      <span v-for="(move, index) in displayedMoves" :key="index" class="pokemon-move">
        {{ move.move.name }}<span v-if="index < displayedMoves.length - 1">, </span>
      </span>
    </p>
  </div>
</template>

<script>
import PokemonServices from '@/services/PokemonServices';

export default {
  name: 'PokemonDetailView',
  props: ['name'],
  data() {
    return {
      pokemon: null,
      displayedMoves: [],
    };
  },
  async created() {
    this.pokemon = await PokemonServices.getPokemonsDetail(this.name);
    this.displayedMoves = this.pokemon.moves.slice(0, 10); // Limitar a los primeros 10 movimientos para simplicidad
  },
};
</script>

<style scoped>
.pokemon-detail {
  text-align: center;
  font-family: 'Arial', sans-serif;
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  max-width: 450px;
  margin: 40px auto;
  transition: transform 0.2s, box-shadow 0.2s;
}

.pokemon-detail:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.pokemon-detail h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 10px;
  transition: color 0.3s;
}

.pokemon-detail:hover h1 {
  color: #007bff;
}

.pokemon-image {
  width: 200px;
  height: auto;
  margin: 25px 0;
  transition: transform 0.3s;
}

.pokemon-detail:hover .pokemon-image {
  transform: scale(1.1);
}

.pokemon-detail p {
  font-size: 1.2em;
  color: #666;
  margin: 10px 0;
}

.pokemon-detail p strong {
  color: #333;
}

.pokemon-type, .pokemon-ability, .pokemon-move {
  font-weight: bold;
  color: #fff;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  display: inline-block;
  transition: background-color 0.3s;
}

.pokemon-type {
  background-color: #f5a623;
}

.pokemon-ability {
  background-color: #4a90e2;
}

.pokemon-move {
  background-color: #50e3c2;
}

.pokemon-type:hover {
  background-color: #e59400;
}

.pokemon-ability:hover {
  background-color: #3a7fd1;
}

.pokemon-move:hover {
  background-color: #3fd1a2;
}

</style>
