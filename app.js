const express=require('express')
const expressLayout=require('express-ejs-layouts')
const app=express()

// Connecting files
app.use('/public',express.static('public'))

// EJS Layouts
app.use(expressLayout)
app.set('view engine','ejs')

// Body Parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',require('./Route/home'))


const PORT=process.env.PORT || 3000
app.listen(PORT,console.log(`Server is connected ${PORT}`))