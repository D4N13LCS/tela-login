"use strict";

const bd = require('mysql2')
conex = bd.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P3ntatonica#18',
    database: 'usuarios'
})

conex.connect((err)=>{
    if(err){
        return console.log('Falha na conexão')
    }else{
        return console.log('Conexão feita com sucesso')
    }
})

let email = document.getElementById('iemail').value;
let senha = document.getElementById('isenha').value;

conex.query()