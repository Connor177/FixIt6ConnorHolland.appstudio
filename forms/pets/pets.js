let pets = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
let pets2 = pets.slice()


//A
let pos = (pets.indexOf('Vinny'))
pets.splice(pos, 1)
console.log(pets)

//B
let martyPos = (pets.indexOf('Marty'))
pets.splice(martyPos, 1)
console.log(pets)

//C
pets.unshift('Nancy')
console.log(pets)

//D
pets.push('Connor Holland')
console.log(pets)

//E
let posRiley = pets.indexOf('Riley')
console.log(posRiley)

//F
let posCindy = (pets.indexOf('Cindy'))
console.log(posCindy)

//G
let withMarmaduke = [pets, 'Marmaduke']
console.log(withMarmaduke)


//PART 2
//A
let removed = pets.shift()
console.log(removed)

//B
pets.unshift('Barney')
console.log(pets)

//C
//had to create a new array using the values and the slice method at the top of the page
let allPets = pets2.concat(['Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed'])
console.log(allPets)

//D
let newRemoved = allPets.shift()
console.log(newRemoved)

//E
//I used pets as the variable above for the array and so for times sake I will use petNames
let petNames = allPets.join(", ")
console.log(petNames)

//F
allPets.unshift('Agnes')
console.log(allPets)





