const express = require('express')
const path = require('path')
const app = express()
const mainRoute = require('./router/index')
const adminRouter = require('./router/admin')

app.set('view engine', 'pug');
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended : false})) 

app.use(mainRoute)
app.use('/admin', adminRouter)
app.use((req, res , next)=>{
    res.status(404).render('404')
})

app.listen(3000, console.log('http://localhost:3000/'))