<script setup>
import { ref } from 'vue';
import { fetchDeck } from "./utility"

let deck_id = ref(null)
let players = ref(2)

fetchDeck(deck_id)
function test(){
  fetchDeck(deck_id);
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
      <h2>Radio</h2>
      <input type="radio" id="two" value="2" v-model="players">
      <label for="two">Two</label>
      <br>
      <input type="radio" id="three" value="3" v-model="players">
      <label for="three">Three</label>
      <br>
      <input type="radio" id="four" value="4" v-model="players">
      <label for="four">Four</label>
      <br>
      <input type="radio" id="five" value="5" v-model="players">
      <label for="five">five</label>
      <br>
      <span>Picked: {{ players }}</span>
      <code>{{ deck_id }}</code>
      <button @click="test">fetchDeck</button>
    </div>
  </main>
</template>

<style scoped>
.settings {
  background-color: red;
}
</style>
