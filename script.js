
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['antiquewhite', 'bisque', 'darkgray', 'honeydew', 'khaki', 'lightgreen']

body.style.backgroundColor = 'aliceblue'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}