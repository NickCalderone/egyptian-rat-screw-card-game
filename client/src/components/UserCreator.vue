<script setup>

// import { defineProps } from 'vue';
import { ref } from 'vue';

defineProps(['updater'])

let name = ref("initial");


</script>

<template>
	<p>Prop is: {{ name }}</p>
	<input v-model="name" placeholder="Name" />
	<button @click="updater(name)">make user</button>
</template>