const express =  require('express');
const hbs = require('hbs');
const fs = require('fs');
const app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine' , 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req , res , next) => {
    let now  = new Date().toString();
    let method = req.method;
    let url = req.url;
    fs.appendFile('logs.json' , JSON.stringify({now,method,url}),(error) =>{
        
    });
    next();
})

app.use((req,res) => {
    res.render('updating.hbs');
})

app.get('/',(req , res) =>{
    res.send({
        name: 'ahmed',
        age:25
    });
});

app.get('/about',(req,res) =>{
    //res.send('about page');
    res.render('about.hbs',{
        pageTitle: 'About Page ...',
        currentYear: new Date().getFullYear()
    });
})

app.listen(3000);