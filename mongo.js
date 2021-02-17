const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const puhelinnimi= process.argv[3]
const puhelinnumero=process.argv[4]

const url =`mongodb+srv://fullstack:${password}@cluster0.ahba7.mongodb.net/phonebook?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

Person.find({}).then(result=>{
    result.forEach(person=>{
        console.log(person)
    })
    
})

const person = new Person({
  name: puhelinnimi,
  number: puhelinnumero,
})

person.save().then(response => {
  console.log(`Added ${puhelinnimi} to phonebook`)
  mongoose.connection.close()
})
