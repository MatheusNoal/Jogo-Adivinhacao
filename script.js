const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handTryClick)
btnReset.addEventListener('click', playReset)
document.addEventListener('keydown', keyEnter)

function keyEnter(event) {
  if (event.key == 'Enter' && screen1.classList.contains('hide')) {
    playReset()
  }
}

function handTryClick(event) {
  event.preventDefault()
  let inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    document.querySelector('.screen2 h1').innerHTML = `Acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++
}

function playReset() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}