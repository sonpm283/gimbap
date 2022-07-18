//goblal variable
const categoryItem = document.querySelectorAll('.category__item')

//active category menu
categoryItem.forEach((item) => {
    item.addEventListener('click', (e) => {
        categoryItem.forEach(category => {
            if(category.classList.contains('menu__item--active')) {
                category.classList.remove('menu__item--active')
            }
            e.currentTarget.classList.add('menu__item--active')
        })
    })

})

//scroll
categoryItem.forEach(item => {

    item.addEventListener('click', (e) => {
        e.preventDefault();

        const id = e.currentTarget.dataset.title
        const element = document.getElementById(id)
        const menuBar = document.querySelector('.menubar')
        const menuHeight = menuBar.getBoundingClientRect().height
        const fixedMenu = menuBar.classList.contains('menubar--fixed')
        let position = element.offsetTop - menuHeight

        if(!fixedMenu) {
            position = position - menuHeight
        }
        window.scroll({
            left:0,
            top: position
        })
    })
})

//fixed nav
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    const menuBar = document.querySelector('.menubar')
    const menuHeight = menuBar.getBoundingClientRect().height
    if(scrollHeight > menuHeight) {
        menuBar.classList.add('menubar--fixed')
    }else {
        menuBar.classList.remove('menubar--fixed')
    }
})