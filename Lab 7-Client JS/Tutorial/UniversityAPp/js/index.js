const searchBar = document.querySelector('#search-bar')
const universitiesDD = document.querySelector('#universities')
const searchBtn = document.querySelector('#search-btn')
const website = document.querySelector('#website')
const baseURL = 'http://universities.hipolabs.com/search?country'

searchBtn.onclick = ()=>{
    let url = `${baseURL}=${searchBar.value}`
    getUniversities(url)
}

// localStorage.setItem('item' , 'value')
// let item = localStorage.getItem('item')

async function getUniversities(url){
    //1. to fetch (takes time to respond)
    const data = await fetch(url)

    //2. to parse the data into json
    const universities = await data.json()

    //3. map the data into options
    loadUniversityDD(universities)
}
//[]
function loadUniversityDD(universities) {
    const options = universities.map(uni=> `<option value =${uni.web_pages[0]}>${uni.name}</option>`)
    universitiesDD.innerHTML=options
}

function loadWebsite(url) {
    website.innerHTML = `<td>${url}</td>`
}

