import { useFetch } from "./utility";


export function nameWarning(name, players){
	console.log(name, players)
	if (!players.some((player) => player.name === name)){
		return null
	} else {
		return "Choose a unique name"
	}
}

export function addPlayer(name, players)
{
	if (!players.some((player) => player.name === name)){
		players.push({ name: name, order: players.length })
		name = null;
	} else {
		console.log("Choose a unique name")
	}
}


export function turnOrder(players)
{
	return players.sort((a, b) =>
	{
		if (a.order > b.order)
		{
			return 1
		} else if (a.order < b.order)
		{
			return -1
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

	//for loops are synchronous so work well for making fetch requests in order, as opposed to forEach
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