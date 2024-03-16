const marvel_heroes = ["Thor","Hulk","Ironman"]
const dc_heroes = ["superman","flash","Wonderwomen"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);


const allheroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes);

const all_newheroes = [...marvel_heroes,...dc_heroes]
console.log(all_newheroes);


const oryyarray = [1,2,3,[4,5,6],7,[0,9,[5,8,4]]]
const oryysolvesarray = oryyarray.flat(Infinity)
console.log(oryysolvesarray);

console.log(Array.isArray("Devang"));
console.log(Array.from("Devang"));
//Array.of(score1,score2,score3) is used to insert different elements in the array

