function newElement(url) {
    let element = document.createElement('img')
    element.src = url
    document.body.append(element)
    return element
}

function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

move(newElement('assets/green-character.gif')).to(100, 250)
move(newElement('assets/green-character.gif')).to(100, 250)
move(newElement('assets/tree.png')).to(200, 450)
move(newElement('assets/pillar.png')).to(350, 250)
move(newElement('assets/pine-tree.png')).to(450, 350)
move(newElement('assets/crate.png')).to(150, 350)
move(newElement('assets/well.png')).to(500, 575)


function newItem(url) {
    let item = newElement(url)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}

move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

function newInventory() {
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}

const inventory = newInventory()
move(inventory).to(0, 0)

move(newImage('assets/tree.png')).withArrowKeys(200, 450)
const character = newImage('assets/green-character/static.gif')

if (direction === null) {
    character.src = 'assets/green-character/static.gif'
}
if (direction === 'west') {
    character.src = 'assets/green-character/west.gif'
}
if (direction === 'north') {
    character.src = 'assets/green-character/north.gif'
}
if (direction === 'east') {
    character.src = 'assets/green-character/east.gif'
}
if (direction === 'south') {
    character.src = 'assets/green-character/south.gif'
}

move(character).withArrowKeys(100, 250)