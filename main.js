const express=require('express')
require('dotenv').config()

const port=process.env.PORT

const app=express()

app.get('/', (req, res)=>{
    res.send('<h2>work work work</h2>')
})
app.get('/x', (req, res)=>{
    res.send('<h1>Learning backend</h1>')
})

app.listen(port, ()=>console.log(`server running fine on ${port}`));