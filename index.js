const schemeForm = document.getElementById('scheme-form')
const seed = document.getElementById('seed')
const mode = document.getElementById('mode')
let colorArray=[]


function renderColors(){
    let html=''
    for (let i of colorArray){
        html += `
        <div>
        <img src='${i.image.bare}' class='color-scheme'>
        <p id='${i.hex.value}' class='hex-value'>${i.hex.value}</p>
        </div>
               `
    }
    document.getElementById('returned-colors').innerHTML = html  
}


schemeForm.addEventListener('submit', function(e){
    e.preventDefault()
    const seedValue = seed.value.slice(1)
    const modeValue = mode.value
    

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedValue}&mode=${modeValue}&count=5`)
    .then(res => res.json())
    .then(data => {
        for (let color of data.colors){
            colorArray.push(color)
        }
        renderColors()
        colorArray=[]
        
        document.querySelectorAll('.hex-value').forEach((color)=> {
            color.addEventListener('click',function(e){
                let copyText = e.target.id;
                navigator.clipboard.writeText(copyText).then(() => {
                    alert("Copied to clipboard");
                    console.log(copyText)
                });
            })

        })

         
        

    })

})


