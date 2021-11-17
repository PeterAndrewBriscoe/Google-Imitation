const form = document.querySelector('form')
let resultsList = [
    { url: "https://www.youtube.com/", title: "Youtube", body: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.", index: 0, rank: 0 },
    { url: "https://twitter.com", title: "Twitter", body: "like and subscribe.", index: 1, rank: 2 },
    { url: "https://en.wikipedia.org", title: "Wikipedia", body: "Let's get some learning going on", index: 3, rank: 2 }
]


form.addEventListener('submit', getResults)
form.addEventListener('#lucky', getOneResult)

// function getResults(e) {
//     e.preventDefault()
//     fetch(`http://localhost:3000/resultsList`)
//       .then(resp => resp.text())
//       .then(result => document.getElementById('results').textContent = result)
//       .then(document.querySelector('.homepage').style.display = 'none')
// }

function getResults(e) {
    e.preventDefault()
    document.querySelector('.homepage').style.display = 'none'
    for(let i =0; i<=resultsList.length -1; i++){
        document.body.append(`footer class="${i}"`) 
        document.body.append(`h4 class="${i}"`) 
        document.body.append(`p class="${i}"`)
        document.querySelector(`footer .${i}`).innerHTML += resultsList[i]['url']
        document.querySelector(`h4 .${i}`).innerHTML += resultsList[i]['title']
        document.querySelector(`p .${i}`).innerHTML += resultsList[i]['body']
    }
    document.body.style.display = 'block'
}


function getOneResult(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/results/:index`)
      .then(resp => resp.text())
      .then(quote => document.getElementById('quote').textContent = quote)
}