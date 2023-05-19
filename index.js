// fetch('https://restcountries.com/v3.1/all')
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error))


//async and await

async function getCountries(){
    try {
        let res = await fetch("https://restcountries.com/v3.1/all")
        let country = await res.json()
        return country
    } catch (error) {
        console.log(error)
    }
}


async function getWeather(latlng){
    try {
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid={apiKey}`)
            let data = await res.json()
            return data.main.temp - 273.15
    } catch (error) {
        console.log(error)
    }
}

async function myCountries(){
    let data = await getCountries()

    let parent = document.createElement('div')
    parent.setAttribute('id','parent')
    document.body.appendChild(parent)

    data.forEach((e)=>{
        let child = document.createElement('div')
        child.setAttribute('id','child')

        let image = document.createElement('img')
        image.setAttribute('id','flag')
        image.setAttribute('src',e.flags.svg)
        child.appendChild(image)

        let h2 = document.createElement('h2')
        h2.setAttribute('id','country')
        h2.innerHTML = e.name.common
        child.appendChild(h2)

        let h3 = document.createElement('h3')
        h3.setAttribute('id','capital')
        h3.innerHTML = e.capital?e.capital[0]:''
        child.appendChild(h3)

        let button = document.createElement('button')
        button.innerHTML = "Get Weather"
        button.addEventListener('click',async ()=>{

            let temp = await getWeather(e.latlng)   
            let h3 = document.createElement('h3')
            h3.setAttribute('id','temp')
            h3.innerHTML = `${temp.toFixed(0)} &deg; C`;
            child.appendChild(h3)
        })
        child.appendChild(button)

        parent.appendChild(child)
    })
}

myCountries()