const keys = {
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  }
let passwordEl = document.getElementById("password")
let pwLengthEl = document.getElementById("pw-length")

let letters = document.getElementById("letters").checked
let symbols = document.getElementById("symbols").checked
let numbers = document.getElementById("numbers").checked

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

function getPassword() {
    let passwordLength = pwLengthEl.value
    let password = ""
    while (passwordLength > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)]
      password += keyToAdd()
    }
    passwordEl.textContent = password
    return password
}

function copyPassword() {
    password = passwordEl.textContent
    navigator.clipboard.writeText(password)
    alert("Copied password.")
}