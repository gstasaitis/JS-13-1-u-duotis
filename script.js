// 1. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".

function minutes(minutes){
    const seconds = minutes * 60
    return seconds
}
console.log(minutes(3) + " Seconds")

// 2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.

const yearCount = (year) => (year * 365)
console.log(yearCount(20))

// 3. Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25

const squareCount = (square) => (square * square)
console.log(squareCount(5))

// 4. Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50

const calculateTriangleArea = (height, width) => (height * width) / 2
console.log(calculateTriangleArea(10, 10))

// 5. Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".

let names = "Petras"
const lastLetter = names.slice(-1)
console.log(lastLetter)

// 6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"

function reverseLower(name){
    var splitString = name.split("")
    var reverseArray = splitString.reverse()
    var joinString = reverseArray.join("")
    var toLower = joinString.toLowerCase()
    return toLower
}
console.log(reverseLower(names))

// 7. Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

const numbers = [-1, -100, -5, 10, 0, 11]
const lowestNumb = numbers.sort((a ,b) => a - b)
console.log(lowestNumb[0])

// 8. Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].

const array = Array(3)
    .fill()
    .map(() => Math.floor(10 * Math.random()))
console.log(array)

// 9. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true

const ifHundred = (number1, number2) => (number1 + number2 >= 100)
console.log(ifHundred(10, 50))

// 10. Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]


const nameList = [
    {name: "Alfredas", age: 25}, 
    {name: "Jonas", age: 25}, 
    {name: "Kasparas", age: 20}
]
const listFilter = () => {
    const filterByAge = nameList.sort((a ,b) => b - a)
    const filterByname = filterByAge.sort((a ,b) => a.name < b.name ? 1 : -1)
    return filterByname
}
console.log(listFilter())

// 11. Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true

// myArray = [
//     {2020, 12, 25},
//     {2022, 11, 10}
// ]

// const ifFits = (date1, date2) => (date1 = date2)
// console.log(ifFits(new Date(2020, 12, 25)))



// 12. Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3
const findMissing = num => {
    const max = Math.max(...num)
    const min = Math.min(...num)
    const missing = []

    for(let i=min; i<= max; i++) {
    if(!num.includes(i)) {
        missing.push(i)
    }
    }
    return missing
}
console.log(findMissing([1, 2, 4, 5]))
