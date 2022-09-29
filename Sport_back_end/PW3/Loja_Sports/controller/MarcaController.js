/* IMPORTAÇÃO DO PACOTE EXPRESS: */
const express = require('express');

/*CONFIGURAÇÃO DAS ROTAS DE CATEGORIA*/
const router = express.Router();

/* IMPORT DA MODEL DE CATEGORIA */
const modelMarca = require('../model/marcaModel');

/* PARAMETROS DE ROTAS (QUALQUER VERBO):
1 - NOME DA ROTA
2 - CALLBACK QUE TRATA REQUISIÇÃO (req) E RESPOSTA (res)
*/
/*ROTAS DE CRUD DE Marca:*/

router.get('/listarMarca', (req, res)=>{

    // console.log('TESTE DE ROTA GET DE MARCAS');
    // console.log('----A REQUISIÇÃO GET PASSOU PELA CATEGORIA CONTROLLER----');
    // res.send('----TESTE DE ROTA GET DE CATEGORIAS----');

    //LISTANDO OS DADOS
    modelMarca.findAll()
        .then(
            (Marca)=>{
                return res.status(200).json(Marca);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados da tabela marca',
                    erroBancoDados: erro
                });
            }
        );

});



//LISTANDO OS DADOS COM CRITÉRIOS
router.get('/listarMarca/:id',(req, res)=>{

    let {id} = req.params;

    modelMarca.findByPk(id)
        .then(
            (categoria)=>{
                res.status(200).json(categoria);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirMarca', (req, res)=>{
    // console.log('A REQUISIÇÃO POST PASSOU PELA CONTROLLER✔️')
    // res.send('TESTE DE ROTA POST DE CATEGORIAS');

        // RECEBER OS DADOS
        // console.log(req);
        // let nome_categoria = req.body.nome_categoria;
        let {nome_marca} = req.body;
        // console.log(nome_marca);

        modelMarca.create(
            {nome_marca}
        ).then(
            ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Categoiria inserida com sucesso!'
                });
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    errorMessagem: 'Houve um erro ao cadastrar a categoria',
                    erroBancoDados: erro
                });
            }
        );
        
        
        // GRAVAR OS DADOS
    
});

router.put('/alterarMarca', (req, res)=>{

    // console.log('A REQUISIÇÃO PUT PASSOU PELA CATEGORIA CONTROLLER');
    // res.send('TESTE DE ROTA PUT DE CATEGORIAS');

    //RECEBENDO OS DADOS:
    let {id, nome_marca} = req.body;

    //ALTERANDO OS DADOS:
    modelMarca.update(
        {nome_marca},
        {where:{id}}
    ).then( ()=>{

        return res.status(201).json({
            erroStatus: false,
            menssagemStatus: 'Categoria alterada com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar a categoria',
                        erroBancoDados: erro
                    });
        }
    );

});

router.delete('/excluirMarca/:id', (req, res)=>{

    // console.log('A REQUISIÇÃO DELETE PASSOU PELA CATEGORIA CONTROLLER');
    // res.send('TESTE DE ROTA DELETE DE CATEGORIAS');

    let {id} = req.params;

    modelMarca.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Categoria excluida com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir a categoria',
                        erroBancoDados: erro
                    });
        }
    );

});

module.exports = router;