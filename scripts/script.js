"use strict";

function autenticarUsuario(){
    let consulta = conex.query(`SELECT email, senha FROM usu_cadastros WHERE email='daniel.mazzini6@gmail.com' and senha='P3ntatonica#18';`);
    if(consulta){
        console.log('achouu!');
    }else{
        console.log('Errouu');
    };
};

//Main program
const bd = require('mysql2')
let conex = bd.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P3ntatonica#18',
    database: 'usuarios'
});

conex.connect((err)=>{
    if(err){
        return console.log('Falha na conexão')
    }else{
        return console.log('Conexão feita com sucesso')
    }
});

autenticarUsuario()
// let email = document.getElementById('iemail').value;
// let senha = document.getElementById('isenha').value;