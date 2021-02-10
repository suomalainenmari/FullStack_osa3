const express=require('express')
const app=express()
app.use(express.json())
app.use(express.static('build'))

const cors=require('cors')
app.use(cors())

var morgan = require('morgan')
morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'))


let persons = [
    { 
      name: "Arto Hellas", 
      number: "040-123456",
      id: 1
    },
    { 
      name: "Ada Lovelace", 
      number: "39-44-5323523",
      id: 2
    },
    { 
      name: "Dan Abramov", 
      number: "12-43-234345",
      id: 3
    },
    { 
      name: "Mary Poppendieck", 
      number: "39-23-6423122",
      id: 4
    }
  ]

app.get('/api/persons', (request,response)=>{
    response.json(persons)
})

app.get('/api/info', (request,response)=>{
    const noPeople=persons.length
    const date = new Date()
    console.log(noPeople)
    response.send(
        `<p>Phonebook has info for ${noPeople} people.</p>
        <p>${date}</p>`)

})

app.get('/api/persons/:id', (request,response)=>{
    const id=Number(request.params.id)
    console.log(id)

    const person=persons.find(person=>person.id===id)
    if (person){
        response.json(person)
    }else{
        response.status(404).end()
        
    }
})

app.delete('/api/persons/:id', (request,response)=>{
    const id= Number(request.params.id)
    persons = persons.filter(person=>person.id!==id)
    response.status(204).end()

})

const generateId=()=>{
    console.log("Generateid funktiossa")
    const maks=1000
    const min=1
    const maxId=persons.length>0
        ? Math.floor(Math.random(...persons.map(n=>n.id))*maks)+min
        //? Math.max(...persons.map(n=>n.id))
        : 0
    console.log(maxId)
    return maxId+1
}

app.post('/api/persons', (request,response)=>{
    
    const nimet = persons.map(person=>person.name)
    const body=request.body
    
    console.log(body.name)
    console.log(body.number)
    if (!body.name){
        return response.status(400).json({
            error:'Name is missing'
        })
    }
    if (!body.number){
        return response.status(400).json({
            error:'Number is missing'
        })
    }

    if(nimet.includes(body.name)){
        return response.status(400).json({
            error:'Name must be unique'
        })
    }

    

    const person= {
        name: body.name,
        number: body.number,
        id:generateId()
    }

    persons=persons.concat(person)
    response.json(person)
})

    const PORT= process.env.PORT || 3001
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
