const schemeForm = document.getElementById('scheme-form')
const seed = document.getElementById('seed')
const mode = document.getElementById('mode')
let colorArray=[]
// function renderColors(){
//     for (let color)
// }


schemeForm.addEventListener('submit', function(e){
    e.preventDefault()
    const seedValue = seed.value.slice(1)
    const modeValue = mode.value
    let html=''

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedValue}&mode=${modeValue}&count=5`)
    .then(res => res.json())
    .then(data => {
        for (let i of data.colors){
            html += `
            <div>
            <img src='${i.image.bare}' class='color-scheme'>
            <p>${i.hex.value}</p>
            </div>
            `
        }
        document.getElementById('returned-colors').innerHTML = html

    })

})

