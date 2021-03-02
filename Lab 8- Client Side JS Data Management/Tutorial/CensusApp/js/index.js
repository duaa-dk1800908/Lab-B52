//step get the references

const countryInputBox = document.querySelector('#country')
const populationInputBox = document.querySelector('#population')
const formElement = document.querySelector('#form')
const countriesTable = document.querySelector('#countries')


//Second step
formElement.addEventListener('submit', addCensus)

//localbase and indexDB
//Declare the database [opening / creating]
const db =  new Localbase('population.census.db')
showCensusData()

async function addCensus(event) {
    event.preventDefault()
    const census = form2Object(formElement)

    census.id = Date.now().toString()
    census.population = parseInt(census.population.toString())

    //take time
    const message = await db.collection('census').add(census)
    formElement.reset()
}

function censusToHTMLRow(c) {
    return `
        <tr>
            <td> ${c.country}</td>
            <td> ${c.population}</td>
            <td> 
                <i class="fa fa-pencil">Edit <i class="fa fa-trash">Delete</i>
            </td>
        </tr>
    `
}
async function showCensusData(){
    const census = await db.collection('census').get()
    const censusRows = census.map(c=> censusToHTMLRow(c))
    countriesTable.innerHTML = `
            <thead>
            <tr>
                <th>Country</th>
                <th>Population</th>
                <th>Action</th>
            </tr>
            </thead>
           <tbody>${censusRows.join('')}</tbody>
        `
}
function form2Object(formElement){
    const formData = new FormData(formElement)  //data
    const data = {}
    for (const [key , value] of formData) {
        data[key] = value
    }
    return data
}
