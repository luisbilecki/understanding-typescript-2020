const button = document.querySelector('button')

function clickHandler (message: string) {
  console.log('Clicked!', message)
}

if (button) {
  button.addEventListener('click', clickHandler.bind(this, 'Hey!'))
}

const map = new Map()
