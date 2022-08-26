const content = document.querySelector('.row-content')
const toggleBtns = document.querySelectorAll('.icon-wrapper')

// console.log('aaa', toggleBtn)

// toggleBtn.addEventListener('click', (e) => {
//     console.log('ttclickedt')
//     content.classList.remove('hidden')
// })

// const toggleBtn = () => {
//     console.log('clicked')
//     content.classList.remove('hidden')
// }

toggleBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log('clicked')
        content.classList.toggle('hidden')
    })
})