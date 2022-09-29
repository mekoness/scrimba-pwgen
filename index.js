const keys = {
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  }
let passwordEl = document.getElementById("password")
let pwLengthEl = document.getElementById("pw-length")

let letters = document.getElementById("letters").checked
let numbers = document.getElementById("numbers").checked
let symbols = document.getElementById("symbols").checked

let getKey = [
    function characters() {
      if (letters === true) {
        return keys.characters[Math.floor(Math.random() * keys.characters.length)]
      } else {
        return ""
      }
    },
    function number() {
      if (numbers === true) {
        return keys.number[Math.floor(Math.random() * keys.number.length)]
      } else {
        return ""
      }
    },
    function symbol() {
      if (symbols === true) {
        return keys.symbol[Math.floor(Math.random() * keys.symbol.length)]
      } else {
        return ""
      }
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

function checkbox() {
  console.log(symbols)
}
