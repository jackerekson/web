let color = document.querySelector('#color')
let ritual = document.querySelector('#ritual')
let place = document.querySelector('#place')




const favoriteColor = () => {
    alert('Pretty much any shade of blue is going to be right!')
}
console.log(color)

color.addEventListener('click', favoriteColor)

const favoritePlace = () => {
    alert('Well they say there is no place like home... but my favorite place is going to be the beach!')
}

place.addEventListener('click', favoritePlace)

const favoriteRitual = () => {
    alert('Definetly cooking and getting ready for Thanksgiving!')
}

ritual.addEventListener('click', favoriteRitual)

