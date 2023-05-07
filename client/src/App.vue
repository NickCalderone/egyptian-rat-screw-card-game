<script setup>

import { ref } from 'vue'
import { fetchDeck } from './utility'
import UserCreator from './components/userCreator.vue'
import { useFetch } from './utility.js'

let name = ref(null)
let deck_id = ref(null)
let error = ref(null)

let players = ref([]);

function addPlayer(name)
{
  players.value.push(name)
}

async function newGame()
{
  if (players.value.length > 0)
  {
    let data = await useFetch("new/shuffle/?deck_count=1")
    deck_id.value = data.deck_id;
  }
}

</script>

<template>
  <header>
    <h1 class="wrapper">
      Play Egyptian Rat Screw
    </h1>
  </header>

  <main>
    <div class="settings">
      <input v-model="name" placeholder="Name" />
      <button @click="addPlayer(name)">make user</button>
      <br />
      <button @click="newGame">Start a New Game</button>
    </div>
    <div v-if="error">Deck ID: {{ error }}</div>
    <div v-else-if="deck_id">Deck ID: {{ deck_id }}</div>
    <div v-else>Start a new game</div>

    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="deck_id">
      Data loaded:
      <pre>{{ deck_id }}</pre>
    </div>
    <div v-else>Loading...</div>

    <div v-if="players.length > 0" class="field">
      <div v-for="player in players" class="player-area">
        <p>{{ player }}</p>
      </div>
    </div>
    <div v-else>
      Add a player
    </div>
  </main>
</template>

<style scoped>
.settings {
  padding: 40px;
  width: 600px;
}

.field {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  background-color: blue;
  margin: 0 auto;
}

.player-area {
  text-align: center;
  width: 100%;
}

.settings {
  background-color: red;
}
</style>

<!-- // let gameInProgress, first, antepenultimate, penultimate, ultimate, advantage;

// setup Game based on number of players
// find dealer 
// make decks using % and doling out cards

// newTurn

// playacard

// check for face card

// savechance
// if they dont have a card to play

// slap

// check results
// if ultimate equals penultiate, ultimate equals antepenultimate, ultimate equals first, ultimate + penultimate = 10

// award cards
// else 

// penalty

// endTurn

// check if all cards are in someone's hand

// cycle turns -->
