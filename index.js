let burger = document.querySelector('.hamburger')
let blackMenu = document.querySelector('.black-menu')
const crossElement = document.createElement('img')


burger.addEventListener('click', function () {
    blackMenu.style.display = 'block'
    crossElement.src = 'images/icon-close.svg'

    blackMenu.appendChild(crossElement)

    crossElement.style.position = 'absolute'
    crossElement.style.top = '30px'
    crossElement.style.right = '20px'
    crossElement.style.cursor = 'pointer'


    const menu = document.createElement('ul')
    menu.id = 'nav-list'

    let list = `
        <p class='list-item'>ABOUT</p>
        <p class='list-item'>CAREERS</p>
        <p class='list-item'>EVENTS</p>
        <p class='list-item'>SUPPORT</p>
        <p class='list-item'>PRODUCT</p>
    `

    menu.innerHTML = list
    menu.style.color = 'white'
    menu.style.position = 'absolute'
    menu.style.zIndex = 5
    menu.style.top = '250px'
    menu.style.left = '20px'
    menu.style.fontSize = '35px'
    menu.style.fontFamily = 'Josefin Sans'
    menu.style.fontWeight = 300

    blackMenu.appendChild(menu)

    let listItem = document.querySelectorAll('.list-item')
    listItem.forEach(function (i) {
        i.style.paddingBottom = '20px'
    })

})

crossElement.addEventListener('click', function () {
    blackMenu.style.display = 'none'
})