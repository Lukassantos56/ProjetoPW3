const express = require('express');

const app = express();

app.get('/HomePage', (req, res)=>{
    console.log('Loja de sports');
    res.send('EM CONSTRUCAO✔️');

})

app.get('/Loja', (req, res)=>{

    console.log('Loja de sports');
    res.send('EM CONSTRUCAO✔️');


})

app.listen(555, ()=>{
    console.log(' Servidor rodando em: http://localhost:555');
});
