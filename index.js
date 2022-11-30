const schemeForm = document.getElementById('scheme-form')
const seed = document.getElementById('seed')
const mode = document.getElementById('mode')

schemeForm.addEventListener('submit', function(e){
    e.preventDefault()
    const seedValue = seed.value.slice(1)
    const modeValue = mode.value
    


    fetch(`https://www.thecolorapi.com/scheme?hex=${seedValue}&mode=${modeValue}&count=5`)
    .then(res => res.json())
    .then(data => console.log(data))

})

