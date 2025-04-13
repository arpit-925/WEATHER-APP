// http://api.weatherapi.com/v1/current.json?key=18f5c8a58fda4d5f92c65914251304&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField= document.querySelector(".location p");
const dateandtimeField = document.querySelector(".location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
// const searchButton = document.querySelector(".search_button");
const form = document.querySelector("form");

form.addEventListener(`submit` , searchForLocation)

let target ="Lucknow"

const fetchResults = async (targetLocation) =>{
    let url =`http://api.weatherapi.com/v1/current.json?key=18f5c8a58fda4d5f92c65914251304&q=${targetLocation}&aqi=no
`
const res = await fetch(url)

const data = await res.json()
console.log(data)


let locationName = data.location.name
let time = data.location.localtime

let temp = data.current.temp_c

let condition = data.current.condition.text

updateDetails(temp, locationName, time, condition)




}

function updateDetails(temp, locationName, time, condition){
    temperatureField.innerText = temp;
    locationField.innerText = locationName
    dateandtimeField.innerText = time
    conditionField.innerText = condition

}

function searchForLocation(e){
    e.preventDefault()

    target = searchField.value 
    fetchResults(target)

    
}
fetchResults(target)