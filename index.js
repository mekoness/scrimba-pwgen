const keys = {
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  }
let passOneEl = document.getElementById("password1")
let passTwoEl = document.getElementById("password2")
let pwLengthEl = document.getElementById("pw-length")
let inLettersEl = document.getElementById("in-letters-chk").checked
let inSymbolsEl = document.getElementById("in-symbols-chk").checked
let inNumbersEl = document.getElementById("in-numbers-chk").checked

let getKey = [
    function characters() {
      return keys.characters[Math.floor(Math.random() * keys.characters.length)]
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)]
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)]
    }
]

function getPasswords() {
    let passwordLength = pwLengthEl.value
    let passOne = ""
    while (passwordLength > passOne.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)]
      passOne += keyToAdd()
    }
    passOneEl.textContent = passOne
}