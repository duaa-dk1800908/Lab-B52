//step get the references

const countryInputBox = document.querySelector('#country')
const populationInputBox = document.querySelector('#population')
const formElement = document.querySelector('#form')
const countriesTable = document.querySelector('#countries')
const noOfRows = document.querySelector('#no-of-rows')


//Second step
formElement.addEventListener('submit', addCensus)

//localbase and indexDB
//Declare the database [opening / creating]
const db = new Localbase('population.census.db')

let isEdit = false
let censusDocToEdit;

async function addCensus(event) {
    event.preventDefault()
    const census = form2Object(formElement)
    census.population = parseInt(census.population.toString())

    if(isEdit){
        const message = await db.collection('census').doc({id: censusDocToEdit.id}).update(census)
    }else{
        census.id = Date.now().toString()
        const message = await db.collection('census').add(census)
    }
    formElement.reset()
    showCensusData();
}

async function deleteCensus(cid) {
    await db.collection('census').doc({id:cid}).delete()
}
async function editCensus(id){
    censusDocToEdit = await db.collection('census').doc({id}).get()
    countryInputBox.value = censusDocToEdit.country
    populationInputBox.value = censusDocToEdit.population
    isEdit = true
}
function censusToHTMLRow(c) {
    return `
        <tr>
            <td> ${c.country}</td>
            <td> ${c.population}</td>
            <td> 
                <i class="fa fa-pencil" onclick="editCensus('${c.id}')">Edit</i>
                <i class="fa fa-trash" onclick="deleteCensus('${c.id}')">Delete</i>
            </td>
        </tr>
    `
}

async function showCensusData() {
    const limit = parseInt(noOfRows.value)
    const census = await db.collection('census')
        .orderBy("country", "desc")
        .limit(limit)
        .get()
    const censusRows = census.map(c => censusToHTMLRow(c))
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

function form2Object(formElement) {
    const formData = new FormData(formElement)  //data
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }
    return data
}
