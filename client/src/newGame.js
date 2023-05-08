import { useFetch } from "./utility";

export function turnOrder(players)
{
	return players.sort((a, b) =>
	{
		if (a.order > b.order)
		{
			return -1
		} else if (a.order < b.order)
		{
			return 1
		} else return 0
	})

}

export function keyboardHandler(e)
{
	{
		if (e.key == "Shift")
		{
			if (e.location == KeyboardEvent.DOM_KEY_LOCATION_LEFT)
			{
				console.log("left shift")
			} else if (e.location == KeyboardEvent.DOM_KEY_LOCATION_RIGHT)
			{
				console.log("right shift")
			}
		}
	}
}

export async function dealCards(players, deck_id)
{

	let startingDeck = 52;
	let divisible = players.length

	for (let player of players)
	{

		let playerDeck = Math.floor(startingDeck / divisible)
		if (startingDeck % divisible > 0)
		{
			playerDeck = playerDeck + 1
		}

		startingDeck = startingDeck - playerDeck
		divisible = divisible - 1

		let url = `${deck_id}/draw/?count=${playerDeck}`
		let response = await useFetch(url)

		let cardArray = response.cards.map(card =>
		{
			return card.code
		})
		let cardString = cardArray.join()
		let pileUrl = `${deck_id}/pile/${player.name}/add/?cards=${cardString}`
		// console.log(pileUrl)

		let added = await useFetch(pileUrl);
		console.log(added)
	}
}