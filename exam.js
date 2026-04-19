
const APIkey = '5fafd244bde056c7f9d7a839d5dd9b06'


// https://api.openweathermap.org/data/2.5/weather?q=Atyrau&appid=22d18ea952a0477441d1e5b750bb1cb0

let searchBtn = document.querySelector('.fa-magnifying-glass')

searchBtn.addEventListener('click', function Weather(){
    let city = document.querySelector('.search')
    
    const xhr = new XMLHttpRequest
    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=5fafd244bde056c7f9d7a839d5dd9b06`)
    xhr.onload = () => {
        let details = document.querySelector('.details')
        let main_details = document.querySelector('.main_details')
        let container = document.querySelector('.container')
        let error = document.querySelector('.error404')
        let response = JSON.parse(xhr.response)
        
        if (response.cod == 404) {
            container.style.height = '450px'
            error.style.visibility = 'visible'
            main_details.style.visibility = 'hidden'
            details.style.visibility = 'hidden'
        }
        
            
        // }

        else if (response.cod == 200){
            container.style.height = '500px'
            error.style.visibility = 'hidden'
            main_details.style.visibility = 'visible'
            details.style.visibility = 'visible'
            

            
        }

        
        let img = document.querySelector('.main_img')
        console.log(city.value)
        let tempr = document.getElementById('temp')
        let humidity = document.getElementById('humidity')
        let wind = document.getElementById('wind')
        console.log(response)
        let cityName = document.getElementById('city')
        let desc = document.getElementById('desc')
        cityName.innerHTML = response.name

        switch(response.weather[0].main){
            case 'Clouds':
                img.src = 'img/cloudy.png'
                break

            case 'Clear':
                img.src = 'img/sun.png'
                break

            case 'Rain':
                img.src = 'img/storm.png'
                break

            case 'Snow':
                img.src = 'img/snow.png'
                break

            case 'Mist':
                img.src = 'img/fog.png'
                break

            case 'Haze':
                img.src = 'img/clouds.png'
                break

            default:
                img.src = 'img/cloudy.png'
                break
        }


        desc.innerHTML = response.weather[0].description
        tempr.innerHTML = Math.round(response.main.temp) + '°C'
        humidity.innerHTML = Math.round(response.main.humidity) + '%'
        
        wind.innerHTML = Math.round(response.wind.speed) + 'km/h'
        
    }  

    xhr.send()
    city.value = ''
        
       
       
    
    
    
})