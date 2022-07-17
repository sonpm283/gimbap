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
        let position = element.offsetTop
        
        window.scroll({
            left:0,
            top: position
        })
    })
    
})