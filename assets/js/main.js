//goblal variable

window.addEventListener('DOMContentLoaded', () => {
    activeCategory.init()
    fixedMenuCategory.init()
    scrollSpy.init()
})

//global variable
const categoryItem = document.querySelectorAll('.category__item')
const menuBar = document.querySelector('.menubar')
const menuHeight = menuBar.getBoundingClientRect().height

//scrollSpy
const scrollSpy = {
    init: function() {
        this.scrollSpy()
    },
    scrollSpy: function() {
        categoryItem.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                const id = e.currentTarget.dataset.title
                const element = document.getElementById(id)
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
    }
}

//fixed menu
const fixedMenuCategory = {
    init: function() {
        this.fixedMenuCategory()
    },
    fixedMenuCategory: function() {
        window.addEventListener('scroll', () => {
            const scrollHeight = window.pageYOffset
            if(scrollHeight > menuHeight) {
                menuBar.classList.add('menubar--fixed')
            }else {
                menuBar.classList.remove('menubar--fixed')
            }
        })
    }
}

//active category menu
const activeCategory = {
    init: function() {
        this.activeCategory()
    },
    activeCategory: function() {
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
    }
}