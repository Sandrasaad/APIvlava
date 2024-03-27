const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs');
const xlsx = require('xlsx');
const wb = xlsx.readFile('data.xlsx');
let ws = wb.Sheets['services']
app.use(cors())

const PORT = process.env.PORT || 3030;



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/services', function (req, res) {
    // var services = [
    //     { title :'service 1' , Description:'Description 1'},
    //     { title :'service 2' , Description:'Description 2'},
    //     { title :'service 3' , Description:'Description 3'},
    //     { title :'service 4' , Description:'Description 4'},
    //     { title :'service 5' , Description:'Description 5'},
    //     { title :'service 6' , Description:'Description 6'}
    // ]
    // res.send (services);

    let data = xlsx.utils.sheet_to_json(ws)
    res.send(data)
  })

app.listen(PORT)