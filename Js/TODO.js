const input = document.querySelector('#text')
const btn = document.querySelector('#add')
const task = document.querySelector('#task')

btn.addEventListener('click', () => {
    console.log(input.value)
    const template =  `
    <p>${input.value}</p> 
    `

    task.insertAdjacentHTML('beforebegin', template)
})
    