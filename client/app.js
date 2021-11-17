const form = document.querySelector('form')

form.addEventListener('submit', getResults)
form.addEventListener('#lucky', getOneResult)

function getResults(e) {
    e.preventDefault()
    document.querySelector('.homepage').style.display = 'none'
    console.log('I\'m here')

    // fetch(`http://localhost:3000/resultsList`)
    //   .then(resp => resp.text())
    //   .then(result => document.getElementById('results').textContent = result)
    //   .then(document.getElementsByClassName('homepage').style.display = 'none')
}

function getOneResult(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/results/:index`)
      .then(resp => resp.text())
      .then(quote => document.getElementById('quote').textContent = quote)
}