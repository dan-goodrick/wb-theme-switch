let count = 0;
const element = document.querySelector("#counter")

const increase = () => {
  count++
  element.innerText = count
}
const decrease = () => {
  count--
  element.innerText = count
}
const reset = () => {
  count = 0
  element.innerHTML = `<mark>${count}</mark>`
}

const selectTheme = (theme) => {
  let body = document.querySelector("body")
  body.className = theme
  let main = document.querySelector("main")
  main.className = theme
  // document.querySelector("main").className = theme
  let buttons = document.querySelectorAll("button")
  for (let btn of buttons) {
    btn.className = theme
  }
}
