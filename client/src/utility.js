import { watchEffect } from 'vue'

export function useFetch(url, deck_id)
{
	watchEffect(async () =>
	{
		let response = await (await fetch(url)).json()
		deck_id.value = response.deck_id
	})
}

export function fetchDeck(deck_id)
{
	watchEffect(async () =>
	{
		let response = await (await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")).json()
		deck_id.value = response.deck_id
	})
}