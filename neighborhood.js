const rando = document.querySelector('#yummy')

const foodArr = ['10-62 Saloon', '107 State', '1847 at the Stamm House', '1919 Kitchen & Tap', '1951 West', '19th Hole Sports Bar $ Grill','19th Hole Tavern','2 Brothers Downtown Pub and Grill', '20 and Oakes','23 Steps Inn', '240 West at the Abbey Resort', '2510 Restaurant', 'Applebees Neighborhood Grill $ Bar', 'Corral Bar & Rierside grill', 'Great Dane Pub & Vrew Company','MooseJaw Pizza & Dells Brewing Co,','Par 5 Bistro','The Boathouse', 'Agave Kitchen', 'Alchemy Cafe','Amnicon Bar & Restaurant', 'Applejacks Bar & Grill', 'Avenue Club & The Bubble Up Bar','BackYard Grill and Bar', 'Baileys Harbo Cornerstone Pub','Ballyhoos','Barkers Bar and Grill','Bass Lake Golf Course', 'Beezers Bar and Grill', 'Benvenutos Italian Grill', 'Birch Island Resort, Bar & Grill','Black Bear Bar','Blue Bayou Inn', 'Blue Heron BrewPub','Brat Stop', 'Buckleys Restaurant & Bar','Burgers Bar and Grill','Butternut Hills Golf Course','Cear Lodge','Central House/Boscobel Hotel',' Chances','Char Haus Steak House','Charlies Lake Metonga Resor','Chequamegon Grille','Chet & Emils Restaurant and Motel','Classics Restaurant & lounge','Club 13 Restaurant & Lounge','club 16','Club Northern','Club X to C']

const randomFood = () => {
    const choose = Math.floor(Math.random()*foodArr.length)
        alert(`Looks like your going to ${foodArr[choose]}! Enjoy!!`)
}

rando.addEventListener('click', randomFood)