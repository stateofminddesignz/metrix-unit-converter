const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


const meterToFeet =  3.281
const feetToMeter = 0.3048
const literToGallon =  0.264
const gallonsToLiters = 3.7854118 
const kiloToPound =  2.204
const poundToKilo = 0.45359237

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet.toFixed(3)} feet / ${baseValue} feet = ${baseValue * feetToMeter.toFixed(3)} meters` 
    volumeEl.textContent = `${baseValue} liters = ${baseValue * literToGallon.toFixed(3)} gallons / ${baseValue} gallons = ${baseValue * gallonsToLiters.toFixed(3)} liters`
    massEl.textContent = `${baseValue} kilograms = ${baseValue * kiloToPound.toFixed(3)} pound / ${baseValue} pound = ${baseValue * poundToKilo.toFixed(3)} kilograms`
})

//for first one find feet To meter
//all three values will go in to thee convertbtn fuinction
//round to 3 decimals