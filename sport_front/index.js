const express = require('express');

const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');

// ROTAS DE CADASTRO DE CATEGORIA
app.get('/cadastroMarca', (req, res)=>{
    res.render('categoria/index');
});

app.get('/HomeScreen', (req, res)=>{
    res.render('categoria/homeScreen');
});


//ROTA DE LISTAGEM DE CATEGORIAS
app.get('/listarMarca', (req, res)=>{
    
    const urlListagemCategoria = 'http://localhost:3000/listarMarca';

    /*
    CHAMADA PELO AXIOS:
    1 - URL DA ROTA (urlListagemCategoria)
    2 - CALLBACK DA RESPOSTA DA CHAMADA
    */
    axios.get(urlListagemCategoria)
        .then(
            (response)=>{
                // console.log(response.data);
                // res.send(response.data);
                let categorias = response.data;
                res.render('categoria/listarMarca', {categorias});

        }); 
    });

    // ROTA DE LISTAGEM DE EDIÇÂO
    app.get('/formEdicaoMarca/:id', (req, res)=>{

        // RECEBE O ID DE CATEGORIA QUE VAI SER EDITADO
        let {id} = req.params;
        console.log(id);

        //CHMADA DO AXIOS PARA A API
        const urlListagemCategoria = `http://localhost:3000/listarMarca/${id}`;

        axios.get(urlListagemCategoria)
        .then(
            (response)=>{

                let categoria = response.data;
                res.render('categoria/editarMarca', {categoria});

            }
        )
    });

    app.post('/alterarMarca', (req, res)=>{

        const urlAlterarCategoria = 'http://localhost:3000/alterarMarca';
        console.log(req.body);

        axios.put(urlAlterarCategoria, req.body)
        .then(
            res.send('ALTERADO!')
        )

    });

    // app.delete('/excluirCategoriaJogo/:id', (req, res)=>{

    //     let {id} = req.params;
    //     console.log(id);
    //     axios.delete(`http://localhost:3000/excluirCategoriaJogo/${id}`);

    // });

app.listen(3001, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3001');
});