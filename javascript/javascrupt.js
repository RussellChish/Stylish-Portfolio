const hamburgerMenu = document.querySelector('.hamburger_Menu')

hamburgerMenu.addEventListener('click', (e)=> {e.currentTarget.classList.toggle('open')
console.log(e.target.classList)
}

)