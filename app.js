require('dotenv').config()

const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const port = process.env.PORT
const app = express()

app.engine('hbs', hbs({ extname: "hbs" }))
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname+"/public")))

app.get('*', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`App running..`)
})