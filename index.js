const data = await fetch('https://pokeapi.co/api/v2/pokemon/1');
const json = data.json()
const jsondata = await json
console.log(data)
console.log(jsondata)
