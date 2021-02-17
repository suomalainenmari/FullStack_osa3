require('dotenv').config()
const express=require('express')
const app=express()
const Person = require('./models/person')
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
    Person.find({}).then(persons=>{
        response.json(persons)
    })
})


app.get('/api/info', (request,response)=>{
    const date= new Date()
    Person.find({})
        .then(persons=> {
            response.send (
                `<p>Phonebook has info for ${persons.length} people.</p>
                <p>${date}</p>`)
        
        })
})

app.get('/api/persons/:id', (request,response,next)=>{
    Person.findById(request.params.id)
        .then(person=>{
            if(person){
                response.json(person)
            }else{
                response.status(404).end()
            }
        })
        .catch(error=>next(error))
})


app.delete('/api/persons/:id', (request,response,next)=>{
    Person.findByIdAndRemove(request.params.id)
        .then(result=>{
            response.status(204).end()
        })
        .catch(error=>next(error))
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

app.put('/api/persons/:id', (request,response,next)=>{
    const body=request.body
    
    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person, {new:true})
        .then(updatedPerson=>{
            response.json(updatedPerson.toJSON())
        })
        .catch(error=>next(error))
})

app.post('/api/persons', (request,response,next)=>{
    const body=request.body
    
    console.log(body.name)
    console.log(body.number)
    if (body.name===undefined){
        return response.status(400).json({
            error:'Name is missing'
        })
    }
    if (body.number===undefined){
        return response.status(400).json({
            error:'Number is missing'
        })
    }
    const person= new Person({
        name: body.name,
        number: body.number,
    })

    person
        .save()
        .then(savedPerson=>{
            return savedPerson.toJSON()
        })
        .then(savedAndFormattedPerson=>{
            response.json(savedAndFormattedPerson)
        })
        .catch(error=>next(error))
})


const unknownEndpoint =(request,response)=>{
    response.status(404).send({error:'uknown endpoint'})
}

app.use(unknownEndpoint)

const errorHandler = (error,request,response,next)=>{
    console.error(error.message)

    if (error.name==='CastError'){
        return response.status(400).send({error: 'malformatted id'})
    } else if (error.name==='ValidationError'){
        return response.status(400).json({error: error.message})
    }
    next(error)
}

app.use(errorHandler)

    const PORT= process.env.PORT
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
