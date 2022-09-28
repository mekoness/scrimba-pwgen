const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let passOneEl = document.getElementById("password1")
let passTwoEl = document.getElementById("password2")
let passOne = ""
let passTwo = ""

function getRandom() {
    return characters[ Math.floor( Math.random() * characters.length ) ]
}

function getPasswords() {
    for (let i = 0; i < 16; i++) {
        passOne += getRandom()
    }
    for (let i = 0; i < 16; i++) {
        passTwo += getRandom()
    }
    passOneEl.textContent = passOne
    passTwoEl.textContent = passTwo
    passOne = ""
    passTwo = ""
}