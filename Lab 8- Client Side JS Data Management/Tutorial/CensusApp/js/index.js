//step get the references

const countryInputBox = document.querySelector('#country')
const populationInputBox = document.querySelector('#population')
const formElement = document.querySelector('#form')


//Second step
formElement.addEventListener('submit', addCensus)

//localbase and indexDB
//Declare the database [opening / creating]
const db =  new Localbase('population.census.db')

async function addCensus(event) {
    event.preventDefault()
    const census = form2Object(formElement)

    census.id = Date.now().toString()
    census.population = parseInt(census.population.toString())

    //take time
    const message = await db.collection('census').add(census)
    formElement.reset()
}

function form2Object(formElement){
    const formData = new FormData(formElement)  //data
    const data = {}
    for (const [key , value] of formData) {
        data[key] = value
    }
    return data
}
