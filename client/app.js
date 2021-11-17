const form = document.querySelector('form')

form.addEventListener('#google', getResults)
form.addEventListener('#lucky', getOneResult)

function getResults(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/${input}`)
      .then(resp => resp.text())
      .then(quote => document.getElementById('quote').textContent = quote)
}

function getOneResult(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/${input}`)
      .then(resp => resp.text())
      .then(quote => document.getElementById('quote').textContent = quote)
}